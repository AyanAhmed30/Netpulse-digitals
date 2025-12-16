"use client";
import React from "react";
import Link from "next/link";

const ServiceCTA = () => {
  return (
    <div className="tp-service-cta-area pt-120 pb-120 position-relative">
      {/* Animated Gradient Background */}
      {/* <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div> */}

      <div className="container container-1630 position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-service-cta-box text-center">
              <h2 className="tp-section-title tp-char-animation mb-4">
                Ready to Build Something Powerful for Your Business?
              </h2>
              
              <p className="tp_fade_bottom mb-5" style={{ fontSize: "1.1rem", color: "rgba(0,0,0,0.8)", lineHeight: "1.8" }}>
                Let's build your next website, app, brand, or marketing system — and take your business to the next level.
              </p>

              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
                <div className="tp-service-left-btn tp-btn-bounce">
                  <Link className="tp-btn-border" href="/contact">
                    <span className="tp-btn-border-wrap">
                      <span className="text-1">Get a Free Strategy Call</span>
                      <span className="text-2">Get a Free Strategy Call</span>
                    </span>
                  </Link>
                </div>

                <div className="tp-service-left-btn tp-btn-bounce">
                  <Link className="tp-btn-border" href="/contact">
                    <span className="tp-btn-border-wrap">
                      <span className="text-1">Contact Our Team</span>
                      <span className="text-2">Contact Our Team</span>
                    </span>
                  </Link>
                </div>
              </div>

              <p className="tp_fade_bottom" style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.6)" }}>
                No pressure. No obligations. Just expert insights for your growth.
              </p>
            </div>
          </div>
        </div>
      </div>

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
          opacity: 0.12;
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

        .tp-service-cta-box h2 {
          font-size: 2.5rem;
          line-height: 1.3;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .tp-service-cta-box h2 {
            font-size: 1.8rem;
          }
          .d-flex {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCTA;
