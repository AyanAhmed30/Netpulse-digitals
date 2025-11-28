import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// images
import s11 from "@/assets/img/inner-service/service/s11.png";
import s22 from "@/assets/img/inner-service/service/s22.png";
import s33 from "@/assets/img/inner-service/service/s33.png";
import s44 from "@/assets/img/inner-service/service/s44.png";
import s55 from "@/assets/img/inner-service/service/s55.png";
import s66 from "@/assets/img/inner-service/service/s66.png";

import sv_2 from "@/assets/img/inner-service/sercive-details/seo1.png";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  rightDescription: string;
  benefits: string;
  bannerDescription: string;
  bannerCallToAction: string;
}

const serviceData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Online Presence & Growth",
    description: "Your online presence is at the heart of your digital identity. Strategic marketing, tailor-made and in line with your business goals will allow you to differentiate yourself and reach your target audience effectively.",
    features: [
      "SEO optimization and keyword research",
      "Social media marketing campaigns",
      "Pay-per-click advertising management",
      "Content marketing and strategy",
      "Email marketing automation",
      "Analytics and performance tracking",
    ],
    rightDescription: "Your online presence is at the heart of your digital identity. Strategic marketing, tailor-made and in line with your business goals will allow you to differentiate yourself and reach your target audience effectively.",
    benefits: "Great digital marketing strategy lets users focus on your brand and evokes emotion without distracting them. Bonus points for when it also drives measurable results and ROI!",
    bannerDescription: "Digital marketing is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic digital campaigns.",
    bannerCallToAction: "Explore our achievements and let yourself be convinced!",
  },
  "creative-design": {
    title: "Creative Design Solutions",
    description: "Transform your brand with visually stunning designs that capture attention and communicate your message effectively across all touchpoints.",
    features: [
      "Brand identity and logo design",
      "Website and UI/UX design",
      "Print design and marketing materials",
      "Packaging design",
      "Social media graphics",
      "Custom illustrations and graphics",
    ],
    rightDescription: "Create memorable visual experiences that set your brand apart from the competition with our professional design services.",
    benefits: "Creative design builds brand recognition, increases customer engagement, and helps establish a strong market presence.",
    bannerDescription: "Creative design is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your visual identity. We seek to understand your business to better convey your values and your talent through strategic design solutions.",
    bannerCallToAction: "Explore our design portfolio and let yourself be convinced!",
  },
  "web-development": {
    title: "Web Development Services",
    description: "Build responsive, high-performance websites and web applications that deliver exceptional user experiences and drive business growth.",
    features: [
      "Frontend and backend development",
      "Responsive design implementation",
      "E-commerce solutions",
      "CMS development and integration",
      "API development and integration",
      "Website maintenance and support",
    ],
    rightDescription: "Create powerful, scalable web solutions that meet your business needs and provide seamless user experiences.",
    benefits: "Professional web development ensures optimal performance, security, and scalability for your online presence.",
    bannerDescription: "Web development is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic web solutions.",
    bannerCallToAction: "Explore our web projects and let yourself be convinced!",
  },
  "ai-automation": {
    title: "AI & Automation Solutions",
    description: "Leverage artificial intelligence and automation to streamline operations, improve efficiency, and gain competitive advantages.",
    features: [
      "AI-powered chatbots and virtual assistants",
      "Process automation and workflow optimization",
      "Predictive analytics and insights",
      "Machine learning model development",
      "Robotic process automation (RPA)",
      "AI integration with existing systems",
    ],
    rightDescription: "Transform your business operations with intelligent automation solutions that save time and reduce costs.",
    benefits: "AI automation increases productivity, reduces errors, and allows your team to focus on strategic tasks.",
    bannerDescription: "AI automation is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic automation solutions.",
    bannerCallToAction: "Explore our automation solutions and let yourself be convinced!",
  },
  "ebooks": {
    title: "Ebook Creation & Publishing",
    description: "Create professional, engaging ebooks that showcase your expertise and generate revenue through digital publishing.",
    features: [
      "Content planning and writing",
      "Professional editing and proofreading",
      "Cover design and layout",
      "Formatting for multiple platforms",
      "Digital publishing assistance",
      "Marketing and distribution strategies",
    ],
    rightDescription: "Transform your knowledge and expertise into valuable digital products that reach your target audience.",
    benefits: "Ebooks establish authority, generate passive income, and expand your reach to a global audience.",
    bannerDescription: "Ebook creation is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic ebook solutions.",
    bannerCallToAction: "Explore our ebook projects and let yourself be convinced!",
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "Create high-quality, user-friendly mobile applications for iOS and Android platforms that engage users and drive business growth.",
    features: [
      "Native and cross-platform app development",
      "UI/UX design for mobile interfaces",
      "App store optimization (ASO)",
      "Backend integration and APIs",
      "Testing and quality assurance",
      "App maintenance and updates",
    ],
    rightDescription: "Build powerful mobile applications that connect with your audience on their preferred devices.",
    benefits: "Mobile apps increase customer engagement, provide convenient access to your services, and enhance brand loyalty.",
    bannerDescription: "Mobile development is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic mobile solutions.",
    bannerCallToAction: "Explore our mobile apps and let yourself be convinced!",
  },
};

export default function ServiceDetailsArea({ slug }: { slug: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const serviceImageMap: Record<keyof typeof serviceData, StaticImageData> = {
    "digital-marketing": s44,
    "creative-design": s11,
    "web-development": s22,
    "mobile-development": s33,
    "ai-automation": s55,
    "ebooks": s66,
  };

  const extractServiceSlug = useCallback(() => {
    if (pathname) {
      const parts = pathname.split("/");
      return parts[parts.length - 1].toLowerCase();
    }
    return slug?.toLowerCase() || "digital-marketing";
  }, [pathname, slug]);

  const normalizedSlug = extractServiceSlug();
  const [activeService, setActiveService] = useState<keyof typeof serviceData>(
    serviceData[normalizedSlug as keyof typeof serviceData] ? (normalizedSlug as keyof typeof serviceData) : "digital-marketing"
  );

  useEffect(() => {
    const serviceSlug = extractServiceSlug();
    if (serviceData[serviceSlug as keyof typeof serviceData]) {
      setActiveService(serviceSlug as keyof typeof serviceData);
    } else {
      setActiveService("digital-marketing");
    }
  }, [extractServiceSlug]);

  const currentService = serviceData[activeService];

  const getDisplayTitle = () => {
    const title = activeService.replace(/-/g, " ");
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const handleCategoryClick = (service: keyof typeof serviceData, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveService(service);
    router.push(`/services/${service}`);
  };

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">{getDisplayTitle()}</span>
              <h4 className="sv-hero-title tp-char-animation">{currentService.title}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-4 col-xl-5">
            <div className="service-details__banner-text mb-80">
              <p className="mb-30 tp_title_anim">{currentService.bannerDescription}</p>
              <p className="tp_title_anim">{currentService.bannerCallToAction}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={serviceImageMap[activeService]}
                  alt={`${currentService.title} service illustration`}
                  style={{ height: "auto" }}
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">{currentService.description}</p>
                <p>{currentService.benefits}</p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image src={sv_2} alt="service-img" style={{ height: "auto" }} />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image src={sv_3} alt="service-img" style={{ height: "auto" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {Object.keys(serviceData).map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service}`}
                    onClick={(e) => handleCategoryClick(service as keyof typeof serviceData, e)}
                    className={activeService === service ? "active" : ""}
                  >
                    {service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  {activeService.split("-")[0].charAt(0).toUpperCase() +
                    activeService.split("-")[0].slice(1)}
                  <br />
                  {activeService.split("-")[1]
                    ? activeService.split("-")[1].charAt(0).toUpperCase() +
                      activeService.split("-")[1].slice(1)
                    : ""}
                </h4>
                <p className="mb-20">{currentService.rightDescription}</p>
                <Link className="tp-btn-white background-black" href="/contact">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}