import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const { refetch, updateInfo } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const header = form.header.value;

        const updatedData = {
            header,
        };

        fetch("http://localhost:5000/update", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success("Heading updated");
                }
                refetch();
                form.reset();
            });
    };

    const handleSubmitLogo = (e) => {
        e.preventDefault();

        const form = e.target;

        const image = form.logo.files[0];

        console.log(image);
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?&key=8bea8e4677498a7b26ff4f1f289dcaeb`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data.display_url);

                const updatedLogo = {
                    logo: data.data.display_url,
                };
                fetch("http://localhost:5000/updateLogo", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedLogo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success("Logo Updated");
                        }
                        refetch();
                        form.reset();
                    });
            });
    };

    return (
        <section className="admin container">
            <div className="admin__form-wrapper">
                <form onSubmit={handleSubmit} className="admin__form">
                    <h2>Update Header</h2>
                    <input
                        name="header"
                        className="form-input"
                        type="text"
                        required
                    />

                    <button className="btn-primary">Submit</button>
                </form>

                <form onSubmit={handleSubmitLogo} className="admin__form">
                    <h2 style={{ marginTop: "2rem" }}>Update Logo</h2>
                    <input
                        className="form-input"
                        type="file"
                        name="logo"
                        accept="image/*"
                        required
                    />
                    <button className="btn-primary">Submit</button>
                </form>
            </div>

            <div className="overview__content counter">
                <p style={{ paddingBottom: "1rem", textAlign: "center" }}>
                    Requested Demo
                </p>
                <div className="box__wrapper">
                    <div className="box">
                        <span className="number">{updateInfo.count}</span>
                        <span style={{ margin: "0" }} className="text">
                            Times
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
