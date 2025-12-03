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
    "1400": { slidesPerView: 1 },
    "1200": { slidesPerView: 1 },
    "992": { slidesPerView: 1 },
    "768": { slidesPerView: 1 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};

const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pb-120 position-relative">
      {/* ✅ Animated Gradient Background */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="position-relative" style={{ zIndex: 1 }}>
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
                <h1 className="text-center fw-semibold" >What Our Client Says</h1>
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
                          <em>{item.name}</em> – {item.designation}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mt-4">
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

      {/* ✅ Reusable animated background styles — identical across all sections */}
      <style jsx>{`
        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
          top: 50%;
          right: -200px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: -300px;
          left: 30%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, -50px) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialOne;
