import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderData from './dataSlider';
import { NavLink } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';

import { Navigation,  A11y } from 'swiper';



const Slider2 = () => {
  return (
    <div className='slider2 container  mb-5 '>


        <Swiper
        modules={[Navigation, A11y]}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },

        }}
        navigation
        >
            
        {
            sliderData.map((item,index)=>{
               return  <SwiperSlide key={index}>
                  {/* <img src={item.img} alt=""  className='w-100'/> */}

                    <div style={{background:`url(${item.img}) center/cover`}}
                      
                      className="electronic d-flex justify-content-center align-items-center"
                    >
                      <div className="position_r">
                        <button id="phone-btn-1" className="btn fw-semibold">
                          {item.name}
                        </button>
                        <NavLink to={`/shop/${item.category}`} id="phone-btn-2" className="btn  fw-semibold">                Shop now    </NavLink>

                      </div>
                    </div>

                
                </SwiperSlide>
             
            })
        }
        


        </Swiper>

    </div>
  )
}

export default Slider2