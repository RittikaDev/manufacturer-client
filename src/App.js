import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner/Banner";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Payment from "./Pages/Dashboard/Payment";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Users from "./Pages/Dashboard/Users";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";

function App() {
	return (
		<div className="mx-12">
			<Navbar />
			<Routes>
				<Route path="/" element={<Banner />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/purchase/:id"
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}
				></Route>
				<Route
					path="dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route path="orders" element={<MyOrders />}></Route>
					<Route path="payment/:id" element={<Payment />}></Route>
					<Route path="review" element={<AddReview />}></Route>
					<Route index element={<MyProfile />}></Route>
					<Route path="profile/user/:id" element={<UpdateProfile />}></Route>
					<Route
						path="users"
						element={
							<RequireAdmin>
								<Users />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="addproduct"
						element={
							<RequireAdmin>
								<AddProduct />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="manageproduct"
						element={
							<RequireAdmin>
								<ManageProducts />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="manageall"
						element={
							<RequireAdmin>
								<ManageAllOrders />
							</RequireAdmin>
						}
					></Route>
				</Route>
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				{/* <Route path="blogs" element={<Blogs />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<ToastContainer
				position="top-center"
				autoClose={7000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
}

export default App;
