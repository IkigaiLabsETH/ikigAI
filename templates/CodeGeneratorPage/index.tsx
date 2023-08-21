"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { itemsCode, code, actions } from "@/mocks/code";
import { useOpenAI } from "app/context/OpenAIProvider";

const CodeGeneratorPage = () => {
    const { addMessage, messages } = useOpenAI()
    console.log(messages)
    return (
        <Layout>
            <Chat background="/images/bg-6.jpg" onAddMessage={(message: string) => addMessage(message, true)}>
                {
                    messages.map((message, index) => {
                        if (message.role === "user") {
                            return <Question key={index} content={message.content} />
                        } else {
                            return (<Answer key={index} message="Generating">
                                <Code code={message.content} content={message.content} />
                            </Answer>)
                        }
                    })
                }
            </Chat>
        </Layout>
    );
};

export default CodeGeneratorPage;
