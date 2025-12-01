import React from "react";
import Image from "next/image";
import Link from "next/link";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb position-relative">
      {/* ✅ Animated Gradient Background — same as all other sections */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="container container-1530">
          <div className="row">
            <div className="col-xl-10">
              <div className="sv-hero-title-box">
                <h4 className="sv-hero-title tp-char-animation">
                  Experience <br /> the best services.
                </h4>
                <p className="tp_fade_bottom">
                  Fulfilled direction use continual set him propriety continued.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="sv-hero-thumb p-relative">
                <div className="sv-hero-thumb-box">
                  <Image
                    data-speed=".7"
                    src={ser_hero}
                    alt="ser_hero-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Reusable animated gradient styles — identical across site */}
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
}