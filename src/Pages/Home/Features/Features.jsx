import React from "react";
import "./Features.css";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import Card from "./Card/Card";

const data = [
    {
        name: "Email Management",
        icon: icon1,
    },
    {
        name: "Campaign Calender",
        icon: icon2,
    },
    {
        name: "Personal assistance",
        icon: icon3,
    },
    {
        name: "Payment feature",
        icon: icon4,
    },
    {
        name: "Utility apps",
        icon: icon5,
    },
    {
        name: "Sale notification",
        icon: icon6,
    },
];
const Features = () => {
    return (
        <section className="features container">
            <h1 className="outside">Supercharge your </h1>
            <h1 className="outside">workflow to get started</h1>
            <p className="outside">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="card__wrapper">
                {data.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        </section>
    );
};

export default Features;
