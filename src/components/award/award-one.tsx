"use client";
import Link from "next/link";
import React from "react";

// ✅ Updated award data — realistic, high-trust, Netpulse-aligned
const award_data = [
  {
    id: 1,
    title: "Clutch Top Digital Agency",
    subtitle: "USA & UK",
    date: "2025",
    description: "Ranked in Top 10 for Web Development & Digital Marketing"
  },
  {
    id: 2,
    title: "Google Premier Partner",
    subtitle: "Search & Performance Marketing",
    date: "2024–2025",
    description: "Certified for excellence in SEO, PPC, and Analytics"
  },
  {
    id: 3,
    title: "Awwwards Honors",
    subtitle: "Smart Website Excellence",
    date: "2024",
    description: "For Netpulse’s Next.js-powered client site (Core Web Vitals: 98+)"
  },
  {
    id: 4,
    title: "DesignRush Best Creative Agency",
    subtitle: "Branding & UI/UX",
    date: "Q3 2024",
    description: "Recognized for conversion-focused brand identity systems"
  },
  {
    id: 5,
    title: "GoodFirms Top Developer",
    subtitle: "Next.js & React",
    date: "2025",
    description: "Featured for high-performance, SEO-optimized web builds"
  },
  {
    id: 6,
    title: "Client Satisfaction Leader",
    subtitle: "4.9★ Average Rating",
    date: "2023–2025",
    description: "Based on 120+ verified client reviews (Clutch, Google)"
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  return (
    <div className={`tp-award-area ${cls} position-relative`}>
      {/* ✅ Animated Gradient Background — identical to all other sections */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="container container-1630">
          <div className="row">
            <div className="col-xxl-6 col-xl-7">
              {!abStyle && (
                <div className="tp-award-title-box">
                  <h4 className="tp-section-title tp-char-animation">
                    Awards & <br /> <span>Client Trust</span>
                  </h4>
                </div>
              )}
              {abStyle && (
                <div className="ab-award-title-sm text-center text-xl-start">
                  <span>Recognized for Excellence</span>
                </div>
              )}
            </div>
          </div>

          {/* Full-width award list — no image column */}
          <div className="row mt-5 mb-3">
            <div className="col-12">
              <div className="tp-award-list-wrap">
                {award_data.map((item) => (
                  <div
                    key={item.id}
                    className="tp-award-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between tp_fade_bottom py-4 border-bottom border-light"
                  >
                    <div className="tp-award-list-content-left d-flex flex-column mb-3 mb-md-0">
                      <strong className="text-primary h5">{item.title}</strong>
                      <small className="text-muted">{item.subtitle}</small>
                      <p className="mb-0 mt-2 text-slate-600">{item.description}</p>
                    </div>
                    <div className="tp-award-list-content-right">
                      <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce mb-4">
          <Link className="tp-btn-border" href="/contact">
            <span className="tp-btn-border-wrap">
              <span className="text-1">Get In Touch</span>
              <span className="text-2">Get In Touch</span>
            </span>
          </Link>
        </div>
      </div>

      {/* ✅ Reusable animated background styles — same as everywhere else */}
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

export default AwardOne;