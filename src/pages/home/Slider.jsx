import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper className="slider1"
      // install Swiper modules
      modules={[Navigation, Pagination,  Autoplay,EffectFade, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:2000}}
      loop={true}
      effect="fade"
      navigation
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}

    >
      <SwiperSlide>
        <div id="slider1" className="slider  p-5">
            <div className="textSlider text-light">
                <span className="fw-semibold fs-5">Starting Price <span>$120.00</span></span>
                <h1 className="text-uppercase display-3 fw-semibold py-4">Potable wireless</h1>
                <span><NavLink to={'/shop'} className='sliderbtn text-uppercase text-dark text-decoration-none  bg-light py-3 px-5 fw-semibold'>shop now</NavLink></span>
            </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
        <div id="slider2" className="slider  p-5">
            <div className="textSlider text-light">
            <span className="fw-semibold fs-5">Starting Price <span>$120.00</span></span>
                <h1 className="text-uppercase display-3 fw-semibold py-4">Smart 4k desk</h1>
                <span><NavLink to={'/shop'} className='sliderbtn text-uppercase text-dark text-decoration-none  bg-light py-3 px-5 fw-semibold'>shop collection</NavLink></span>
            </div>
        </div>
    </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
