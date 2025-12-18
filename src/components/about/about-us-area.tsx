import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/building.png";
import ab_2 from "@/assets/img/inner-about/about/off2.jpg";
import ab_3 from "@/assets/img/inner-about/about/off.png";
import Link from "next/link";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5 position-relative">
      {/* ✅ Animated Gradient Background — identical to other sections */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="position-relative" style={{ zIndex: 1 }}>
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
                <span style={{backgroundColor: "#0047AB"}}>
                  <Hand />
                  Hi!
                </span>
                <p
                  style={{
                    fontFamily: "var(--tp-ff-gelder)",
                    color: "#0047AB",
                  }}
                  className="tp-dropcap tp_fade_bottom"
                >
                  We partner with companies around the world to create standout
                  websites, powerful brands, and marketing systems that deliver
                  measurable results. <br />
                  Today, we proudly serve clients in the USA, UK, Canada, and
                  Australia with precision, quality, and a genuine passion for
                  helping businesses succeed.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{
              fontFamily: "var(--tp-ff-gelder-p)",
            }}
          >
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                  <div className="ab-about-category-title-box p-relative">
                    <h4
                      className="ab-about-category-title"
                      style={{
                        fontFamily: "var(--tp-ff-gelder-p)",
                      }}
                    >
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
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                        <ul>
                          <li>Web Development</li>
                          <li>AI Chatbots & Automation</li>
                          <li>Digital Marketing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                        <ul>
                          <li>Mobile Application Development</li>
                          <li>Creative Design</li>
                          <li>eBook & Digital Publishing Design</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mt-3">
                    <Link className="tp-btn-border" href="/contact">
                      <span className="tp-btn-border-wrap">
                        <span className="text-1">Talk to Our Experts</span>
                        <span className="text-2">Talk to Our Experts</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Reusable animated gradient styles — updated orb-2 */}
      <style jsx>{`
        .animated-background {
          position: absolute;
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
          background: linear-gradient(
            135deg,
            #a18cd1 0%,
            #4facfe 100%
          ); /* CHANGED: Light Purple to Light Blue (no pink) */
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
          0%,
          100% {
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
    </div>
  );
}
