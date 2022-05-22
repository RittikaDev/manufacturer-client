import React from "react";
import "./Steps.css";
import banner from "../../../images/banner (2).jpg";

const Steps = () => {
  return (
    <div className="step mb-12">
      <ul className="step-ul">
        <li>
          <img src={banner} alt="" />
          <i>hh</i>
          <p>Select</p>
        </li>
        <li>
          <img src={banner} alt="" />
          <i>hh</i>

          <p>Select</p>
        </li>
        <li>
          <img src={banner} alt="" />
          <i>hh</i>
          <p>Select</p>
        </li>
        <li>
          <img src={banner} alt="" />
          <i>hh</i>
          <p>Select</p>
        </li>
        <li>
          <img src={banner} alt="" />
          <i>hh</i>
          <p>Select</p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
