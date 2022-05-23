import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Purchase.css";
import useParts from "../../hooks/useParts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useParts(id);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
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
        <div className="grid grid-cols-2 mt-1">
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Increase Amount"
              class="input input-bordered w-full max-w-xs"
            />
            <button className="btn py-2">Increase</button>
          </p>
          <p className="inventory-textbox">
            <input
              type="text"
              placeholder="Decrease Amount"
              class="input input-bordered w-full max-w-xs"
            />
            <button className="btn py-2">Decrease</button>
          </p>
        </div>

        <div className="text-center py-2">
          <button className="btn py-2">Delivered</button>
        </div>
      </div>
    </>
  );
};

export default Purchase;
