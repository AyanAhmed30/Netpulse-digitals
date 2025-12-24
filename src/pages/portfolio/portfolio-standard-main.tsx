"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import ProjectFive from "@/components/project/project-five";
import BigText from "@/components/big-text";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { hoverBtn } from "@/utils/hover-btn";

import GradientBackground from "@/components/common/GradientBackground";
import Link from "next/link";
import Image from "next/image";

const PortfolioStandardMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      imageRevealAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <GradientBackground />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          background: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
        }}
      ></div>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero exactly like hero-banner-one */}
            <div
              className="tp-hero-area tp-hero-ptb p-relative main-slider"
              style={{ overflow: "hidden" }}
            >
              <div className="animated-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
              </div>

              <style jsx>{`
                @media (max-width: 576px) {
                  .tp-hero-ptb {
                    padding-top: 50px !important;
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

                .animated-background {
                  position: absolute;
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
                  background: linear-gradient(135deg, #0047ab 0%, #685fe7 100%);
                  top: -100px;
                  left: -100px;
                }
                .orb-2 {
                  width: 400px;
                  height: 400px;
                  background: linear-gradient(135deg, #a18cd1 0%, #00f2fe 100%);
                  top: 50%;
                  right: -100px;
                  animation-delay: -7s;
                }
                .orb-3 {
                  width: 600px;
                  height: 600px;
                  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                  bottom: -200px;
                  left: 20%;
                  animation-delay: -14s;
                }
                @keyframes float {
                  0%,
                  100% {
                    transform: translate(0, 0) rotate(0deg);
                  }
                  33% {
                    transform: translate(30px, -30px) rotate(120deg);
                  }
                  66% {
                    transform: translate(-20px, 20px) rotate(240deg);
                  }
                }

                :global(.hero-cta-primary) {
                  display: inline-block;
                  padding: 16px 32px;
                  background: #0047ab;
                  color: white;
                  border-radius: 8px;
                  font-size: 1rem;
                  font-weight: 600;
                  text-decoration: none;
                  font-family: var(--tp-ff-body);
                  transition: all 0.3s ease;
                  border: 2px solid #0047ab;
                }

                :global(.hero-cta-primary:hover) {
                  background: white !important;
                  color: #0047ab !important;
                  transform: translateY(-2px);
                  box-shadow: 0 10px 25px rgba(0, 71, 171, 0.3);
                }

                :global(.hero-cta-secondary) {
                  display: inline-block;
                  padding: 16px 32px;
                  background: transparent;
                  color: #0047ab;
                  border-radius: 8px;
                  font-size: 1rem;
                  font-weight: 600;
                  text-decoration: none;
                  font-family: var(--tp-ff-body);
                  transition: all 0.3s ease;
                  border: 2px solid #0047ab;
                }

                :global(.hero-cta-secondary:hover) {
                  background: #0047ab !important;
                  color: white !important;
                  transform: translateY(-2px);
                  box-shadow: 0 10px 25px rgba(0, 71, 171, 0.2);
                }

                @media (max-width: 991px) {
                  .hero-image-wrapper {
                    display: none !important;
                  }
                }
                @media (max-width: 768px) {
                  .hero-cta-wrapper {
                    flex-direction: column !important;
                  }
                  .hero-cta-wrapper a {
                    width: 100%;
                    text-align: center;
                  }
                }
              `}</style>

              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mb-20">
                    <div
                      className="hero-content-wrapper p-relative z-index-1"
                      style={{ paddingTop: "10px", paddingBottom: "100px" }}
                    >
                      {/* Tagline */}
                      <div
                        className="hero-tagline"
                        style={{
                          color: "#0047AB",
                          fontSize: "0.95rem",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                          marginBottom: "20px",
                          fontFamily: "var(--tp-ff-body)",
                        }}
                      >
                        Netpulse Digital Portfolio
                      </div>

                      {/* Main Heading */}
                      <h1
                        className="hero-main-title"
                        style={{
                          fontFamily: "var(--tp-ff-gelder)",
                          color: "#0047AB",
                          fontSize: "3.5rem",
                          lineHeight: "1.15",
                          letterSpacing: "-0.02em",
                          fontWeight: "700",
                          marginBottom: "25px",
                          maxWidth: "700px",
                        }}
                      >
                        <span
                          className="word"
                          style={{
                            display: "inline-block",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Our
                        </span>{" "}
                        <span
                          className="word"
                          style={{
                            display: "inline-block",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Work.
                        </span>{" "}
                        <span
                          className="word"
                          style={{
                            display: "inline-block",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Your
                        </span>{" "}
                        <span
                          className="word"
                          style={{
                            display: "inline-block",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Results.
                        </span>
                      </h1>

                      {/* Description */}
                      <p
                        className="hero-description"
                        style={{
                          color: "#4A5568",
                          fontSize: "1.1rem",
                          lineHeight: "1.7",
                          marginBottom: "35px",
                          maxWidth: "600px",
                          fontFamily: "var(--tp-ff-body)",
                        }}
                      >
                        Explore a collection of websites, brands, apps, and
                        digital campaigns we’ve crafted for clients across the
                        USA, UK, Canada, and Australia. Every project is
                        designed with purpose — blending creativity, strategy,
                        and technology to help businesses grow.
                      </p>

                      {/* CTA Buttons */}
                      <div
                        className="hero-cta-wrapper"
                        style={{
                          display: "flex",
                          gap: "15px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Link
                          href="/contact"
                          className="hero-cta-primary"
                        >
                          Start Your Project
                        </Link>
                        <Link
                          href="/contact"
                          className="hero-cta-secondary"
                        >
                          Contact Our Team
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Hero Image Column */}
                  <div className="col-lg-4">
                    <div
                      className="hero-image-wrapper"
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          maxWidth: "500px",
                        }}
                      >
                        <Image
                          src="/assets/img/home-01/hero/hero-1-1.webp"
                          alt="Our Work"
                          width={700}
                          height={800}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            filter:
                              "drop-shadow(0 20px 40px rgba(0, 71, 171, 0.15))",
                          }}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero exactly like hero-banner-one */}

            {/* SECTION 2 — CTA (Previously centered) */}
            <div className="container" style={{ display: "none" }}>
              <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mb-30">
                <Link className="tp-btn-border" href="/portfolio-standard">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Start Your Project</span>
                    <span className="text-2">Start Your Project</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* portfolio area */}
            <div className="container mt-50 ">
              <ProjectFive style_2={true} />
            </div>

            {/* portfolio area */}
            <div className="container mb-100 mt-100">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="text-center">
                    <h3
                      className="tp-section-title tp-char-animation mb-30"
                      style={{
                        fontSize: "3.5rem",
                        fontFamily: "var(--tp-ff-gelder)",
                        fontWeight: "bold",
                        color: "#0047AB",
                        lineHeight: "1.1",
                      }}
                    >
                      Designs & Digital Solutions That Create Real Impact
                    </h3>
                    <p
                      className="mb-30"
                      style={{
                        fontSize: "1.1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                        lineHeight: "1.7",
                      }}
                    >
                      At Netpulse Digital, we don’t just design — we solve
                      problems. <br />
                      Every website, brand identity, app, or marketing campaign
                      we create is built with one goal: <br />
                      to help businesses convert better, grow faster, and scale
                      smarter. <br />
                      We blend strategy + creativity + performance to deliver
                      digital work that stands out and drives results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 6 — WHY CLIENTS LOVE WORKING WITH US */}
            <div className="container mb-100">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="text-center mb-60">
                    <h3
                      className="tp-section-title tp-char-animation"
                      style={{
                        fontSize: "3.5rem",
                        fontFamily: "var(--tp-ff-gelder)",
                        fontWeight: "bold",
                        color: "#0047AB",
                      }}
                    >
                      Why Clients Choose Us
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Item 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3 hover-box"
                    style={{
                      border: "3px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Conversion-Focused Execution
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      We design and develop with strategy, not guesswork.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3"
                    style={{
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Fast, Clear Communication
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      Updates at every stage with full transparency.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3"
                    style={{
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Modern, Clean Design
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      Every project is pixel-perfect and purpose-driven.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3"
                    style={{
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Global Experience
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      We proudly serve clients across USA, UK, Canada, and
                      Australia.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3"
                    style={{
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Multi-Disciplinary Expertise
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      Web • Apps • Branding • Marketing • SEO • AI — everything
                      under one roof.
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div
                    className="text-center px-3"
                    style={{
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      padding: "30px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "3px solid #0047AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = "3px solid transparent")
                    }
                  >
                    <h4
                      className="mb-15"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB",
                      }}
                    >
                      Long-Term Partnership
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4A5568",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      Most clients work with us for years, not weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioStandardMain;
