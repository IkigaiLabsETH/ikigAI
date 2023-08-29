import { useState, useEffect } from 'react';
import { Block } from '@/types/babyagi';
import { useAgent } from '@/hooks/babyagi/useAgent';
import { groupMessages } from '@/utils/message';
import { AgentBlock } from '@/components/BabyAgi/Agent/AgentBlock';
import FirstTimeUserMessage from '@/components/BabyAgi/Agent/FirstTimeMessage';
const ExampleUIPage: React.FC = () => {
  const [agentBlocks, setAgentBlocks] = useState<Block[]>([]);
  const { agentMessages, input, handleSubmit, handleInputChange, isRunning } =
    useAgent({
      api: '/api/agent',
      agentId: 'babydeeragi',
    });

  useEffect(() => {
    const newGroupedMessages = groupMessages(agentMessages, isRunning);
    setAgentBlocks(newGroupedMessages);
  }, [agentMessages, isRunning]);

  return (
    <div className="p-12">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Input your objective..."
          onChange={handleInputChange}
        />
      </form>
      {agentBlocks.map((block, index) => (
        <AgentBlock block={block} key={index} />
      ))}
      <FirstTimeUserMessage />
    </div>
  );
};

export default ExampleUIPage;
