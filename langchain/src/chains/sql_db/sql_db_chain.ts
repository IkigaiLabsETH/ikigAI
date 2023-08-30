import type { TiktokenModel } from "@dqbd/tiktoken";
import { DEFAULT_SQL_DATABASE_PROMPT } from "./sql_db_prompt.js";
import { BaseChain } from "../base.js";
import type { OpenAI } from "../../llms/openai.js";
import { BaseMemory } from "../../memory/base.js";
import { LLMChain } from "../llm_chain.js";
import type { SqlDatabase } from "../../sql_db.js";
import { ChainValues } from "../../schema/index.js";
import { SerializedSqlDatabaseChain } from "../serde.js";
import { BaseLanguageModel } from "../../base_language/index.js";
import {
  calculateMaxTokens,
  getModelContextSize,
} from "../../base_language/count_tokens.js";

export class SqlDatabaseChain extends BaseChain {
  // LLM wrapper to use
  llm: BaseLanguageModel;

  // SQL Database to connect to.
  database: SqlDatabase;

  // Prompt to use to translate natural language to SQL.
  prompt = DEFAULT_SQL_DATABASE_PROMPT;

  // Number of results to return from the query
  topK = 5;

  inputKey = "query";

  outputKey = "result";

  // Whether to return the result of querying the SQL table directly.
  returnDirect = false;

  constructor(fields: {
    llm: BaseLanguageModel;
    database: SqlDatabase;
    inputKey?: string;
    outputKey?: string;
    memory?: BaseMemory;
  }) {
    const { memory } = fields;
    super(memory);
    this.llm = fields.llm;
    this.database = fields.database;
    this.inputKey = fields.inputKey ?? this.inputKey;
    this.outputKey = fields.outputKey ?? this.outputKey;
  }

  async _call(values: ChainValues): Promise<ChainValues> {
    const lLMChain = new LLMChain({
      prompt: this.prompt,
      llm: this.llm,
      outputKey: this.outputKey,
      memory: this.memory,
    });
    if (!(this.inputKey in values)) {
      throw new Error(`Question key ${this.inputKey} not found.`);
    }
    const question: string = values[this.inputKey];
    let inputText = `${question}\nSQLQuery:`;
    const tablesToUse = values.table_names_to_use;
    const tableInfo = await this.database.getTableInfo(tablesToUse);

    const llmInputs = {
      input: inputText,
      top_k: this.topK,
      dialect: this.database.appDataSourceOptions.type,
      table_info: tableInfo,
      stop: ["\nSQLResult:"],
    };
    await this.verifyNumberOfTokens(inputText, tableInfo);

    const intermediateStep: string[] = [];
    const sqlCommand = await lLMChain.predict(llmInputs);
    intermediateStep.push(sqlCommand);
    let queryResult = "";
    try {
      queryResult = await this.database.appDataSource.query(sqlCommand);
      intermediateStep.push(queryResult);
    } catch (error) {
      console.error(error);
    }

    let finalResult;
    if (this.returnDirect) {
      finalResult = { result: queryResult };
    } else {
      inputText += `${+sqlCommand}\nSQLResult: ${JSON.stringify(
        queryResult
      )}\nAnswer:`;
      llmInputs.input = inputText;
      finalResult = { result: await lLMChain.predict(llmInputs) };
    }

    return finalResult;
  }

  _chainType() {
    return "sql_database_chain" as const;
  }

  get inputKeys(): string[] {
    return [this.inputKey];
  }

  static async deserialize(
    data: SerializedSqlDatabaseChain,
    SqlDatabaseFromOptionsParams: (typeof SqlDatabase)["fromOptionsParams"]
  ) {
    const llm = await BaseLanguageModel.deserialize(data.llm);
    const sqlDataBase = await SqlDatabaseFromOptionsParams(data.sql_database);

    return new SqlDatabaseChain({
      llm,
      database: sqlDataBase,
    });
  }

  serialize(): SerializedSqlDatabaseChain {
    return {
      _type: this._chainType(),
      llm: this.llm.serialize(),
      sql_database: this.database.serialize(),
    };
  }

  private async verifyNumberOfTokens(
    inputText: string,
    tableinfo: string
  ): Promise<void> {
    // We verify it only for OpenAI for the moment
    if (this.llm._llmType() !== "openai") {
      return;
    }
    const llm = this.llm as OpenAI;
    const promptTemplate = this.prompt.template;
    const stringWeSend = `${inputText}${promptTemplate}${tableinfo}`;

    const maxToken = await calculateMaxTokens({
      prompt: stringWeSend,
      // Cast here to allow for other models that may not fit the union
      modelName: llm.modelName as TiktokenModel,
    });

    if (maxToken < llm.maxTokens) {
      throw new Error(`The combination of the database structure and your question is too big for the model ${
        llm.modelName
      } which can compute only a max tokens of ${getModelContextSize(
        llm.modelName
      )}.
      We suggest you to use the includeTables parameters when creating the SqlDatabase object to select only a subset of the tables. You can also use a model which can handle more tokens.`);
    }
  }
}
