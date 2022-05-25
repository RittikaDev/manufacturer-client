import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [userUpdate, setUserUpdate] = useState({});
  const [user] = useAuthState(auth);
  // console.log(user);
  function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join("");
  }
  let uID = ascii_to_hex(user.uid).slice(0, 24);
  // console.log(uID);
  useEffect(() => {
    const url = `http://localhost:5000/users?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setUserUpdate(data[0]);
      });
  }, [user]);
  console.log(userUpdate);
  return (
    <form className="inventory-text mx-16 my-5">
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">My Profile</h4>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">Name : {user?.displayName}</p>
        <p className="inventory-textbox">Email : {user?.email}</p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">Address : {userUpdate?.address}</p>
        <p className="inventory-textbox">Phone : {userUpdate?.phone}</p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">Education : {userUpdate?.education}</p>
        <p className="inventory-textbox">LinkedIn : {userUpdate?.linkedin}</p>
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
