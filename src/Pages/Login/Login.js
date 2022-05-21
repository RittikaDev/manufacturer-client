import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.jpg";

const Login = () => {
  return (
    <div className="flex mt-7 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl mr-1.5 mt-4 ">
        <div
          className="card-body"
          style={{ paddingLeft: "0", paddingRight: "0" }}
        >
          <img src={login} style={{ height: "100%" }} alt="" />
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl px-3">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">LOG IN</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              className="btn w-full max-w-xs mt-4"
              type="submit"
              value="SiGNUP"
            />
          </form>

          <p>
            <small>
              Already Have An Account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
