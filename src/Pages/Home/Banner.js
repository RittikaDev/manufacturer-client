import "aos/dist/aos.css";
import React from "react";
import bannerbg from "../../images/bannerbg.jpg";
import banner from "../../images/banner (2).jpg";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="mt-2 banner">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
				<div className="grid content-center mt-20 banner-first">
					<p
						data-aos="fade-down"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className="text-5xl flex justify-center "
					>
						TechWorld
					</p>
					<p
						data-aos="fade-down"
						data-aos-delay="800"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className="text-3xl flex justify-center  mt-5"
					>
						You Best Find Of Computer Parts
					</p>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-delay="400"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					className="flex my-8 justify-center items-center drop-shadow-xl"
				>
					<img
						src={banner}
						style={{ height: "90%", width: "50%" }}
						alt=""
						className=" rounded-3xl "
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
