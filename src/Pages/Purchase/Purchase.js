import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Purchase.css";
import useParts from "../../hooks/useParts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useParts(id);
  const [input, setInput] = useState(0);
  const [defaultInput, setDefaultInput] = useState(0);
  const [finalInput, setFinalInput] = useState(0);
  const [increaseInputError, setIncreaseInputError] = useState(true);
  const [decreaseInputError, setDecreaseInputError] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    setDefaultInput(part.minquantity);
  }, [part.minquantity]);

  const increaseQuantity = (e) => {
    let quantity = parseInt(defaultInput);
    if (quantity < part.availquantity) {
      let increasedQuantity = quantity + 1;
      setDefaultInput(increasedQuantity);
      console.log(defaultInput);
      setIncreaseInputError(true);
      setDecreaseInputError(true);
    } else if ((quantity) => part.availquantity) {
      setIncreaseInputError(false);
      setDecreaseInputError(true);
    }
  };
  //Input value to decrease order items
  const decreaseQuantity = (e) => {
    e.preventDefault();
    let quantity = parseInt(defaultInput);
    console.log(part.minquantity);
    if (quantity > part.minquantity) {
      let decreasedQuantity = quantity - 1;
      console.log(decreasedQuantity);
      setDefaultInput(decreasedQuantity);
      console.log(defaultInput);
      setDecreaseInputError(true);
      setIncreaseInputError(true);
    } else if (quantity <= part.minquantity) {
      setDecreaseInputError(false);
      setIncreaseInputError(true);
    }
  };

  const order = () => {
    const totalPrice = parseInt(part.price) * defaultInput;
    console.log(totalPrice);
    const orderParts = {
      email: user?.email,
      username: user?.displayName,
      name: part.name,
      price: part.price,
      quantity: defaultInput,
      totalPrice: totalPrice,
    };
    console.log(orderParts);
    fetch("https://enigmatic-ridge-78563.herokuapp.com/part", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderParts),
    })
      .then((res) => res.json())
      .then((d) => {
        const { data } = d;
        toast("Order Placed");
      });
  };
  return (
    <>
      <div className="inventory-content mb-8 purchase">
        <div className="inventory-image drop-shadow-2xl">
          <img src={part.image} alt="" />
        </div>
        <div className="inventory-text">
          <div className="inventory-textbox mb-1">
            <h4 className="text-center font-bold">{part.name}</h4>
            <p className="text-center">{part.description}</p>
          </div>
          <div className="grid grid-cols-2 mt-1">
            <p className="inventory-textbox">
              <strong>Minimum Quantity : {part.minquantity}</strong>
            </p>
            <p className="inventory-textbox">
              <strong>Available Quantity : {part.availquantity}</strong>
            </p>
          </div>
          <p className="inventory-textbox text-center mt-2">
            <strong>Price : ${part.price} </strong>
          </p>

          <div className="text-center py-2">
            <button className="btn1 py-2">Delivered</button>
          </div>
        </div>
      </div>
      <div className="inventory-text mx-16 my-5">
        <div className="inventory-textbox mb-1">
          <h4 className="text-center font-bold">Place An Order</h4>
        </div>
        <div className="grid grid-cols-2 mt-1">
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Type here"
              value={user?.displayName}
              className="input input-bordered w-full "
            />
          </p>
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Type here"
              value={user?.email}
              className="input input-bordered w-full"
            />
          </p>
        </div>
        <div className="grid grid-cols-2 mt-1">
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full "
            />
          </p>
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
          </p>
        </div>
        <div className="grid grid-cols-1 mt-1">
          {/* <form className="inventory-textbox" onSubmit={increaseQuantity}> */}
          <div className="inventory-textbox">
            <button className="btn py-2" onClick={increaseQuantity}>
              +
            </button>
            <input
              type="number"
              placeholder="Increase Amount"
              className="input input-bordered w-full max-w-xs"
              value={defaultInput}
            />
            <button className="btn py-2" onClick={decreaseQuantity}>
              -
            </button>
            {!increaseInputError ? <div>Not enough quantity IN STOCK</div> : ""}
            {!decreaseInputError ? (
              <div>Minimum Order {part.minquantity}</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="text-center py-2">
          {!increaseInputError || !decreaseInputError ? (
            <button disabled className="btn py-2">
              Order
            </button>
          ) : (
            <button className="btn py-2" onClick={order}>
              Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Purchase;
