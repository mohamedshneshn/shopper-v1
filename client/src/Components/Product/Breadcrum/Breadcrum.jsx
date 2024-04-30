import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="arrow" className="arrow-icon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow" className="arrow-icon" />{" "}
      {props.category}{" "}
      <img src={arrow_icon} alt="arrow" className="arrow-icon" />
      {props.name}
    </div>
  );
};

export default Breadcrum;
