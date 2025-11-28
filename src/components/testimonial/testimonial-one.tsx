"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";

const testimonial_data = [
  {
    id: 1,
    desc: `"Netpulse rebuilt our e-commerce site using Next.js — conversions jumped by 250% in 3 months, and load time dropped to under 1 second. Their blend of design and technical SEO is unmatched."`,
    name: "Sarah Mitchell",
    designation: "Growth Director, UK Retail Brand",
  },
  {
    id: 2,
    desc: `"We needed a partner who could handle branding, web dev, and digital marketing — all under one roof. Netpulse delivered a full rebrand + AI chatbot that cut support tickets by 40%. Truly an end-to-end growth partner."`,
    name: "Michael Chen",
    designation: "Founder, SaaS Startup (Toronto)",
  },
];

const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};
const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-testimonial-item text-center">
                      <p>{item.desc}</p>
                      <span>
                        <em>{item.name}</em> - {item.designation}
                      </span>
                    </div>
                 
                  </SwiperSlide>
                ))}
              </Swiper>
                  <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/contact">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Start Your Journey with us</span>
                    <span className="text-2">Start Your Journey with us</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
