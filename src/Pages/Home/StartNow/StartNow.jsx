import React from "react";
import "./StartNow.css";

const StartNow = () => {
    return (
        <section className="start__now overview__wrapper container">
            <div className="overview">
                <div style={{ height: "auto" }} className="overview__content">
                    <h1>
                        Focus on the <br /> analytics that matter.
                    </h1>
                    <p>
                        Grow faster with a website that helps you convert <br />
                        more customers.
                    </p>
                    <div className="btn__s">
                        <a className="btn-primary">Get Started Now</a> <br />
                        <a className="btn-secondary">Compare Plans</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartNow;
