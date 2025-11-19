import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

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
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
        
              <h4 className="tp-section-title tp-char-animation">
                Netpulse Digitals<br />
                <span>Services</span>
              </h4>
            </div>

              <div className="tp-service-left-btn tp-btn-bounce">
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
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
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
    </div>
  );
};

export default ServiceOne;