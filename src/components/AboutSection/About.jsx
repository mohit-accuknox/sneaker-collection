import React from "react";
import Banner from "../Banner/Banner";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Banner title={"KnowUs"} />
      <div className="containerAbout">
        <div className="whoAre">
            <img src="/images/sample-jordans.png" alt="" />
          <div className="whoAreInfo">
            <h3 className="titleInfo">Who We Are?</h3>
            <p className="paraInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              reprehenderit consequatur maiores unde explicabo est animi,
              deleniti aliquid error magni dignissimos pariatur distinctio
              architecto laboriosam in. Possimus deleniti modi maxime natus
              facilis obcaecati pariatur corporis, iure doloribus sit
              perferendis temporibus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
