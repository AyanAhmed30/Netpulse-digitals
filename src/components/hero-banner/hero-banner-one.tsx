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
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => fadeAnimation(), 100);

      // Modern word-by-word reveal animation for title
      const heroTitle = heroTitleRef.current;
      if (heroTitle) {
        const words = heroTitle.querySelectorAll('.word');

        gsap.fromTo(
          words,
          {
            opacity: 0,
            y: 50,
            rotateX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
            delay: 0.3
          }
        );

        // Parallax scroll effect
        gsap.to(
          heroTitle,
          {
            y: -100,
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

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 hero-text-column">
            <div className="hero-content-wrapper" style={{ paddingTop: "130px", paddingBottom: "80px" }}>
              {/* Tagline */}
              <div className="hero-tagline" style={{
                color: "#0047AB",
                fontSize: "0.95rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
                marginBottom: "20px",
                fontFamily: "var(--tp-ff-body)"
              }}>
                Digital Transformation Agency
              </div>

              {/* Main Heading */}
              <h1 className="hero-main-title" ref={heroTitleRef} style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB",
                fontSize: "3.5rem",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: "700",
                marginBottom: "25px",
                maxWidth: "700px"
              }}>
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>We</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Build</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Digital</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Experiences</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>That</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Convert</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>and</span>{' '}
                <span className="word" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Scale</span>
              </h1>

              {/* Description */}
              <p className="hero-description" style={{
                color: "#4A5568",
                fontSize: "1.1rem",
                lineHeight: "1.7",
                marginBottom: "35px",
                maxWidth: "600px",
                fontFamily: "var(--tp-ff-body)"
              }}>
                From Web & App Development to Branding, Digital Marketing, and AI-powered automations — Netpulse Digital helps businesses grow across the USA, UK, Canada, and Australia with solutions built for results, not just aesthetics.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-wrapper" style={{ display: "flex", gap: "15px", marginBottom: "60px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "16px 32px",
                    background: "#0047AB",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    fontFamily: "var(--tp-ff-body)",
                    transition: "all 0.3s ease",
                    border: "none"
                  }}
                  className="hero-cta-primary"
                >
                  Get a Free Strategy Call
                </Link>
                <Link
                  href="/portfolio-standard"
                  style={{
                    display: "inline-block",
                    padding: "16px 32px",
                    background: "transparent",
                    color: "#0047AB",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    fontFamily: "var(--tp-ff-body)",
                    transition: "all 0.3s ease",
                    border: "2px solid #0047AB"
                  }}
                  className="hero-cta-secondary"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="col-12 col-lg-4 hero-image-column">
            <div className="hero-image-wrapper" style={{
              paddingTop: "130px",
              paddingBottom: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px"
              }}>
                <Image
                  src="/assets/img/home-01/hero/hero-1-1.webp"
                  alt="Digital Solutions"
                  width={700}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 20px 40px rgba(0, 71, 171, 0.15))"
                  }}
                  priority
                />
                {/* Decorative elements */}
                <div style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  background: "linear-gradient(135deg, #0047AB 0%, #667eea 100%)",
                  borderRadius: "50%",
                  opacity: "0.1",
                  zIndex: "-1"
                }}></div>
                <div style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "150px",
                  height: "150px",
                  background: "linear-gradient(135deg, #667eea 0%, #0047AB 100%)",
                  borderRadius: "50%",
                  opacity: "0.08",
                  zIndex: "-1"
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 991px) {
          .hero-image-wrapper {
            display: none !important;
          }
        }
      `}</style>

      <style jsx>{`
        .tp-hero-ptb {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .hero-cta-primary:hover {
          background: white !important;
          color: #0047AB !important;
          border: 2px solid #0047AB !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 71, 171, 0.3);
        }
        
        .hero-cta-secondary:hover {
          background: #0047AB !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 71, 171, 0.2);
        }

        @media (max-width: 991px) {
          .tp-hero-ptb {
            padding-top: 110px !important;
          }
          .hero-content-wrapper {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .hero-tagline {
            margin-top: 22px;
            margin-bottom: 20px;
          }
          .hero-cta-wrapper {
            flex-direction: column !important;
            align-items: stretch;
          }
          .hero-cta-wrapper a {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .hero-content-wrapper {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          
          .hero-main-title {
            font-size: 2.3rem !important;
            line-height: 1.3;
          }
          
          .hero-description {
            font-size: 1rem !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 576px) {
          .tp-hero-ptb {
            padding-top: 130px !important;
          }
          .hero-tagline {
            font-size: 0.85rem;
            margin-top: 12px;
          }
          .hero-main-title {
            font-size: 2rem !important;
          }
          .hero-description {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          
          .hero-main-title {
            font-size: 1.8rem !important;
          }
          
          .hero-description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

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