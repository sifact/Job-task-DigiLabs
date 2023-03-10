import React, { useContext, useEffect, useState } from "react";
import img from "../../../assets/hero3.png";
import "./TopBar.css";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const TopBar = () => {
    const { updateInfo, refetch } = useContext(AuthContext);

    const [count, setCount] = useState(updateInfo.count | 0);

    const increment = () => {
        setCount((count) => count + 1);
        console.log(count);

        const updateCount = {
            count,
        };
        fetch("http://localhost:5000/updateCount", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateCount),
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
            });
    };

    return (
        <section className="topbar container">
            <div className="content">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ width: "50%" }} className="section__title">
                        {updateInfo.header}
                    </h1>
                </div>

                <p className="section__p">
                    Orci molestie nam vulputate nunc habitant gravida. Interdum{" "}
                    <br />
                    vitae vivamus ipsum aliquet consectetur aliquam.
                </p>

                <a
                    style={{ cursor: "pointer" }}
                    className="btn-primary"
                    onClick={() => increment()}
                >
                    Request a demo
                </a>
            </div>

            <img className="hero-img" src={img} alt="" />

            <h3 className="medium-title">
                Trusted and loved by the world???s best teams
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
