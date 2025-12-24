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
import TestimonialOne from "@/components/testimonial/testimonial-one";
import ServiceProcess from "@/components/service/service-process";
import ServiceCTA from "@/components/service/service-cta";

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

          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <style jsx>{`
                .tp-service-5-title {
                  font-family: var(--tp-ff-gelder);
                  font-size: 3rem;
                  font-weight: 700;
                  color: #0047ab;
                  line-height: 1.2;
                  text-align: center;
                }
                .ab-inner-subtitle {
                  font-family: var(--tp-ff-body);
                  font-size: 1rem;
                  font-weight: 600;
                  color: #0047ab;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 10px;
                }
              `}</style>
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Services
                      </span>
                      <h4 className="tp-service-5-title">
                        We strongly believe that only design, development &
                        marketing reinforced by strategy can provide real
                        results.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>

              <div
                className="hero-cta-wrapper"
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "60px",
                  flexWrap: "wrap",
                  justifyContent: "center", // center horizontally
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "20px 40px", // ✅ increased padding for bigger button
                    fontSize: "1.2rem", // ✅ larger text
                  }}
                  className="hero-cta-primary"
                >
                  Get Our Services
                </Link>
              </div>
            </div>
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}


            <div className="tp-brand-4-area pt-120">
              <div className="container">
                <div className="row gx-0">
            <ServiceProcess />
                </div>
              </div>
            </div>

            {/* brand area */}
            <div className="tp-brand-4-area">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div>
            <ServiceCTA />
            {/* Testimonils area */}
            <div className="my-5">
              <TestimonialOne />
            </div>
            {/* Testimonils area */}

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
    </Wrapper>
  );
};

export default ServiceMain;
