"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Video from "@/components/Video";
import { useOpenAI } from "app/context/OpenAIProvider";

const VideoGenerationPage = () => {
    const { addMessage, messages } = useOpenAI()
    console.log(messages)
    return (
        <Layout>
            <Chat background="/images/bg-2.jpg" typeChat="video" onAddMessage={(message: string) => addMessage(message, true)}>
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
            <Video/ >
        </Layout>
    );
};

export default VideoGenerationPage;
