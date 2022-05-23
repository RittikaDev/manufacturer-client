import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Purchase.css";
import useParts from "../../hooks/useParts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useParts(id);
  const [input, setInput] = useState(0);
  const [finalInput, setFinalInput] = useState(0);
  const [increaseInputError, setIncreaseInputError] = useState(true);
  const [decreaseInputError, setDecreaseInputError] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  //Input value to increase order items
  const increaseInputs = (e) => {
    let inputValue = parseInt(e.target.value);
    setInput(inputValue);
  };
  console.log(input);
  const increaseQuantity = (e) => {
    e.preventDefault();
    setIncreaseInputError(false);
    setDecreaseInputError(true);
    console.log(input);
    if (input > 0 && input <= part.availquantity) {
      console.log(input);
      setIncreaseInputError(true);
      setFinalInput(input);
      //   setDecreaseInputError(false);
    }
  };
  //Input value to decrease order items
  const decreaseQuantity = (e) => {
    e.preventDefault();
    setDecreaseInputError(false);
    setIncreaseInputError(true);
    if (input > 0 && input >= part.minquantity) {
      setDecreaseInputError(true);
      setFinalInput(input);
    }
  };

  //  place order
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Order placed");
    if (finalInput === input) {
      const orderParts = {
        email: user?.email,
        username: user?.displayName,
        name: part.name,
        price: part.price,
        quantity: finalInput,
      };
      console.log(orderParts);
      axios.post("http://localhost:5000/part", orderParts).then((res) => {
        console.log(res);
        const { data } = res;
      });
    }
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
      <form className="inventory-text mx-16 my-5" onSubmit={handleSubmit}>
        <div className="inventory-textbox mb-1">
          <h4 className="text-center font-bold">Place An Order</h4>
        </div>
        <div className="grid grid-cols-2 mt-1">
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Type here"
              value={user?.displayName}
              class="input input-bordered w-full "
            />
          </p>
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Type here"
              value={user?.email}
              class="input input-bordered w-full"
            />
          </p>
        </div>
        <div className="grid grid-cols-2 mt-1">
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Address"
              class="input input-bordered w-full "
            />
          </p>
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full "
            />
          </p>
        </div>
        <div className="grid grid-cols-1 mt-1">
          {/* <form className="inventory-textbox" onSubmit={increaseQuantity}> */}
          <div className="inventory-textbox">
            <input
              type="number"
              placeholder="Increase Amount"
              class="input input-bordered w-full max-w-xs"
              onBlur={increaseInputs}
            />
            <button className="btn py-2" onClick={increaseQuantity}>
              Increase
            </button>
            <button className="btn py-2" onClick={decreaseQuantity}>
              Decrease
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
          {finalInput === input ? (
            <button className="btn py-2">Order</button>
          ) : (
            <>
              <button disabled className="btn py-2">
                Order
              </button>
              <p>Click On Increase Or Decrease Button</p>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Purchase;
