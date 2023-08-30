import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";
import PineconePage from "@/templates/PineConePage";

const Home: NextPage = () => {
    return (
        <>
        <HomePage />
        <PineconePage />
    </>
    );
};

export default Home;
