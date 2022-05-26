import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: myorder,
    isLoading,
    refetch,
  } = useQuery("myorder", () =>
    fetch(
      `https://enigmatic-ridge-78563.herokuapp.com/part?email=${user.email}`
    ).then(
      (res) => res.json()
      // if (res.status === 401 || res.status === 403) {
      //   signOut(auth);
      //   localStorage.removeItem("accessToken");
      //   navigate("/");
      // }
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(myorder);
  //   Get LoggedIn User's Orders
  // useEffect(() => {
  //   if (user) {
  //     fetch(`https://enigmatic-ridge-78563.herokuapp.com/part?email=${user.email}`, {
  //       method: "GET",
  //       // headers: {
  //       //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       // },
  //     })
  //       .then((res) => {
  //         console.log("res", res);
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setOrders(data);
  //       });
  //   }
  // }, [navigate, user]);
  //   Delete An Order
  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://enigmatic-ridge-78563.herokuapp.com/part/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success(` ${name} is deleted.`);
              //   setDeleteProduct(null);
              refetch();
            }
            Swal.fire("Deleted!", "One item has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myorder?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.username}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => handleDelete(order._id, order.name)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
