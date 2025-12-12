"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/d-m.png";
import s_2 from "@/assets/img/home-01/service/w-d.png";
import s_3 from "@/assets/img/home-01/service/c-d.png";
import s_4 from "@/assets/img/home-01/service/m-l.png";

// service data
const service_data = [
  {
    id: 1,
    title: "DIGITAL MARKETING",
    desc: "Strategic digital campaigns crafted to boost visibility, drive engagement, and spark real growth",
    icon: s_1,
    link: "/services/digital-marketing",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    desc: "Powerful websites crafted with purpose, built to perform seamlessly across every device.",
    icon: s_2,
    link: "/services/web-development",
  },
  {
    id: 3,
    title: "CREATIVE DESIGN",
    desc: "Creative energy flows through every detail we craft with purpose and precision.",
    icon: s_3,
    link: "/services/creative-design",
  },
  {
    id: 4,
    title: "AI AUTOMATIONS AND CHATBOTS",
    desc: "Intelligent AI systems crafted to automate conversations, enhance support, and improve engagement.",
    icon: s_4,
    link: "/services/ai-automation",
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger position-relative">
      {/* ✅ Animated Gradient Background (copied from HeroBannerOne) */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container container-1630 position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <h4 className="tp-section-title tp-char-animation">
                Netpulse Digitals<br />
                <span>Services</span>
              </h4>
            </div>

            <div className="tp-service-left-btn tp-btn-bounce mt-4">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "50px", width: "50px" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href={s.link}>{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Inline styles for animated background (same as HeroBannerOne) */}
      <style jsx>{`
        /* Animated Background */
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
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
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
        }
      `}</style>
    </div>
  );
};

export default ServiceOne;