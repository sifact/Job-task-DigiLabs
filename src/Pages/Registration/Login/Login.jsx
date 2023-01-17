import React, { useContext, useState } from "react";
import "./Login.css";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                navigate("/");
            })
            .catch((e) => {
                console.log(e.message);
                setLoginError(e.message);
            });
    };

    return (
        <section className="register">
            <div className="form-wrapper-input">
                <h2 className="section-title center">Login</h2>
                <p style={{ color: "red" }}>{loginError}</p>
                <form
                    className="register-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="register-input"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                        name="email"
                    />
                    {errors.email && (
                        <span style={{ color: "red" }}>Email is required</span>
                    )}
                    <br />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="password"
                        name="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be 6 character or longer",
                            },
                        })}
                    />
                    {errors.password && (
                        <span style={{ color: "red" }}>
                            {errors.password?.message}
                        </span>
                    )}
                    <br />
                    <button className="btn btn-login">Login</button>
                </form>

                <p className="signup-link">
                    Not Sign up yet? <Link to="/register">Register Now</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
