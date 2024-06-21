/* eslint-disable no-unused-vars */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carouselReact.css';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import offer_1 from '../../../src/assets/offers/offers-01.jpg';
import offer_2 from '../../../src/assets/offers/deals-02.jpg';
import offer_3 from '../../../src/assets/offers/offers-03.jpg';
import offer_4 from '../../../src/assets/offers/offers-04.jpg';
import offer_5 from '../../../src/assets/offers/offers-05.jpg';
import offer_6 from '../../../src/assets/offers/offers-06.jpg';
import offer_7 from '../../../src/assets/offers/offers-07.jpg';
import offer_8 from '../../../src/assets/offers/offers-08.jpg';
import { t } from 'i18next';

export default function App() {
  return (
    <div className='slider_item'>
      <Swiper
      breakpoints={{
        // when window width is >= 300px
        300: {
        width: 300,
        slidesPerView: 1,
        },
        // when window width is >= 768px
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
        },
        1600: {
            width:1500,
            slidesPerView: 4,
        }
        
    }}
        slidesPerView={3}
        spaceBetween={250}
        navigation={false}
        pagination={false}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay, Navigation]}
        className="_swiper-container"
      >
        <SwiperSlide className='_swiper'>
            <img src={offer_1} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Dubai")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$800</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>300 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_2} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Antalya")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$999</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>500 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_3} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Sharm")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$800</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>200 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_4} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.USA")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$800</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>400 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_5} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.England")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$1800</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>234 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_6} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Canada")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$900</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>340 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_7} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Europe")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$1200</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>430 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='_swiper'>
            <img src={offer_8} alt="" />
            <div className="_card_">
                <div className="row">
                    <div className="col-lg-6"><h4>{t("core.Turkey")}</h4></div>
                    <div className="col-lg-6"><span className='color'>$925</span></div>
                </div>
                <div className="row my-0">
                <div className="col-lg-6">
                        <span>
                    <i className="fa-solid fa-users mx-2"></i>
                    </span>
                    <span>315 {t("offers-section.checks")}</span>
                    </div>
                    <div className="col-lg-6">
                        <span>/{t("offers-section.person")}</span>
                    </div>
                    <hr  className="my-3"/>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12 text-start">
                        <h6 className="fw-bold">{t("offers-section.deals")}</h6>
                    </div>
                    <div className="col-lg-12">
                    <i className="fa-solid fa-car mx-2"></i>
                    <span>{t("offers-section.deals_1")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-plane mx-2"></i>
                    <span>{t("offers-section.deals_2")}</span>
                    </div>
                </div>
                <div className="row my-2 text-start">
                    <div className="col-lg-12">
                    <i className="fa-solid fa-building mx-2"></i>
                    <span>{t("offers-section.deals_3")}</span>
                    </div>
                </div>
                <a href="#contacts" className="my-2"><button>{t("core.make_reser")}</button></a>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
)}
