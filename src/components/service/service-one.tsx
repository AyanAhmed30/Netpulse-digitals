"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceProcess from "./service-process";
import ServiceCTA from "./service-cta";

// service images
import s_1 from "@/assets/img/home-01/service/d-m.png";
import s_2 from "@/assets/img/home-01/service/w-d.png";
import s_3 from "@/assets/img/home-01/service/c-d.png";
import s_4 from "@/assets/img/home-01/service/m-l.png";

// service data
const service_data = [
  {
    id: 1,
    title: "Web & App Development",
    desc: "Build fast, responsive, conversion-driven digital platforms. We design & develop websites and apps that look stunning, perform flawlessly, and turn visitors into customers.",
    icon: s_2,
    link: "/service",
    cta: "View Development Services",
  },
  {
    id: 2,
    title: "Branding & Creative Design",
    desc: "Create a brand that people trust and remember. Logos, brand identity systems, social media design — everything your brand needs to stand out.",
    icon: s_3,
    link: "/service",
    cta: "Explore Branding",
  },
  {
    id: 3,
    title: "Digital Marketing & SEO",
    desc: "Get found. Get clicks. Get customers. From SEO and social media to ads and funnels — we build custom strategies that increase visibility and generate real growth.",
    icon: s_1,
    link: "/service",
    cta: "Grow With Marketing",
  },
  {
    id: 4,
    title: "AI & Automation",
    desc: "Automate your business with intelligent systems. AI chatbots, workflow automation, CRM integrations — scale smarter with AI-powered tools.",
    icon: s_4,
    link: "/service",
    cta: "Discover AI Solutions",
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger position-relative">


      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Centered Header Section */}
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-5">
              <h4 className="tp-section-title tp-char-animation" style={{
                color: "#0047AB",
                fontFamily: "var(--tp-ff-gelder)",
                fontWeight: "700",
                fontSize: "4rem",
                marginBottom: "20px"
              }}>What We Can Do for Your Business</h4>
              <p style={{
                color: "#4A5568",
                fontFamily: "var(--tp-ff-body)",
                fontSize: "1.15rem",
                maxWidth: "700px",
                margin: "0 auto"
              }}> End-to-end creative, development, and marketing services strategically designed and executed to deliver measurable performance, drive growth, enhance brand impact, and achieve long-term business results.</p>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="row g-4 mt-15">
          {service_data.map((s, i) => (
            <div key={s.id} className="col-lg-6 col-md-6">
              <div className="service-card tp_fade_bottom">
                <div className="service-card-icon">
                  <Image src={s.icon} alt="icon" width={60} height={60} />
                </div>
                <h4 className="service-card-title">
                  <Link href={s.link}>{s.title}</Link>
                </h4>
                <p className="service-card-desc">{s.desc}</p>
                {/* <Link href={s.link} className="service-card-link">
                  {s.cta} →
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* Button Below Cards */}
        <div className="row mt-15">
          <div className="col-12 text-center mt-15">
            <Link
              href="/service"
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
                border: "2px solid #0047AB" // ✅ Corrected: adds width + style + color
              }}
              className="service-cta-btn"
            >
              See All Services
            </Link>

          </div>
        </div>
      </div>

      {/* Card Styles */}
      <style jsx>{`
        .service-card {
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 71, 171, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 71, 171, 0.1);
          cursor: pointer;
          border-color: #0047AB;

        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 71, 171, 0.25);
          background: linear-gradient(135deg, #5091ecff 0%, #3e69aaff 100%);
          border-color: #0047AB;
          service-card-title a: color: white;
        }

        .service-card-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(0, 71, 171, 0.1) 0%, rgba(0, 71, 171, 0.05) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-card-icon {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .service-card-title {
          font-family: var(--tp-ff-gelder);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .service-card-title:hover {
          color: white;
        }
          .service-card-title p:hover {
            color: white;
          }
        .service-card-title a {
          color: #0047AB;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .service-card-title h4 {
          color: #0047AB;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-card-title a {
          color: white !important;
        }

        .service-card-desc {
          color: #4A5568;
          font-family: var(--tp-ff-body);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-card-desc {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .service-card-link {
          color: #0047AB;
          font-family: var(--tp-ff-body);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
          .service-card-link a:hover {
            color: white;
          }

        .service-card:hover .service-card-link {
          gap: 12px;
          color: white !important;
        }

        @media (max-width: 768px) {
          .service-card {
            padding: 30px 20px;
          }
          
          .service-card:hover {
            transform: translateY(-5px) scale(1.02);
          }
        }
      `}</style>



    </div>
  );
};

export default ServiceOne;