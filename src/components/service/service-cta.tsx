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

              <p className="tp_fade_bottom mb-5 cta-description">
                Let&apos;s build your next website, app, brand, or marketing system — and take your business to the next level.
              </p>

             <div
  className="hero-cta-wrapper"
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "60px",
    flexWrap: "wrap",
    justifyContent: "center", // ✅ center both buttons
  }}
>
  <Link
    href="/contact"
    style={{
      display: "inline-block",
      padding: "16px 32px",
      background: "#0047AB",
      color: "white",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      textDecoration: "none",
      fontFamily: "var(--tp-ff-body)",
      transition: "all 0.3s ease",
      border: "none",
    }}
    className="hero-cta-primary"
  >
    Get a Free Strategy Call
  </Link>
  
  <Link
    href="/contact"
    style={{
      display: "inline-block",
      padding: "16px 32px",
      background: "transparent",
      color: "#0047AB",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      textDecoration: "none",
      fontFamily: "var(--tp-ff-body)",
      transition: "all 0.3s ease",
      border: "2px solid #0047AB",
    }}
    className="hero-cta-secondary"
  >
    Contact with Our Team
  </Link>
</div>


              <p className="tp_fade_bottom cta-note">
                No pressure. No obligations. just expert insights for your growth.
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
          font-family: var(--tp-ff-gelder);
          font-size: 3.5rem;
          line-height: 1.2;
          font-weight: 700;
          color: #0047AB;
        }

        .cta-description {
          font-family: var(--tp-ff-body);
          font-size: 1.25rem;
          color: #4A5568;
          line-height: 1.8;
        }

        .cta-note {
          font-family: var(--tp-ff-body);
          font-size: 1rem;
          color: #4A5568;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .tp-service-cta-box h2 {
            font-size: 2.2rem;
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
