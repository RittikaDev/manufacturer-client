import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Parts.css";
// import motherboard from "../../../images/motherboard.jpg";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  console.log(parts);

  return (
    <section className="cards">
      {parts.map((part) => (
        <article key={part.id} className="cardp card--1">
          <div className="card__info-hover">
            <span className="card__time">
              Minimum Order : {part.minquantity}
            </span>
            <div className="card__clock-info">
              <span className="card__time">
                Available Quantity : {part.availquantity}
              </span>
            </div>
          </div>
          <div className="card__img">
            <img src={part.image} alt="" />
          </div>
          <div className="card_link">
            <div className="card__img--hover">
              <img src={part.image} alt="" />
            </div>
          </div>
          <div className="card__info">
            <span className="card__category">{part.name}</span>
            <h3 className="card__title">{part.description}</h3>
            <div className="card__by">
              <div className="card__author">Price : {part.price}</div>
            </div>
            <Link to={"/purchase/" + part._id} className="btn btn-outline">
              PLACE ORDER
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Parts;
