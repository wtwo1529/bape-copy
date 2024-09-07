import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import img1 from "./clothes/1.jpg";
import img2 from "./clothes/2.jpg";
import img3 from "./clothes/3.jpg";
import img4 from "./clothes/4.jpg";
import img5 from "./clothes/5.jpg";
import img6 from "./clothes/6.jpg";
import img7 from "./clothes/7.jpg";
import img8 from "./clothes/8.jpg";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="slider-container">
        <h1 className="slider-header">NEW ARRIVALS</h1>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img1}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img2}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img3}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img4}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img5}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img6}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img7}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="img-link">
              <img className="slider-img" src={img8}></img>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
