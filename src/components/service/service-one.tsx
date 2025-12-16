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


      <div className="container container-1630 position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <h4 className="tp-section-title tp-char-animation">What We Can Do for Your Business</h4>
              <p className="mt-3">End-to-end creative, development, and marketing services built for performance.</p>
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
                    <div className="mt-2">
                      <Link href={s.link} className="tp-link-arrow">
                        {s.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <ServiceProcess /> */}

      {/* <ServiceCTA /> */}

      {/* ✅ Inline styles for animated background (same as HeroBannerOne) */}

    </div>
  );
};

export default ServiceOne;