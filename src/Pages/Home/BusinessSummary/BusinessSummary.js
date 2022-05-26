import React from "react";
import "./BusinessSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHammer } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const BusinessSummary = () => {
  return (
    <>
      <h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center my-11">
        Business Summary
      </h2>

      <div className="bussiness">
        <div className="counts ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="count-box">
              <div data-aos="flip-left">
                <FontAwesomeIcon
                  className="fas fa-code"
                  icon={faUser}
                ></FontAwesomeIcon>
              </div>
              <h4 className="font-bold">100+ Customers</h4>
              <p>
                Very proudly announcing we have served more than 100 customers.
              </p>
            </div>
          </div>
        </div>
        <div className="counts ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="count-box">
              <div data-aos="flip-left">
                <FontAwesomeIcon
                  className="fas fa-code"
                  icon={faHammer}
                ></FontAwesomeIcon>
              </div>
              <h4 className="font-bold"> 50+ Parts</h4>

              <p>Currently have over 50 Parts in stock. Growing on demand</p>
            </div>
          </div>
        </div>
        <div className="counts ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="count-box">
              <div data-aos="flip-left">
                <FontAwesomeIcon
                  className="fas fa-code"
                  icon={faStar}
                ></FontAwesomeIcon>
              </div>
              <h4 className="font-bold"> 33K+ Reviews</h4>
              <p>
                Super grateful to our customers for showring us with good
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSummary;
