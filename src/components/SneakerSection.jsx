import React from "react";
import { CardSneakers } from "./CardSneakers";
import "../components/styles/Sneakercontainer.css";

export const SneakerSection = ({ title, items }) => {
  return (
    <div>
      <section className="container">
        <h3 className="heading">{title}</h3>
        <div className="card_content">
        {items.map(item => {
            return <CardSneakers image={item.img} sneakerName = {item.name} price = {item.price} id = {item.id}/>
        })}
        </div>
        
      </section>
    </div>
  );
};
