import React from "react";
import "./Footer.css";
import img from "../../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import {
    AiFillLinkedin,
    AiFillTwitterSquare,
    AiFillMessage,
} from "react-icons/ai";

const Footer = () => {
    return (
        <section className="section__footer">
            <div className="footer__wrapper container">
                <div className="footer">
                    <div className="left">
                        <div>
                            <Link to="/">
                                <img className="brand__logo" src={img} alt="" />
                            </Link>
                            <p className="section_p">
                                Pepper is one of the most reliable <br />{" "}
                                delievery patlform magement service to <br />{" "}
                                automate your network.
                            </p>
                            <a
                                style={{ display: "inline-block" }}
                                className="btn-primary "
                            >
                                Get Started
                            </a>
                            <div className="social__icons">
                                <AiFillLinkedin
                                    style={{
                                        fontSize: "40px",
                                        marginRight: "16px",
                                    }}
                                />{" "}
                                <AiFillTwitterSquare
                                    style={{
                                        fontSize: "40px",
                                        marginRight: "16px",
                                    }}
                                />{" "}
                                <AiFillMessage
                                    style={{
                                        fontSize: "40px",
                                        marginRight: "16px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="middle">
                            <h3>Pages main</h3>
                            <div className="items">
                                <Link to="/">Home</Link>
                                <Link to="/blog">Blog</Link>
                                <Link>Blog Template</Link>
                                <Link to="/pricing">Pricing</Link>
                                <Link>Pricing E-commerce</Link>
                                <Link to="/about">About</Link>
                                <Link to="/careers">Careers</Link>
                                <Link>Careers Template</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="end">
                            <h3>Template pages</h3>
                            <div className="items">
                                <Link>Style guide</Link>
                                <Link>License</Link>
                                <Link>Changelog</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="bottom">
                    © All rights reserved. Flowset. Powered by Wf.
                </p>
            </div>
        </section>
    );
};

export default Footer;
