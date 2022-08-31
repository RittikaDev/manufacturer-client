import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ImageSlider from "../ImageSlider/ImageSlider";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import Steps from "../Steps/Steps";
import "./Banner.css";
import "aos/dist/aos.css";
import video from "../../../images/videoplayback.mp4";
import Services from "../Services/Services";
import FoundersNote from "../FoundersNote/FoundersNote";

const Banner = () => {
	return (
		<>
			<video className="container-fluid" autoPlay loop muted>
				<source src={video} type="video/mp4" />
			</video>
			<div className="mt-2 banner z-50">
				{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 "> */}
				<div className="grid content-center pb-80 mt-20 banner-first">
					<p
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className="md:text-7xl text-3xl text-center font-black text-slate-200 z-50"
					>
						<span className="bg-gradient-to-r from-slate-200 via-red-100 to-red-700 bg-clip-text text-transparent">
							TechWorld
						</span>
					</p>

					<p
						data-aos="fade-down"
						data-aos-delay="800"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className="md:text-5xl text-2xl text-center mt-5 font-bold text-slate-200 z-50"
					>
						<span className="bg-gradient-to-r from-slate-200 via-red-100 to-red-700 bg-clip-text text-transparent ">
							You Best Find Of Computer Parts
						</span>
					</p>
					<div className="text-center">
						<button
							data-aos="fade-down"
							data-aos-delay="1400"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							className="btn glass md:text-xl text-lg w-90 mt-5 font-bold  w-2/4"
						>
							Glass button
						</button>
					</div>
					{/* </div> */}
					{/* <div
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
					</div> */}
				</div>
			</div>
			<Parts />
			<FoundersNote />
			<Services />
			<BusinessSummary />
			<Steps />
			<Reviews />
			<ImageSlider />
		</>
	);
};

export default Banner;
