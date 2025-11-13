"use client";
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
    <div className={`tp-award-area ${cls}`}>
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
                <span>
                  {/* Optional: Keep Leaf SVG if used elsewhere, or remove */}
                  {/* <Leaf /> */}
                  Recognized for Excellence
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Full-width award list — no image column */}
        <div className="row mt-5">
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
    </div>
  );
};

export default AwardOne;