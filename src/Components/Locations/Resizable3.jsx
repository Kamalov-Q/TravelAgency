/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './Resizable3.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

/* Best Locations Section Images */
import locat_1 from '../../../src/assets/Last/1.jpg'
import locat_2 from '../../../src/assets/Last/2.jpg'
import locat_3 from '../../../src/assets/Last/3.jpg'
import locat_4 from '../../../src/assets/Last/4.jpg'
import locat_6 from '../../../src/assets/Last/6.jpg'


export default function Resizable3() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        loop={true}
        modules={[EffectCoverflow, Autoplay ,Pagination]}
        className="swiper3"
      >
        <SwiperSlide className='swiper-slide3'>
          <img src={locat_1} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src={locat_2} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src={locat_3} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src={locat_4} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src={locat_6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
