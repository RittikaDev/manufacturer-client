import "aos/dist/aos.css";
import React from "react";
import banner from "../../../images/banner (2).jpg";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ImageSlider from "../ImageSlider/ImageSlider";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import { SliderData } from "../SliderData";
import Steps from "../Steps/Steps";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="mt-2 banner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="grid content-center mt-20 banner-first">
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="md:text-7xl text-3xl text-center font-black"
            >
              TechWorld
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="md:text-5xl text-2xl text-center mt-5 font-bold"
            >
              You Best Find Of Computer Parts
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
      <Parts />
      <BusinessSummary />
      <Steps />
      <Reviews />
      <ImageSlider slides={SliderData} />
    </>
  );
};

export default Banner;
