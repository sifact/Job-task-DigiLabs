import React from "react";
import "./Overview.css";
import logo1 from "../../../assets/tik1.png";
import logo2 from "../../../assets/tik2.png";

const data1 = [
    "public and private chat",
    "Event scheduler",
    "Appointment scheduling",
    "No prior credit card required",
    "Group video calls",
];

const data2 = [
    "Event scheduler",
    "Expert on demand call",
    "Email support for 24/7",
    "Group video calls",
    "Activity Stream",
];

const Overview = () => {
    return (
        <section className="overview__wrapper">
            <div className="overview">
                <div className="overview__content">
                    <h1>
                        A nice and simple <br /> financial overview
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                        <br />
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div className="box__wrapper">
                        <div className="box">
                            <span className="number">120+</span>
                            <span className="text">Useful widgets</span>
                        </div>
                        <div className="box divider">
                            <span className="number">20+</span>
                            <span className="text">Integrations</span>
                        </div>
                        <div className="box">
                            <span className="number">65+</span>
                            <span className="text">Features out</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opportunity">
                <div className="content1">
                    {data1.map((item) => {
                        return (
                            <>
                                <img className="logo" src={logo1} alt="" />
                                <span className="text">{item}</span>
                            </>
                        );
                    })}
                </div>
                <div className="content2">
                    {data2.map((item) => {
                        return (
                            <>
                                <img className="logo" src={logo2} alt="" />
                                <span className="text">{item}</span>
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Overview;
