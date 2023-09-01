import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";
import PineconePage from "@/templates/PineConePage";
import EthPrice from './page';

const Home: NextPage = () => {
    return (
        <>
        <HomePage />
        <PineconePage />
        <EthPrice />
    </>
    );
};

export default Home;
