"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsHero = () => {
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
                  <span className="p-relative">
                    Global
                    
                  </span>
                  <br />
                  <div>

                    Creative

                    Partner
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
Digital experiences with maximum emotional impact                  </span>
                </h1>
              </div>
            </div>

            <div className="tp-hero-content tp_fade_bottom" ref={heroContentRef}>
              <p>
             Netpulse Digital develops, designs & delivers websites & creative campaigns that drive results
              </p>

              <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/contact">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Let&apos;s Start Your Project</span>
                    <span className="text-2">Let&apos;s Start Your Project</span>
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

export default AboutUsHero;