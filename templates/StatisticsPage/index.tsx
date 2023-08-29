"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import PreviewPost from "@/components/PreviewPost";
import Answer from "@/components/Answer";
import StatisticsItem from "@/components/StatisticsItem";
import Chart from "@/components/Chart";

import { useOpenAI } from "app/context/OpenAIProvider";

import { statistics } from "@/mocks/statistics";
  

const StatisticsPage = () => {
    const { addMessage, messages } = useOpenAI()
    const prompt = messages[1]?.content; // Retrieve the prompt from messages
    const answer = messages[3]?.content; // Retrieve the answer from messages
    console.log(messages)
    return (
        <Layout>
            <Chat background="/images/bg-4.jpg" onAddMessage={(message: string) => addMessage(message, true)}>
                <Question content={prompt}>
                    <PreviewPost
                        title="Dribbble"
                        content="GM – Dribbble Portfolio"
                        image="/images/dribbble-post-1.jpg"
                    />
                </Question>
                <Answer
                    content={answer}
                    message="Generating answers for you…"
                >
                    <div className="flex space-x-6 2xl:space-x-4 md:block md:space-x-0 md:space-y-3">
                        <StatisticsItem
                            className="flex-1 p-10 gradient-1 rounded-[1.25rem] 2xl:p-6 lg:px-4 md:px-8 md:py-5"
                            image="/images/eye.svg"
                            title="Shot view"
                            value="2.7 ETH"
                        />
                        <StatisticsItem
                            className="flex-1 p-10 gradient-3 rounded-[1.25rem] 2xl:p-6 lg:px-4 md:px-8 md:py-5"
                            image="/images/annotation-check.svg"
                            title="Comments"
                            value="18,000"
                        />
                        <StatisticsItem
                            className="flex-1 p-10 gradient-4 rounded-[1.25rem] 2xl:p-6 lg:px-4 md:px-8 md:py-5"
                            image="/images/heart.svg"
                            title="Likes"
                            value="960,420"
                        />
                    </div>
                    <Chart className="-ml-7 py-6 md:py-3" items={statistics} />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default StatisticsPage;
