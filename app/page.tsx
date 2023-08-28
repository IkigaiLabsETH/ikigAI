import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";
import PineconePage from "@/templates/PineConePage";
import Filmlover from "./movies/page";

const Home: NextPage = () => {
    return (
        <>
        <HomePage />
        <PineconePage />
        <Filmlover />
    </>
    );
};

export default Home;
