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
import { useTranslation } from "react-i18next";

const Slider = () => {
   // Language
   const { t } = useTranslation();

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
                <span className="fw-semibold fs-5">{t('slider1.0')} <span>$120.00</span></span>
                <h1 className="text-uppercase display-3 fw-semibold py-4">{t('slider1.1')}</h1>
                <span><NavLink to={'/shop'} className='sliderbtn text-uppercase text-dark text-decoration-none  bg-light py-3 px-5 fw-semibold'>{t('slider1.3')}</NavLink></span>
            </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
        <div id="slider2" className="slider  p-5">
            <div className="textSlider text-light">
            <span className="fw-semibold fs-5">{t('slider1.0')}  <span>$120.00</span></span>
                <h1 className="text-uppercase display-3 fw-semibold py-4">{t('slider1.2')}</h1>
                <span><NavLink to={'/shop'} className='sliderbtn text-uppercase text-dark text-decoration-none  bg-light py-3 px-5 fw-semibold'>{t('slider1.4')}</NavLink></span>
            </div>
        </div>
    </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
