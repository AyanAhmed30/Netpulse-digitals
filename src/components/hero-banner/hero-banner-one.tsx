"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBannerOne = () => {
  const heroTitleRef = useRef(null);
  const heroContentRef = useRef(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        fadeAnimation();
      }, 100);

      // Title ko left drag karna on scroll
      const heroTitle = heroTitleRef.current;
      if (heroTitle) {
        gsap.fromTo(heroTitle, 
          {
            x: 0 // Starting position - center mein
          },
          {
            x: -200, // Left side ke liye negative value
            scrollTrigger: {
              trigger: heroTitle,
              start: "top top", // Jab section top pe aaye tab animation start
              end: "bottom top",
              scrub: 1.5,
              markers: false,
            }
          }
        );
      }

      // Paragraph aur button ko right drag karna on scroll
      const heroContent = heroContentRef.current;
      if (heroContent) {
        gsap.fromTo(heroContent,
          {
            x: 0 // Starting position - center mein
          },
          {
            x: 200, // Right side ke liye positive value
            scrollTrigger: {
              trigger: heroContent,
              start: "top center", // Jab content center mein aaye
              end: "bottom top",
              scrub: 1.5,
              markers: false,
            }
          }
        );
      }
    }
  }, []);

  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1">
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={790}
                  height={700}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative" ref={heroTitleRef}>
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    Creative
                    <span className="tp-hero-subtitle d-none d-lg-block ">
                      Hello <br /> People! We're
                    </span>
<<<<<<< HEAD
=======
                 
>>>>>>> 1a0c32ab84c32b3ec682663a6bd0aee4dc260030
                  </span>
                  <br />
                  Digital
                  <span className="tp-hero-title-img">
                    <Image
                      className="tp-zoom-img"
                      src="/assets/img/home-01/hero/hero-1-2.png"
                      alt="hero-img"
                      width={270}
                      height={160}
                      style={{ height: "auto" }}
                    />
                  </span>
                  Agency
                  <span className="d-block" style={{
                    fontSize: '0.25em',
                    fontWeight: '400',
                    marginTop: '20px',
                    letterSpacing: '0.5px'
                  }}>
                    We design, develop and market digital experiences that convert
                  </span>
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom" ref={heroContentRef}>
              <p>
                <span></span>
                From concept to code - Netpulse Digital helps businesses across the USA, UK, Canada, and Australia scale through powerful design, development, and marketing.
              </p>
              <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/contact-2">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Talk to Our Experts</span>
                    <span className="text-2">Talk to Our Experts</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;