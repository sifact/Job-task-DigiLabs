import React from "react";
import Features from "./Features/Features";
import Overview from "./Overview/Overview";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import StartNow from "./StartNow/StartNow";
import Support from "./Support/Support";
import TopBar from "./TopBar/TopBar";

const Home = () => {
    return (
        <>
            <TopBar />
            <Overview />
            <Features />
            <Services />
            <Reviews />
            <Support />
            <StartNow />
        </>
    );
};

export default Home;
