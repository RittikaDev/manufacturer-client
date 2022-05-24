import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  //   let uID = user.uid.slice(0, 24);
  //   console.log(uID);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      education: e.target.education.value,
      linkedin: e.target.linkedin.value,
    };
    console.log(user);
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        e.target.reset();
      });
    console.log(user);
  };

  return (
    <form className="inventory-text mx-16 my-5" onSubmit={handleSubmit}>
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">Update Your Profile</h4>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input name="name" value={user?.displayName} />
        </p>
        <p className="inventory-textbox">
          <input name="email" value={user?.email} />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input required type="text" placeholder="Address" name="address" />
        </p>
        <p className="inventory-textbox">
          <input required type="number" placeholder="Phone" name="phone" />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input
            required
            type="text"
            placeholder="Education"
            name="education"
          />
        </p>
        <p className="inventory-textbox">
          <input required type="text" placeholder="LinkedIn" name="linkedin" />
        </p>
      </div>
      <div className="text-center py-2">
        <button className="btn py-2">Updated</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
