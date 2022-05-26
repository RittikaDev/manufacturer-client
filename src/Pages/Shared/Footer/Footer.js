import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>TechWorld</h3>
        <h5>Foolow us on our socials</h5>
        <ul className="socials">
          <Link to="" className="icon-footer facebookIcon">
            <span className="tooltip">Facebook</span>
            <span className="icon-margin">
              <FontAwesomeIcon className="facebook" icon={faFacebookF}>
                Facebook
              </FontAwesomeIcon>
            </span>
          </Link>
          <Link to="" className="icon-footer instagramIcon">
            <span className="tooltip">Instagram</span>
            <span className="icon-margin ">
              <FontAwesomeIcon
                className="facebook "
                icon={faInstagram}
              ></FontAwesomeIcon>
            </span>
          </Link>
          <Link to="" className=" icon-footer twitterIcon">
            <span className="tooltip">Twitter</span>
            <span className="icon-margin">
              <FontAwesomeIcon
                className="facebook"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </span>
          </Link>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 2022 TechWorld</p>
      </div>
    </footer>
  );
};

export default Footer;
