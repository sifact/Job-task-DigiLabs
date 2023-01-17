import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const onSubmit = () => {
        e.preventDefault();

        const form = e.target;

        const header = form.target.value;

        const updatedData = {
            header,
        };
    };

    return (
        <section className="admin">
            <form className="admin__form">
                <h2>Update Header</h2>
                <input name="header" className="form-input" type="text" />
                <h2>Update Logo</h2>
                <input
                    className="form-input"
                    type="file"
                    name="image"
                    accept="image/*"
                />
            </form>

            <div className="overview__content counter">
                <p style={{ paddingBottom: "1rem", textAlign: "center" }}>
                    Requested Demo
                </p>
                <div className="box__wrapper">
                    <div className="box">
                        <span className="number">{0}</span>
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
