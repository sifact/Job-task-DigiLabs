import React from "react";

const Card = ({ item }) => {
    const { name, icon } = item;

    return (
        <div className="card">
            <img src={icon} alt="" />
            <h1
                style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    alignItems: "left",
                    marginBottom: "13.19px",
                    marginTop: "28px",
                }}
            >
                {name}
            </h1>
            <p>
                Vitae massa euismod enim dictum facilisi aliquam, elit, pretium.
                Id laoreet suscipit vel sagittis non commodo semper.
            </p>
        </div>
    );
};

export default Card;
