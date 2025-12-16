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
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <h4 className="tp-hero-title tm-hero-title tp-char-animation">
                        Our Work. Your Results.
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                        Explore a collection of websites, brands, apps, and digital campaigns we’ve crafted for clients across the USA, UK, Canada, and Australia. Every project is designed with purpose — blending creativity, strategy, and technology to help businesses grow.
                      </p>
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
            <div className="container mb-100 ">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="text-center">
                    <h3 className="tp-section-title tp-char-animation mb-20" style={{ fontSize: '65px', fontFamily: 'var(--tp-ff-gallery)', fontWeight: 'bold' }}>Designs & Digital Solutions That Create Real Impact</h3>
                    <p className="mb-30" style={{ fontSize: '18px' }}>
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
                    <h3 className="tp-section-title tp-char-animation" style={{ fontSize: '72px', fontFamily: 'var(--tp-ff-gallery)', fontWeight: 'bold' }}>Why Clients Choose Us</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Item 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Conversion-Focused Execution</h4>
                    <p style={{ fontSize: '16px' }}>We design and develop with strategy, not guesswork.</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Fast, Clear Communication</h4>
                    <p style={{ fontSize: '16px' }}>Updates at every stage with full transparency.</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Modern, Clean, High-Impact Design Standards</h4>
                    <p style={{ fontSize: '16px' }}>Every project is pixel-perfect and purpose-driven.</p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Global Experience</h4>
                    <p style={{ fontSize: '16px' }}>We proudly serve clients across USA, UK, Canada, and Australia.</p>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Multi-Disciplinary Expertise</h4>
                    <p style={{ fontSize: '16px' }}>Web • Apps • Branding • Marketing • SEO • AI — everything under one roof.</p>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
                  <div className="text-center">
                    <h4 className="mb-15" style={{ fontSize: '24px', fontWeight: 'bold' }}>Long-Term Support & Growth Partnership</h4>
                    <p style={{ fontSize: '16px' }}>Most clients work with us for years, not weeks.</p>
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
