import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [status, setStatus] = useState("");
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const changeStatus = (id) => {
    // console.log(id);
    // orders.map((orde) => {
    //   if (orde._id === id) {
    //     console.log(orde._id);
    //     console.log(orde);
    //     if (orde.paid === true) {
    //       setStatus("Shipped");
    //     }
    //     // const order = {
    //     //   orderID: orde._id,
    //     //   status: "Shipped",
    //     // };
    //     // fetch(`http://localhost:5000/shipped/${id}`, {
    //     //   method: "PATCH",
    //     //   headers: {
    //     //     "content-type": "application/json",
    //     //   },
    //     //   body: JSON.stringify(order),
    //     // })
    //     //   .then((res) => res.json())
    //     //   .then((data) => {
    //     //     console.log(data);
    //     //   });
    //   }
    //   // return id;
    // });
    Swal.fire({
      title: "Do you want to ship this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/shipped/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount > 0) {
            toast.success(` is deleted.`);
            //   setDeleteProduct(null);
            refetch();
          });
      }
    });
  };

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
        fetch(`http://localhost:5000/part/${id}`, {
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
              console.log(orders);
            }
            Swal.fire("Deleted!", "One item has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Paid</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.username}</td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <span className="font-semibold text-error">Unpaid</span>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        {order.status === "Pending" ? (
                          <button
                            className="btn btn-xs btn-success"
                            onClick={() => changeStatus(order._id)}
                          >
                            Pending
                          </button>
                        ) : (
                          <button className="btn btn-xs btn-success">
                            {order.status}
                          </button>
                        )}
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

export default ManageAllOrders;
