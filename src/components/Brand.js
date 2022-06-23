import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Brand = () => {
  return (
    <section class="brand-container">
      <div class="swiper-container brand-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          // modules={[Pagination]}
          // className="mySwiper"
          modules={[Autoplay, Pagination]}
          class="swiper-wrapper"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/1.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/2.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/3.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/4.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/5.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src={require("../assets/images/6.jpg")} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brand;
