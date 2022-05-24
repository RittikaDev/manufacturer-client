import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
  const [error, setError] = useState("");
  const [num, setNum] = useState(5);

  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.ratings.value > 0 && e.target.ratings.value < 6) {
      setError("");
      let rating = parseInt(e.target.ratings.value);
      const review = {
        name: user?.displayName,
        email: user?.email,
        review: e.target.review.value,
        ratings: rating,
      };
      console.log(review);
      axios.post("http://localhost:5000/reviews", review).then((res) => {
        // console.log(res);
        const { data } = res;
      });
    } else {
      setError("Please enter between 1 to 5");
    }
  };

  return (
    <form className="inventory-text mx-16 my-5" onSubmit={handleSubmit}>
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">Write A Review</h4>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input value={user?.displayName} name="name" />
        </p>
        <p className="inventory-textbox">
          <input value={user?.email} name="email" />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <textarea
            class="textarea textarea-info w-full"
            placeholder="Review..."
            name="review"
          ></textarea>
        </p>
        <p className="inventory-textbox">
          <input
            type="number"
            placeholder="Ratings from 1 to 5"
            class="input input-bordered w-full"
            name="ratings"
          />
          {error ? <p className="text-red-500">{error}</p> : null}
        </p>
      </div>
      <div className="text-center py-2">
        <button className="btn py-2">Post Your Review</button>
      </div>
    </form>
  );
};

export default AddReview;
