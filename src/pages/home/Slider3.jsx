// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper className="slider_3H container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}

      loop={true}
      autoplay={{delay:2000}}
      spaceBetween={50}
      breakpoints={{
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3

        },
        992: {
          slidesPerView: 4

        },

      }}
      

    >
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-1.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-2.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-3.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-4.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-5.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-6.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      {/* -- */}
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-1.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-2.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-3.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-4.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-5.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0641/3431/6288/files/brand-logo-6.png?v=1650950844"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
