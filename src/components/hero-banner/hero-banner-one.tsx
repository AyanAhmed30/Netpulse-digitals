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
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

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
                  We Build Digital Experiences That Convert and Scale
                  <span
                    className="d-block"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "400",
                      marginTop: "25px",
                      letterSpacing: "0.5px",
                      lineHeight: "1.6",
                      maxWidth: "800px",
                      margin: "25px auto 0",
                      color: "black",
                    }}
                  >
                   
                   
                  </span>
                </h1>
              </div>
            </div>

              <div className="tp-hero-content tp_fade_bottom" ref={heroContentRef}>
              <p>
From Web & App Development to Branding, Digital Marketing, and AI-powered automations — Netpulse Digital helps businesses grow across the USA, UK, Canada, and Australia with solutions built for results, not just aesthetics.              </p>

              <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap" style={{ maxWidth: "900px", margin: "0 auto" }}>
                <div className="tp-service-left-btn tp-btn-bounce" style={{ minWidth: "200px" }}>
                  <Link className="tp-btn-border" href="/contact">
                    <span className="tp-btn-border-wrap">
                      <span className="text-1">Get a Free Strategy Call</span>
                      <span className="text-2">Get a Free Strategy Call</span>
                    </span>
                  </Link>
                </div>

                <div className="tp-service-left-btn tp-btn-bounce" style={{ minWidth: "170px" }}>
                  <Link className="tp-btn-border" href="/portfolio-standard">
                    <span className="tp-btn-border-wrap">
                      <span className="text-1">View Our Work</span>
                      <span className="text-2">View Our Work</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>

      <style jsx>
        {`/* Animated Background */
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
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
          background: linear-gradient(135deg, #667eea 0%, #685fe7ff 100%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #a18cd1 0%, #00f2fe 100%); /* CHANGED: Pink/Red to Light Purple/Blue */
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
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, -50px) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) rotate(240deg);
          }
        }`}
      </style>
    </div>
  );
};

export default HeroBannerOne;