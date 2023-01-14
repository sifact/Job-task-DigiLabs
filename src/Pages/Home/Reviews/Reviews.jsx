import React from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
    return (
        <section className="review">
            <div className="section__wrapper">
                <h1 className="section__title">Don’t take our words for i</h1>
                <h1 className="section__title">t - listen to our clients</h1>
                <p className="section__p">
                    Orci molestie nam vulputate nunc habitant gravida. Interdum{" "}
                    <br /> vitae vivamus ipsum aliquet consectetur aliquam.
                </p>

                <div className="card__wrapper">
                    <div className="review__card">
                        <p>
                            Orci molestie nam vulputate nunc habitant gravida.
                            Interdum vitae vivamus ipsum aliquet consectetur.
                        </p>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <AiFillStar
                                style={{ color: "#00F59B", fontSize: "24px" }}
                            />
                        ))}

                        <h3>Ronald Richards</h3>
                        <span>CEO- Utlta</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
