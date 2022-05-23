import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signupp from "../../images/signup.jpg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  // Email & Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // Google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // update profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // navigate
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, user]);

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex mt-7 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl mr-1.5 mt-4 ">
        <div
          className="card-body"
          style={{ paddingLeft: "0", paddingRight: "0" }}
        >
          <img src={signupp} style={{ height: "100%" }} alt="" />
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl px-3">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">SIGN UP</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Must be six characters or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs"
                {...register("cpassword", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password & Confirm Password does not match", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.cpassword?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.cpassword.message}
                  </span>
                )}
                {errors.cpassword !== errors.password && (
                  <span className="label-text-alt text-red-500">
                    Password & Confirm Password does not match
                  </span>
                )}
              </label>
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
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
