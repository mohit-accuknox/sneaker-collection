import React from "react";
import "../components/styles/Cardsneaker.css";

export const CardSneakers = ({ image, sneakerName, price, id }) => {
  return (
    <div>
        <div key={id} className="card_container">
          <div className="image">
            <img src={image} alt="Sneakers" />
          </div>
          <div className="product_details">
            <h2 className="title">{sneakerName}</h2>
            <p className="price">Price: {price}</p>
            <button className="add_card">Add to Cart</button>
          </div>
        </div>
      </div>
  );
};
