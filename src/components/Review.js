import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
      </h1>

      <div className="swiper-container review-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={require("../assets/images/pic1.png")} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={require("../assets/images/pic2.png")} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={require("../assets/images/pic3.png")} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={require("../assets/images/pic4.png")} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
