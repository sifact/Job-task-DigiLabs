import React from "react";
import "./Support.css";
import icon1 from "../../../assets/support1.png";
import icon2 from "../../../assets/support2.png";
import icon3 from "../../../assets/support3.png";

const Support = () => {
    return (
        <section className="support container">
            <div className="content">
                <h1 className="section__title">Build a powerful </h1>
                <h1 className="section__title">website for your startup.</h1>
                <p className="section__p">
                    Orci molestie nam vulputate nunc habitant gravida. Interdum
                    vitae vivamus ipsum aliquet consectetur aliquam.
                </p>
                <a className="btn-primary">Read More</a>
            </div>
            <div className="support__content">
                <div className="internal__card">
                    <div className="card">
                        <img src={icon1} alt="" />
                        <h1
                            style={{
                                fontWeight: "700",
                                fontSize: "24px",
                                alignItems: "left",
                                marginBottom: "13.19px",
                                marginTop: "28px",
                            }}
                        >
                            7.000 Happy users
                        </h1>
                        <p>
                            Bibendum feugiat mauris, malesuada nulla leo porta
                            et. Nunc eleifend aliquet nullam nec sit gravida ac
                        </p>
                    </div>
                    <div className="card">
                        <img src={icon2} alt="" />
                        <h1
                            style={{
                                fontWeight: "700",
                                fontSize: "24px",
                                alignItems: "left",
                                marginBottom: "13.19px",
                                marginTop: "28px",
                            }}
                        >
                            24/7 Support
                        </h1>
                        <p>
                            Bibendum feugiat mauris, malesuada nulla leo porta
                            et. Nunc eleifend aliquet nullam nec sit gravida ac
                        </p>
                    </div>
                </div>
                <div className="single__card">
                    <div className="card">
                        <img src={icon3} alt="" />
                        <h1
                            style={{
                                fontWeight: "700",
                                fontSize: "24px",
                                alignItems: "left",
                                marginBottom: "13.19px",
                                marginTop: "28px",
                            }}
                        >
                            Global community
                        </h1>
                        <p>
                            Bibendum feugiat mauris, malesuada nulla leo porta
                            et. Nunc eleifend aliquet nullam nec sit gravida ac
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
