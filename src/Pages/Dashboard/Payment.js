import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0RqtFw0hQoKC1ScdHw3Wc4oJYAFFdzsijIuuvMgcHqxl80ncEZGXMAqwEnsoOq13zSeDyjuKiTYkq2HZ8XWnkP00X1lGWA9T"
);

const Payment = () => {
  const { id } = useParams();
  //   const url = `https://secret-dusk-46242.herokuapp.com/booking/${id}`;
  const url = `https://enigmatic-ridge-78563.herokuapp.com/part/${id}`;

  const { data: payment, isLoading } = useQuery(["part", id], () =>
    fetch(url, {
      method: "GET",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(payment);
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {payment.username}</p>
          <h2 className="card-title">Please Pay for {payment.name}</h2>
          <p>
            Your payment for :
            <span className="text-orange-700">{payment.quantity}</span>
          </p>
          <p>Please pay: ${payment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
