"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceHero = () => {
  const heroTitleRef = useRef(null);
  const heroContentRef = useRef(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => fadeAnimation(), 100);

      // Title dragging to the left
      const heroTitle = heroTitleRef.current;
      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { x: 0 },
          {
            x: -200,
            scrollTrigger: {
              trigger: heroTitle,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
              markers: false,
            },
          }
        );
      }

      // Content dragging to the right
      const heroContent = heroContentRef.current;
      if (heroContent) {
        gsap.fromTo(
          heroContent,
          { x: 0 },
          {
            x: 200,
            scrollTrigger: {
              trigger: heroContent,
              start: "top center",
              end: "bottom top",
              scrub: 1.5,
              markers: false,
            },
          }
        );
      }
    }
  }, []);

  return (
    <div className="tp-hero-area tp-hero-ptb main-slider" style={{ position: 'relative' }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "linear-gradient(to top, #dfe9f3 0%, white 100%)" }}></div>


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

              <div
                className="tp-hero-title-box text-center p-relative"
                ref={heroTitleRef}
              >
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    Digital Services

                  </span>
                  <br />
                  <div>

                    Built to Grow

                    Your Business
                  </div>
                  <span
                    className="d-block"
                    style={{
                      fontSize: "0.25em",
                      fontWeight: "400",
                      marginTop: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Netpulse Digital provides smart digital solutions—design, development, marketing, AI, and SEO—for consistent business growth worldwide.
                  </span>
                </h1>
              </div>
            </div>

            <div className="tp-hero-content tp_fade_bottom" ref={heroContentRef}>


              <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/portfolio-standard">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">View Our Portfolio</span>
                    <span className="text-2">View Our Portfolio</span>
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

export default ServiceHero;