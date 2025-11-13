import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/abt11.png";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/abt22.png";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
               We’re Netpulse Digital — a full-service digital agency helping brands grow through creativity, data, and technology.
From London to Los Angeles, Toronto to Sydney — our work empowers businesses worldwide to design, develop, and market smarter.

              </p>
            </div>
          </div>
        </div>
      <div className="row">
  <div className="col-xl-9">
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
        <div className="ab-about-category-title-box p-relative">
          <h4 className="ab-about-category-title">
            What We Do <br />
            <span>END-TO-END DIGITAL SOLUTIONS</span>
          </h4>
          <Image
            className="ab-about-shape-1 d-none d-md-block"
            src={shape}
            alt="Netpulse Digital service illustration"
          />
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-8">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
            <div className="ab-about-category-list category-space-1 tp_fade_bottom">
              <ul>
                <li>Web Development</li>
                <li>SEO-Optimized Smart Websites</li>
                <li>AI Chatbots & Automation</li>
                <li>Digital Marketing </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
            <div className="ab-about-category-list category-space-2 tp_fade_bottom">
               <ul>
                <li>Brand Identity & Strategy</li>
                <li>UI/UX Design</li>
           
                <li>Social Media Creatives</li>
                <li>eBook & Digital Publishing Design</li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
