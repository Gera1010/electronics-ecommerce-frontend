import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ info,money,data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{info}</span>
                <span className="price">&#8377;{money}</span>
            </div>
        </div>
    );
};

export default Product;