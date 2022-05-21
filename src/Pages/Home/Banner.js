import "aos/dist/aos.css";
import React from "react";
import bannerbg from "../../images/bannerbg.jpg";
import banner from "../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-2 banner">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Banner Banner Banner Banner Banner Banner Banner
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src={banner} style={{ height: "100%", width: "50%" }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
