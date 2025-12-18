"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
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

const PortfolioStandardMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
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

      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -2, background: "linear-gradient(to top, #dfe9f3 0%, white 100%)" }}></div>

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
            {/* portfolio hero */}
            <div className="tp-hero-area tp-hero-ptb p-relative">
              <div className="animated-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
              </div>

              <style jsx>{`
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
                  opacity: 0.12;
                  animation: float 20s ease-in-out infinite;
                }
                .orb-1 {
                  width: 500px;
                  height: 500px;
                  background: linear-gradient(135deg, #0047AB 0%, #685fe7 100%);
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
                  0%, 100% { transform: translate(0, 0) rotate(0deg); }
                  33% { transform: translate(30px, -30px) rotate(120deg); }
                  66% { transform: translate(-20px, 20px) rotate(240deg); }
                }

                .tm-hero-subtitle {
                  color: #0047AB;
                  font-size: 0.95rem;
                  font-weight: 600;
                  letter-spacing: 0.5px;
                  margin-bottom: 20px;
                  display: block;
                  font-family: var(--tp-ff-body);
                }
                .tm-hero-title-standard {
                  font-family: var(--tp-ff-gelder);
                  color: #0047AB;
                  font-size: 4rem;
                  line-height: 1.1;
                  font-weight: 700;
                  margin-bottom: 25px;
                }
                .tm-hero-text-p {
                  color: #4A5568;
                  font-size: 1.15rem;
                  line-height: 1.7;
                  max-width: 800px;
                  font-family: var(--tp-ff-body);
                }
                
                @media (max-width: 768px) {
                  .tm-hero-title-standard { font-size: 2.5rem; }
                  .tm-hero-text-p { font-size: 1rem; }
                }
              `}</style>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content p-relative z-index-1" style={{ paddingTop: "130px", paddingBottom: "60px" }}>
                      <span className="tm-hero-subtitle">Netpulse Digital Portfolio</span>
                      <h1 className="tm-hero-title-standard tp-char-animation">
                        Our Work. Your Results.
                      </h1>
                      <div className="tm-hero-text">
                        <p className="tm-hero-text-p tp_title_anim">
                          Explore a collection of websites, brands, apps, and digital campaigns we’ve crafted for clients across the USA, UK, Canada, and Australia. Every project is designed with purpose — blending creativity, strategy, and technology to help businesses grow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}
            {/* SECTION 2 — SHORT VALUE STATEMENT */}


            <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mb-30">
              <Link className="tp-btn-border" href="/portfolio-standard">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">Start Your Project</span>
                  <span className="text-2">Start Your Project</span>
                </span>
              </Link>
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
                    <h3 className="tp-section-title tp-char-animation mb-30" style={{ fontSize: '3.5rem', fontFamily: 'var(--tp-ff-gelder)', fontWeight: 'bold', color: '#0047AB', lineHeight: '1.1' }}>Designs & Digital Solutions That Create Real Impact</h3>
                    <p className="mb-30" style={{ fontSize: '1.1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)', lineHeight: '1.7' }}>
                      At Netpulse Digital, we don’t just design — we solve problems. <br />
                      Every website, brand identity, app, or marketing campaign we create is built with one goal: <br />
                      to help businesses convert better, grow faster, and scale smarter. <br />
                      We blend strategy + creativity + performance to deliver digital work that stands out and drives results.
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
                    <h3 className="tp-section-title tp-char-animation" style={{ fontSize: '3.5rem', fontFamily: 'var(--tp-ff-gelder)', fontWeight: 'bold', color: '#0047AB' }}>Why Clients Choose Us</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Item 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Conversion-Focused Execution</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>We design and develop with strategy, not guesswork.</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Fast, Clear Communication</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>Updates at every stage with full transparency.</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Modern, Clean Design</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>Every project is pixel-perfect and purpose-driven.</p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Global Experience</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>We proudly serve clients across USA, UK, Canada, and Australia.</p>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Multi-Disciplinary Expertise</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>Web • Apps • Branding • Marketing • SEO • AI — everything under one roof.</p>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center px-3">
                    <h4 className="mb-15" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--tp-ff-gelder)', color: '#0047AB' }}>Long-Term Partnership</h4>
                    <p style={{ fontSize: '1rem', color: '#4A5568', fontFamily: 'var(--tp-ff-body)' }}>Most clients work with us for years, not weeks.</p>
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
