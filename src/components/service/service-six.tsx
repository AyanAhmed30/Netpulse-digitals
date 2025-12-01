import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/s11.png";
import ser_img_2 from "@/assets/img/inner-service/service/s22.png";
import ser_img_3 from "@/assets/img/inner-service/service/s33.png";
import ser_img_4 from "@/assets/img/inner-service/service/s44.png";
import ser_img_5 from "@/assets/img/inner-service/service/s55.png";
import ser_img_6 from "@/assets/img/inner-service/service/s66.png";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";
import { linkSync } from "fs";

import ai from "@/assets/img/inner-service/service/ai.jpg";
import ma from "@/assets/img/inner-service/service/ma.png";
import wd from "@/assets/img/inner-service/service/wd.jpg";
import eb from "@/assets/img/inner-service/service/eb.png";
import cd from "@/assets/img/inner-service/service/cd.jpg";
import dm from "@/assets/img/inner-service/service/dm.png";

const service_data = [
  {
    id: 1,
    img: cd,
    subtitle: "Design Studio",
    title: "Creative Design",
    text: "Our design team creates stunning and user-friendly design concepts that help bring your brand's message to life",
    lists: [
      "Logo design",
      "Branding",
      "Illustrations",
      "Motion graphics",
      "UI/UX design",
    ],
    links: "/services/creative-design",
  },
  {
    id: 2,
    img: wd,
    subtitle: "Development Studio",
    title: "Web Development",
    text: "We create lightning-fast, SEO-friendly websites optimized for performance and conversions.",
    lists: [
      "Website redesigns",
      "Custom builds",
      "eCommerce",
      "SEO optimization",
    ],
    links: "/services/web-development",
  },
  {
    id: 3,
    img: ma,
    subtitle: "Development Studio",
    title: "Mobile App Development",
    text: "We design and develop intuitive, high-performance mobile apps tailored for scalability and smooth user experience.",
    lists: ["Cross-platform apps", "UI/UX mobile design"],
    links: "/services/mobile-development",
  },
  {
    id: 4,
    img: dm,
    subtitle: "Marketing Hub",
    title: "Digital Marketing",
    text: "More clicks, more sales — our SEO, PPC, and social strategies grow your brand’s digital reach and engagement.",
    lists: ["SEO", "Google Ads", "Social Media Marketing", "Email Automation"],
    links: "/services/digital-marketing",
  },
  {
    id: 5,
    img: ai,
    subtitle: "AI Solutions",
    title: "AI & Chatbots",
    text: "Automate conversations and scale support with AI bots that engage users and qualify leads effortlessly.",
    lists: [
      "Custom AI bots",
      "ChatGPT API integration",
      "Automation workflows",
    ],
    links: "/services/ai-automation",
  },
  {
    id: 6,
    img: eb,
    subtitle: "Publishing Studio",
    title: "eBook Solutions",
    text: "We help authors and businesses create professional eBooks ready for Amazon KDP and other platforms.",
    lists: ["Editing", "Cover design", "Layout", "Publishing support"],
    links: "/services/ebooks",
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={item.links}
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
