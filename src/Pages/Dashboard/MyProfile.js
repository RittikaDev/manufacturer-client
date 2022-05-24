import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  // let uID = user.uid.slice(0, 24);
  // console.log(uID);
  // console.log(uID.toString(16));
  function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join("");
  }
  let uID = ascii_to_hex(user.uid).slice(0, 24);
  console.log(uID);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     address: e.target.address.value,
  //     phone: e.target.phone.value,
  //     education: e.target.education.value,
  //     linkedin: e.target.linkedin.value,
  //   };
  //   const url = `http://localhost:5000/user/${user.uid}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("success", data);
  //       alert("users added successfully!!!");
  //       e.target.reset();
  //     });
  //   console.log(user);
  // };
  return (
    <form className="inventory-text mx-16 my-5">
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
          <input type="text" placeholder="Address" name="address" />
        </p>
        <p className="inventory-textbox">
          <input type="number" placeholder="Phone" name="phone" />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input type="text" placeholder="Education" name="education" />
        </p>
        <p className="inventory-textbox">
          <input type="text" placeholder="LinkedIn" name="linkedin" />
        </p>
      </div>
      <div className="text-center py-2">
        <Link to={`/dashboard/profile/user/${uID}`} className="btn py-2">
          Update Profile
        </Link>
      </div>
    </form>
  );
};

export default MyProfile;
