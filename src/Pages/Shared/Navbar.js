import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";
import logo from "../../images/Logo2.PNG";

const Navbar = () => {
	const [user] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
		localStorage.removeItem("accessToken");
	};
	const menuItems = (
		<>
			<li>
				<CustomLink to="/">Home</CustomLink>
			</li>

			{/* <li>
				<CustomLink to="/blogs">Blogs</CustomLink>
			</li> */}
			<li>{user && <CustomLink to="/dashboard">Dashboard</CustomLink>}</li>
			<li>
				<CustomLink to="/about">About Us</CustomLink>
			</li>
			<li>
				{user ? (
					<button className="btn btn-ghost text-white" onClick={logout}>
						Sign Out <span>{user?.displayName}</span>
					</button>
				) : (
					<CustomLink to="/signup">Signup</CustomLink>
				)}
			</li>
		</>
	);

	return (
		<div
			className="navbar  bg-base-100 drop-shadow-lg rounded-lg z-10 relative"
			style={{
				backgroundColor: "rgb(112 112 112 / 45%)",
			}}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					{/* For smaller screen */}
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
					>
						{menuItems}
					</ul>
				</div>
				<img src={logo} alt="TechWorld" height="130" width="150" />
			</div>
			<div className="navbar-center hidden lg:flex">
				{/* For bigger screen */}
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
			<div className="navbar-end">
				<label
					tabIndex="1"
					htmlFor="dashboard-sidebar"
					className="btn btn-ghost lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
