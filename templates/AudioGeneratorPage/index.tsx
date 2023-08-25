"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Audio from "@/components/Audio";
import Characters from "@/components/Characters";
import VideoPlayer from "@/components/VideoPlayer";
import { useOpenAI } from "app/context/OpenAIProvider";

const AudioGeneratorPage = () => {
    const { addMessage, messages } = useOpenAI()
    
    console.log(messages)
    return (
        <Layout>
            <Chat background="/images/bg-4.jpg" typeChat="audio"  onAddMessage={(message: string) => addMessage(message, true)}>
                <Question
                    content={
                        <>
                            Text-to-speech voice: <br></br> <br></br>
                            With ikigAI Voice, you can quickly soundbites thanks to
                            its comprehensive set of pre-designed components and
                            customizable elements.
                        </>
                    }
                />
                <Answer
                    content="Based on the content you provided, I have already applied a confident tone to the audio. Feel free to select the audio and use the actions in the right sidebar to make adjustments."
                    message="Generating answers for you…"
                    loading="Intergrading male voice and adjusting the tone"
                >
                    <Audio />
                </Answer>
                <Question content="Create a video with audio and automatically generate subtitles to accompany it." />
                <Answer
                    content="Cool, before processing the avatar talking video, could you choose a character to get started?"
                    message="Generating answers for you…"
                    hideActions
                >
                    <Characters />
                </Answer>
                <Answer message="Generating answers for you…" hideActions>
                    <VideoPlayer image="/images/video-player-1.jpg" logoHide />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default AudioGeneratorPage;
