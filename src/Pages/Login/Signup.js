import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
	// Email & Password
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	// Google
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

	// update profile
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const [token] = useToken(user || gUser);
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
		if (token) {
			navigate(from, { replace: true });
		}
	}, [from, gUser, navigate, token, user]);

	const onSubmit = async (data) => {
		console.log(data);
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });
	};
	return (
		<div className="screen mx-auto my-10">
			<div className="screen__content">
				<form className="login" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="font-black uppercase text-3xl mb-10">Sign Up</h1>
					<div className="login__field">
						<FontAwesomeIcon
							className="login__icon ml-3 mt-1"
							icon={faUser}
						></FontAwesomeIcon>
						<input
							type="text"
							className="login__input ml-2"
							placeholder="Username"
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
					<div className="login__field">
						<FontAwesomeIcon
							className="login__icon ml-3 mt-1"
							icon={faEnvelope}
						></FontAwesomeIcon>
						<input
							type="email"
							className="login__input ml-2"
							placeholder="Email"
							{...register("email", {
								required: { value: true, message: "Email is required" },
								pattern: {
									value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
									message: "Provide a valid email",
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
					<div className="login__field">
						<FontAwesomeIcon
							className="login__icon ml-3 mt-1"
							icon={faLock}
						></FontAwesomeIcon>
						<input
							type="password"
							className="login__input ml-2"
							placeholder="Password"
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
					<div className="login__field">
						<FontAwesomeIcon
							className="login__icon ml-3 mt-1"
							icon={faLock}
						></FontAwesomeIcon>
						<input
							type="password"
							className="login__input ml-2"
							placeholder="Confirm Password"
							{...register("cpassword", {
								required: { value: true, message: "Password is required" },
								minLength: {
									value: 6,
									message: "Password & Confirm Password does not match",
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
					<button className="button login__submit">
						<span className="button__text">Sign Up Now</span>
						<i className="button__icon fas fa-chevron-right"></i>
					</button>
				</form>
				<div className="social-login flex ">
					<h3 className="uppercase text-xl font-black">Sign up via</h3>
					<span
						style={{
							marginTop: "-8px",
						}}
					>
						<FontAwesomeIcon
							className="ml-3 border-2 border-stone-600 p-3 googleIcon"
							icon={faGoogle}
							onClick={() => signInWithGoogle()}
						></FontAwesomeIcon>
					</span>
				</div>
				<div
					className="social-login flex "
					style={{ marginBottom: "-40px", width: "380px" }}
				>
					<h3 className="uppercase text-lg font-black ml-4 mr-3 mt-4">
						Already Have An Account?
					</h3>
					<span
						style={{
							marginTop: "18px",
						}}
					>
						<Link
							className=" border-2 border-stone-600 p-3 googleIcon z-50"
							to="/login"
						>
							Log In
						</Link>
					</span>
				</div>
			</div>
			<div className="screen__background">
				<span className="screen__background__shape screen__background__shape4"></span>
				<span className="screen__background__shape screen__background__shape3"></span>
				<span className="screen__background__shape screen__background__shape2"></span>
				<span className="screen__background__shape screen__background__shape1"></span>
			</div>
		</div>
	);
};

export default Signup;
