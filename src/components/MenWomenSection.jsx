import React from "react";
import "../components/styles/MenWomen.css";
import { MenWomenCard } from "./MenWomenCard";

export const MenWomenSection = ({ title,items }) => {
  return (
    <div>
      <section className="containerMen">
        <div className="titleHeading">
          <h2 className="title">{title}</h2>
        </div>
        <div className="productContainer">
          {items.map((item) => {
            return <MenWomenCard title={item.name} price={item.price} img={item.img} id={item.id}/>
          })}
        </div>
      </section>
    </div>
  );
};
