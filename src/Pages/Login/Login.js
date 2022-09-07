import React, { useEffect, useRef } from "react";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import login from "../../images/login.jpg";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
	// Email & Password
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	// google
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
	const [token] = useToken(user || gUser);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const emailRef = useRef("");

	// navigate
	let navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	useEffect(() => {
		console.log(gUser?.user?.displayName);
		if (token) {
			navigate(from, { replace: true });
		}
		if (user || gUser) {
			navigate(from, { replace: true });
		}
	}, [navigate, from, user, gUser, token]);

	if (loading || gLoading) {
		return <Loading />;
	}

	const onSubmit = (data) => {
		signInWithEmailAndPassword(data.email, data.password);
	};

	const resetPassword = async () => {
		const email = emailRef.current.value;
		await sendPasswordResetEmail(email);
		toast("Sent email");
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
							ref={emailRef}
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
					<button className="button login__submit">
						<span className="button__text">Log In Now</span>
						<i className="button__icon fas fa-chevron-right"></i>
					</button>
				</form>
				<div className="social-login social-login1" style={{ width: "300px" }}>
					<h3 className="uppercase text-xl font-black">
						Don't Have An Account?
					</h3>
				</div>
				<div
					className="mr-12 text-right loginDiv"
					style={{
						marginTop: "-85px",
					}}
				>
					<Link
						className=" border-2 border-stone-600 p-3 googleIcon z-50"
						to="/signup"
					>
						Sign Up
					</Link>
					<span
						className="ml-3 border-2 border-stone-600 p-3 googleIcon"
						onClick={resetPassword}
					>
						Reset Password
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

export default Login;
