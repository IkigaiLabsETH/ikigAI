import { AgentTask } from '@/types';
import { webBrowsing } from '@/lib/agents/babyelfagi/tools/webBrowsing';
import { Skill } from '../skill';

// This skill is Specialized for web browsing
// using webBrowsing tool in babydeeragi
export class WebSearch extends Skill {
  name = 'web_search';
  descriptionForHuman = 'A tool that performs web searches.';
  descriptionForModel = 'A tool that performs web searches.';
  icon = '🔎';
  apiKeysRequired = ['openai'];

  async execute(
    task: AgentTask,
    dependentTaskOutputs: string,
    objective: string,
  ): Promise<string> {
    if (!this.valid || this.signal?.aborted) return '';

    const taskOutput =
      (await webBrowsing(
        objective,
        task,
        dependentTaskOutputs,
        this.handleMessage,
        this.verbose,
        undefined,
        this.language,
        this.apiKeys.openai,
        this.signal,
      )) ?? '';

    return taskOutput;
  }
}
