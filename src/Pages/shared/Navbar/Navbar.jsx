import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../../assets/brand.svg.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e.message));
    };

    return (
        <nav className="nav__wrapper container">
            <div className="brand">
                <Link to="/">
                    <img className="brand__logo" src={img} alt="" />
                </Link>
            </div>
            <div
                // className="h-6 w-6 md:hidden"
                style={{ width: "30px", height: "30px" }}
                onClick={() => setOpen(!open)}
                className="icon"
            >
                {open ? <XMarkIcon /> : <Bars3Icon />}
            </div>
            <div
                className={
                    open
                        ? "d__block nav__link transition"
                        : "d__none nav__link transition"
                }
            >
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
                <Link
                    to="/about"
                    style={{
                        color: "var(--secondary)",
                    }}
                >
                    {" "}
                    <span>
                        {" "}
                        <AiOutlineShoppingCart
                            style={{
                                color: "var(--secondary)",
                                fontSize: "17px",
                                marginRight: "12px",
                            }}
                        />{" "}
                    </span>{" "}
                    cart
                </Link>
                {user ? (
                    <Link
                        className="btn-secondary"
                        style={{ color: "var(--secondary)" }}
                        onClick={handleSignOut}
                    >
                        Log out
                    </Link>
                ) : (
                    <>
                        <Link
                            className="btn-secondary"
                            style={{ color: "var(--secondary)" }}
                            to="/login"
                        >
                            Login
                        </Link>
                        <Link
                            style={{ color: "var(--pure)", margin: "0" }}
                            className="btn-primary"
                            to="/register"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );

    // return (
    //     <nav className="nav container">
    //         <div className="brand">
    //             <Link to="/">
    //                 <img className="brand__logo" src={img} alt="" />
    //             </Link>
    //         </div>

    //         <div
    //             // className="h-6 w-6 md:hidden"
    //             style={{ width: "30px", height: "30px" }}
    //             onClick={() => setOpen(!open)}
    //             className="icon"
    //         >
    //             {open ? <XMarkIcon /> : <Bars3Icon />}
    //         </div>
    //         <div className={open ? "d__block pages" : "d__none pages"}>
    //             <Link to="/about">About</Link>
    //             <Link to="/blog">Blog</Link>
    //             <Link to="/pricing">Pricing</Link>
    //             <Link to="/careers">Careers</Link>
    //             <Link to="/contact">Contact</Link>
    //             <Link
    //                 to="/about"
    //                 style={{
    //                     color: "var(--secondary)",
    //                 }}
    //             >
    //                 {" "}
    //                 <span>
    //                     {" "}
    //                     <AiOutlineShoppingCart
    //                         style={{
    //                             color: "var(--secondary)",
    //                             fontSize: "17px",
    //                             marginRight: "12px",
    //                         }}
    //                     />{" "}
    //                 </span>{" "}
    //                 cart
    //             </Link>
    //             <Link
    //                 className="btn-secondary"
    //                 style={{ color: "var(--secondary)" }}
    //                 to="/blog"
    //             >
    //                 Login
    //             </Link>
    //             <Link
    //                 style={{ color: "var(--pure)" }}
    //                 className="btn-primary"
    //                 to="/pricing"
    //             >
    //                 Get started
    //             </Link>
    //         </div>
    //     </nav>
    // );
};

export default Navbar;
