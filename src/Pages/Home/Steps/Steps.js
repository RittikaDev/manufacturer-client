import React from "react";
import "./Steps.css";
import steps3 from "../../../images/steps3.jpg";
import steps11 from "../../../images/steps11.jpg";
import steps4 from "../../../images/steps4.jpg";
import steps5 from "../../../images/steps5.jpg";
import steps222 from "../../../images/steps222.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHammer,
  faLock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Steps = () => {
  return (
    <div className="step mb-12">
      <h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center mb-11">
        Our Steps Of Delivery
      </h2>
      <ul className="step-ul">
        <li>
          <img src={steps11} alt="" />
          <i className="line">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </i>
          <p>Login</p>
        </li>
        <li>
          <img src={steps222} alt="" />
          <i className="line">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </i>
          <p>Shop</p>
        </li>
        <li>
          <img src={steps3} alt="" />
          <i className="line">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </i>
          <p>Pay</p>
        </li>
        <li>
          <img src={steps4} alt="" />
          <i className="line">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </i>
          <p>Wait</p>
        </li>
        <li>
          <img src={steps5} alt="" />
          <i className="line">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </i>
          <p>Get Delivered</p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
