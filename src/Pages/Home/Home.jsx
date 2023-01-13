import React from "react";
import Features from "./Features/Features";
import Overview from "./Overview/Overview";
import TopBar from "./TopBar/TopBar";

const Home = () => {
    return (
        <>
            <TopBar />
            <Overview />
            <Features />
        </>
    );
};

export default Home;
