import React from "react";
import img from "../../../assets/hero3.png";
import "./TopBar.css";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";

const TopBar = () => {
    return (
        <section className="topbar">
            <div className="content">
                <h1 className="section__title">Save more and get your </h1>
                <h1 className="section__title">finances right</h1>

                <p className="section__p">
                    Orci molestie nam vulputate nunc habitant gravida. Interdum{" "}
                    <br />
                    vitae vivamus ipsum aliquet consectetur aliquam.
                </p>

                <a className="btn-primary">Request a demo</a>
            </div>

            <img className="hero-img" src={img} alt="" />

            <h3 className="medium-title">
                Trusted and loved by the world’s best teams
            </h3>

            <div className="company__logo">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
        </section>
    );
};

export default TopBar;
