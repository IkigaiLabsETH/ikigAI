"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";

const NewChatPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-1.jpg" newChat onAddMessage={() => {}}></Chat>
        </Layout>
    );
};

export default NewChatPage;
