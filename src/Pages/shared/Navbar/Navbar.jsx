import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../../assets/brand.svg.png";

const Navbar = () => {
    return (
        <nav className="nav container">
            <div className="brand">
                <Link to="/">
                    <img className="brand__logo" src={img} alt="" />
                </Link>
            </div>

            <div className="pages">
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="pages">
                <Link to="/about">cart</Link>
                <Link to="/blog">Login</Link>
                <Link to="/pricing">Get started</Link>
            </div>
        </nav>
    );
};

export default Navbar;
