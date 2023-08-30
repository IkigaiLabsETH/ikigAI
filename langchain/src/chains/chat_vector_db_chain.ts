import { PromptTemplate } from "../prompts/prompt.js";
import { BaseLanguageModel } from "../base_language/index.js";
import { VectorStore } from "../vectorstores/base.js";
import { SerializedChatVectorDBQAChain } from "./serde.js";
import { ChainValues } from "../schema/index.js";
import { BaseChain } from "./base.js";
import { LLMChain } from "./llm_chain.js";
import { loadQAStuffChain } from "./question_answering/load.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoadValues = Record<string, any>;

const question_generator_template = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const qa_template = `Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

{context}

Question: {question}
Helpful Answer:`;

export interface ChatVectorDBQAChainInput {
  vectorstore: VectorStore;
  k: number;
  combineDocumentsChain: BaseChain;
  questionGeneratorChain: LLMChain;
  outputKey: string;
  inputKey: string;
}

export class ChatVectorDBQAChain
  extends BaseChain
  implements ChatVectorDBQAChainInput
{
  k = 4;

  inputKey = "question";

  chatHistoryKey = "chat_history";

  get inputKeys() {
    return [this.inputKey, this.chatHistoryKey];
  }

  outputKey = "result";

  vectorstore: VectorStore;

  combineDocumentsChain: BaseChain;

  questionGeneratorChain: LLMChain;

  returnSourceDocuments = false;

  constructor(fields: {
    vectorstore: VectorStore;
    combineDocumentsChain: BaseChain;
    questionGeneratorChain: LLMChain;
    inputKey?: string;
    outputKey?: string;
    k?: number;
    returnSourceDocuments?: boolean;
  }) {
    super();
    this.vectorstore = fields.vectorstore;
    this.combineDocumentsChain = fields.combineDocumentsChain;
    this.questionGeneratorChain = fields.questionGeneratorChain;
    this.inputKey = fields.inputKey ?? this.inputKey;
    this.outputKey = fields.outputKey ?? this.outputKey;
    this.k = fields.k ?? this.k;
    this.returnSourceDocuments =
      fields.returnSourceDocuments ?? this.returnSourceDocuments;
  }

  async _call(values: ChainValues): Promise<ChainValues> {
    if (!(this.inputKey in values)) {
      throw new Error(`Question key ${this.inputKey} not found.`);
    }
    if (!(this.chatHistoryKey in values)) {
      throw new Error(`chat history key ${this.inputKey} not found.`);
    }
    const question: string = values[this.inputKey];
    const chatHistory: string = values[this.chatHistoryKey];
    let newQuestion = question;
    if (chatHistory.length > 0) {
      const result = await this.questionGeneratorChain.call({
        question,
        chat_history: chatHistory,
      });
      const keys = Object.keys(result);
      if (keys.length === 1) {
        newQuestion = result[keys[0]];
      } else {
        throw new Error(
          "Return from llm chain has multiple values, only single values supported."
        );
      }
    }
    const docs = await this.vectorstore.similaritySearch(newQuestion, this.k);
    const inputs = {
      question: newQuestion,
      input_documents: docs,
      chat_history: chatHistory,
    };
    const result = await this.combineDocumentsChain.call(inputs);
    if (this.returnSourceDocuments) {
      return {
        ...result,
        sourceDocuments: docs,
      };
    }
    return result;
  }

  _chainType() {
    return "chat-vector-db" as const;
  }

  static async deserialize(
    data: SerializedChatVectorDBQAChain,
    values: LoadValues
  ) {
    if (!("vectorstore" in values)) {
      throw new Error(
        `Need to pass in a vectorstore to deserialize VectorDBQAChain`
      );
    }
    const { vectorstore } = values;

    return new ChatVectorDBQAChain({
      combineDocumentsChain: await BaseChain.deserialize(
        data.combine_documents_chain
      ),
      questionGeneratorChain: await LLMChain.deserialize(
        data.question_generator
      ),
      k: data.k,
      vectorstore,
    });
  }

  serialize(): SerializedChatVectorDBQAChain {
    return {
      _type: this._chainType(),
      combine_documents_chain: this.combineDocumentsChain.serialize(),
      question_generator: this.questionGeneratorChain.serialize(),
      k: this.k,
    };
  }

  static fromLLM(
    llm: BaseLanguageModel,
    vectorstore: VectorStore,
    options: {
      inputKey?: string;
      outputKey?: string;
      k?: number;
      returnSourceDocuments?: boolean;
      questionGeneratorTemplate?: string;
      qaTemplate?: string;
    } = {}
  ): ChatVectorDBQAChain {
    const { questionGeneratorTemplate, qaTemplate, ...rest } = options;
    const question_generator_prompt = PromptTemplate.fromTemplate(
      questionGeneratorTemplate || question_generator_template
    );
    const qa_prompt = PromptTemplate.fromTemplate(qaTemplate || qa_template);

    const qaChain = loadQAStuffChain(llm, { prompt: qa_prompt });
    const questionGeneratorChain = new LLMChain({
      prompt: question_generator_prompt,
      llm,
    });
    const instance = new this({
      vectorstore,
      combineDocumentsChain: qaChain,
      questionGeneratorChain,
      ...rest,
    });
    return instance;
  }
}
