import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ backgroundImage: "url(/assets/img/inner-about/hero/heroo.png)" }}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>

      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>

      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Digital <br /> creative agency
              </span>

              <h1 className="ab-inner-hero-title tp-char-animation">
                Global Creative Partner
              </h1>

              <p>Digital experiences with maximum emotional impact</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
                Netpulse Digital develops, designs & delivers websites & creative campaigns
                that drive results
              </p>
            </div>

            {/* BUTTON FIXED — no eslint apostrophe error */}
            <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mb-4">
              <Link className="tp-btn-border" href="/contact">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">
                    {"Let's Start Your Project"}
                  </span>
                  <span className="text-2">
                    {"Let's Start Your Project"}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
