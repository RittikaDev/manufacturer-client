import React from "react";

const ImageSlider = ({ slides }) => {
  return (
    <>
      <h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center mb-11">
        Upcoming Products
      </h2>
      <div className="carousel w-96 my-8 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/CMtvjnz/ssd.jpg"
            className="w-full"
          />{" "}
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/26r8W1y/processor.jpg"
            className="w-full"
          />{" "}
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/T1CZ1vG/motherboard.jpg"
            className="w-full"
          />{" "}
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/CMSZM0t/microchip.jpg"
            className="w-full"
          />{" "}
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
