import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

import shop1 from "./shop1.jpg";
import shop2 from "./shop2.jpg";
import shop3 from "./shop3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./Shops.css";

export default function Shops() {
  return (
    <>
      <div className="featured-items-container">
        <img src={img1} alt="" className="featured-items" />
        <img src={img2} alt="" className="featured-items" />
      </div>
      <div className="shops-container">
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
            <a href="#" className="shops">
              <img src={shop1} alt="" className="shops-img" />
              <div className="text-container">
                <p className="img-header">SHOP</p>
                <p className="img-subtitle">MEN</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="shops">
              <img src={shop2} alt="" className="shops-img" />
              <div className="text-container">
                <p className="img-header">SHOP</p>
                <p className="img-subtitle">WOMEN</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="shops">
              <img src={shop3} alt="" className="shops-img" />
              <div className="text-container">
                <p className="img-header">SHOP</p>
                <p className="img-subtitle">KIDS</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
