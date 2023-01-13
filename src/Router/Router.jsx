import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            },
            {
                path: "/careers",
                element: <Careers />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;
