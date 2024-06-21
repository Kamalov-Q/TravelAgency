/* eslint-disable no-unused-vars */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../About/carouselReact.css'
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

//Visa Supports Section Imports

import visa_1 from '../../../src/assets/visa_support/visa_1.jpg'
import visa_2 from '../../../src/assets/visa_support/visa_2.jpg'
import visa_3 from '../../../src/assets/visa_support/visa_3.jpg'
import visa_4 from '../../../src/assets/visa_support/visa_4.jpg'
import visa_5 from '../../../src/assets/visa_support/visa_5.jpg'
import visa_6 from '../../../src/assets/visa_support/visa_6.jpg'
import visa_7 from '../../../src/assets/visa_support/visa_7.jpg'
import { t } from 'i18next';




export default function Resizable2() {
  return (
    <div className='slider_item'>
      <Swiper
        breakpoints={{
            300: {
            width: 300,
            slidesPerView: 1,
            },
            599: {
            width: 599,
            slidesPerView: 1,
            },
            600: {
                width: 600,
                slidesPerView: 2,
                },
            900: {
                width: 800,
                slidesPerView:2,
                },
            1000: {
                width:900,
                slidesPerView:3,
            },
            1200: {
                width:1150,
                slidesPerView : 3,
            }
        }}
        slidesPerView={3}
        autoplay={{
            delay: 2000
        }}
        spaceBetween={200}
        navigation={false}
        pagination={true}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="_swiper-container2"
      >
        <SwiperSlide className='_swiper2'>
            <img src={visa_1} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.China")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_2} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>Hong Kong</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_3} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>{t("core.Europe_Shen")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_4} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>{t("core.India")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_5} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>{t("core.Japan")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_6} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>{t("core.Saudia")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper2'>
            <img src={visa_7} alt="" />
            <div className="_card_2">
                <div className="row">
                    <div className="col-lg-12 text-start mx-2"><h4>{t("core.Oman")}</h4></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-12 text-start">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("visa-supports.checks")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6>{t("visa-supports.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-tags mx-2"></i>
                    <span>{t("visa-supports.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-clock mx-2"></i>
                    <span>{t("visa-supports.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-check mx-2"></i>
                    <span>{t("visa-supports.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts"><button className="my-2">{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
