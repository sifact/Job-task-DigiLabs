import React from "react";
import "./Services.css";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import icon1 from "../../../assets/tik3.png";
import icon2 from "../../../assets/tik2.png";
import icon3 from "../../../assets/tik1.png";

const Services = () => {
    return (
        <section className="services container">
            <div className="services__wrapper">
                <div style={{ textAlign: "center" }}>
                    <img className="section_img" src={img1} alt="" />
                </div>

                <div className="service__content">
                    <h1 className="section__title">Manage and Track </h1>
                    <h1 className="section__title">Your Projects</h1>
                    <p style={{ marginBottom: "42px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>

                    <div>
                        <img src={icon3} alt="" />
                        <span>Create posts, reels and stories.</span>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <span>Publish your Facebook posts dynamically.</span>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <span>Schedule any Twitter posts.</span>
                    </div>
                </div>
            </div>
            <div className="services__wrapper reverse">
                <div className="service__content">
                    <h1 className="section__title">Easily manage </h1>
                    <h1 className="section__title">your team's tasks</h1>
                    <p style={{ marginBottom: "42px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div>
                        <img src={icon2} alt="" />
                        <span>Create posts, reels and stories.</span>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <span>Publish your Facebook posts dynamically.</span>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <span>Schedule any Twitter posts.</span>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img className="section_img" src={img2} alt="" />
                </div>
            </div>
            <div className="services__wrapper">
                <div style={{ textAlign: "center" }}>
                    <img className="section_img" src={img3} alt="" />
                </div>

                <div className="service__content">
                    <h1 className="section__title">Simple financial </h1>
                    <h1 className="section__title">overview for you</h1>
                    <p style={{ marginBottom: "42px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div>
                        <img src={icon1} alt="" />
                        <span>Create posts, reels and stories.</span>
                    </div>
                    <div>
                        <img src={icon1} alt="" />
                        <span>Publish your Facebook posts dynamically.</span>
                    </div>
                    <div>
                        <img src={icon1} alt="" />
                        <span>Schedule any Twitter posts.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
