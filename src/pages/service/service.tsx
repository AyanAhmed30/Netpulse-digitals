"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
import Link from "next/link";

// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* ✅ Animated gradient background for entire page */}
          <div className="animated-background-page">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Services
                      </span>
                      <h4 className="tp-service-5-title">
                        We strongly believe that only design, development & marketing <br />
                        reinforced by strategy can provide real results.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/contact">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Get Our Services</span>
                    <span className="text-2">Get Our Services</span>
                  </span>
                </Link>
              </div>
            </div>
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}

            {/* brand area */}
            <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div>
            {/* brand area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>

      {/* ✅ Gradient background styles */}
      <style jsx>{`
        .animated-background-page {
          position: fixed;
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
          filter: blur(100px);
          opacity: 0.15;
          animation: float 25s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
          top: 50%;
          right: -200px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 700px;
          height: 700px;
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
        }
      `}</style>
    </Wrapper>
  );
};

export default ServiceMain;
