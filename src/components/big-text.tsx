import Link from "next/link";
import React from "react";

// type
type IProps = {
  cls?: string;
};

export default function BigText({ cls = "" }: IProps) {
  return (
    <div className={`sv-big-text-area pb-80 ${cls} position-relative`}>
      {/* ✅ Animated gradient background */}
      <div className="animated-background-bigtext">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container container-1530 position-relative" style={{ zIndex: 1 }}>
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>READY TO ELEVATE YOUR BRAND?</span>
          <span>LET’S CREATE TOGETHER</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp-char-animation">
            <Link
              href="/contact"
              style={{ color: "#0047AB" }}
            >
              Get in Touch
            </Link>
          </h4>
        </div>
      </div>

      {/* ✅ Gradient background styles */}
      <style jsx>{`
        .animated-background-bigtext {
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
          filter: blur(100px);
          opacity: 0.15;
          animation: float 25s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
          top: 50%;
          right: -200px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 700px;
          height: 700px;
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
        .sv-big-text-box .sv-big-text a {
          color: #0047AB !important;
          font-family: var(--tp-ff-gelder) !important;
          font-weight: 700 !important;
        }
        .sv-small-text-box span {
          color: #0047AB !important;
          font-family: var(--tp-ff-body);
        }
      `}</style>
    </div>
  );
}
