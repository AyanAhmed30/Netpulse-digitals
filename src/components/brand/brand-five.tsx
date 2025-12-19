import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
// import b_1 from "@/assets/img/inner-about/brand/brand-1.png";
// import b_2 from "@/assets/img/inner-about/brand/brand-2.png";
// import b_3 from "@/assets/img/inner-about/brand/brand-3.png";
// import b_4 from "@/assets/img/inner-about/brand/brand-4.png";
// import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
// import b_6 from "@/assets/img/inner-about/brand/brand-2.png";

import b_1 from "@/assets/img/home-01/brand/fast.png";
import b_2 from "@/assets/img/home-01/brand/logo2.png";
import b_3 from "@/assets/img/home-01/brand/logo3.png";
import b_4 from "@/assets/img/home-01/brand/logo4.png";
import b_5 from "@/assets/img/home-01/brand/timeless.png";
import b_6 from "@/assets/img/home-01/brand/moizzy.png";
import b_7 from "@/assets/img/home-01/brand/premier.png";
import b_8 from "@/assets/img/home-01/brand/klaude.png";
import b_9 from "@/assets/img/home-01/brand/pinnacle.png";
import b_10 from "@/assets/img/home-01/brand/logo100.png";
import b_11 from "@/assets/img/home-01/brand/logo11.png";
import b_12 from "@/assets/img/home-01/brand/embodier.png";

// brand images
const brand_images = [
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_7,
  b_8,
  b_9,
  b_10,
  b_11,
  b_12,
];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120"
      style={{
        background: "linear-gradient(135deg, #0047AB 0%, #002D6B 100%)",
        color: "white",
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4
                className="ab-brand-title"
                style={{
                  fontFamily: "var(--tp-ff-gelder)",
                  color: "white",
                  fontSize: "2.8rem"
                }}
              >
                Our clients
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div key={i} className="ab-brand-item">
                      <Image src={b} height={70} alt="brand" style={{ filter: "brightness(0) invert(1)" }} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "white",
                  fontSize: "1.1rem",
                  lineHeight: "1.6"
                }}
              >
                A talented and passionate group of designers, developers,
                strategists, and storytellers committed to helping businesses
                grow through exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
