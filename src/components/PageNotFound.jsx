import React from "react";
import {useNavigate} from 'react-router-dom'
import "../components/styles/PageNotFound.css";

export const PageNotFound = () => {

    const returnBack = useNavigate()

  return (
    <div>
      <section className="notFound">
        <h1 className="errorHeading">OOPS !</h1>
        <img src="/images/404.webp" alt="" className="errorImg"/>

        <div className="errorContainer">
          <p className="errorTitle">Looks like you are lost</p>
          <p className="errorMessage">
            The page you are looking for not Available !
          </p>
          <button className="goBack" onClick={() => returnBack(-1)}>Go Back</button>
        </div>
      </section>
    </div>
  );
};
