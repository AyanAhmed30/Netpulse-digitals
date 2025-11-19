import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      "Analytics and performance tracking"
    ],
    rightDescription: "Your online presence is at the heart of your digital identity. Strategic marketing, tailor-made and in line with your business goals will allow you to differentiate yourself and reach your target audience effectively.",
    benefits: "Great digital marketing strategy lets users focus on your brand and evokes emotion without distracting them. Bonus points for when it also drives measurable results and ROI!",
    bannerDescription: "Digital marketing is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic digital campaigns.",
    bannerCallToAction: "Explore our achievements and let yourself be convinced!"
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
      "Custom illustrations and graphics"
    ],
    rightDescription: "Create memorable visual experiences that set your brand apart from the competition with our professional design services.",
    benefits: "Creative design builds brand recognition, increases customer engagement, and helps establish a strong market presence.",
    bannerDescription: "Creative design is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your visual identity. We seek to understand your business to better convey your values and your talent through strategic design solutions.",
    bannerCallToAction: "Explore our design portfolio and let yourself be convinced!"
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
      "Website maintenance and support"
    ],
    rightDescription: "Create powerful, scalable web solutions that meet your business needs and provide seamless user experiences.",
    benefits: "Professional web development ensures optimal performance, security, and scalability for your online presence.",
    bannerDescription: "Web development is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic web solutions.",
    bannerCallToAction: "Explore our web projects and let yourself be convinced!"
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
      "AI integration with existing systems"
    ],
    rightDescription: "Transform your business operations with intelligent automation solutions that save time and reduce costs.",
    benefits: "AI automation increases productivity, reduces errors, and allows your team to focus on strategic tasks.",
    bannerDescription: "AI automation is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic automation solutions.",
    bannerCallToAction: "Explore our automation solutions and let yourself be convinced!"
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
      "Marketing and distribution strategies"
    ],
    rightDescription: "Transform your knowledge and expertise into valuable digital products that reach your target audience.",
    benefits: "Ebooks establish authority, generate passive income, and expand your reach to a global audience.",
    bannerDescription: "Ebook creation is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic ebook solutions.",
    bannerCallToAction: "Explore our ebook projects and let yourself be convinced!"
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
      "App maintenance and updates"
    ],
    rightDescription: "Build powerful mobile applications that connect with your audience on their preferred devices.",
    benefits: "Mobile apps increase customer engagement, provide convenient access to your services, and enhance brand loyalty.",
    bannerDescription: "Mobile development is essential to establish your brand in the online market in a unique and permanent way. At Fast Print Guys, we attach great importance to your online presence. We seek to understand your business to better convey your values and your talent through strategic mobile solutions.",
    bannerCallToAction: "Explore our mobile apps and let yourself be convinced!"
  }
};

export default function ServiceDetailsArea({ slug }: { slug: string }) {
  const router = useRouter();
  const pathname = usePathname();

  // image map
  const serviceImageMap: Record<keyof typeof serviceData, any> = {
    "digital-marketing": s44,
    "creative-design": s11,
    "web-development": s22,
    "mobile-development": s33,
    "ai-automation": s55,
    "ebooks": s66,
  };

  // Extract service slug from pathname
  const extractServiceSlug = () => {
    if (pathname) {
      const pathParts = pathname.split('/');
      const serviceSlug = pathParts[pathParts.length - 1];
      return serviceSlug.toLowerCase();
    }
    return slug?.toLowerCase() || "digital-marketing";
  };

  // Normalize slug to match serviceData keys with fallback
  const normalizedSlug = extractServiceSlug();
  const [activeService, setActiveService] = useState<keyof typeof serviceData>(
    serviceData[normalizedSlug as keyof typeof serviceData]
      ? normalizedSlug as keyof typeof serviceData
      : "digital-marketing"
  );

  // Update active service when pathname changes
  useEffect(() => {
    const serviceSlug = extractServiceSlug();
    if (serviceData[serviceSlug as keyof typeof serviceData]) {
      setActiveService(serviceSlug as keyof typeof serviceData);
    } else {
      setActiveService("digital-marketing"); // fallback to digital marketing
    }
  }, [pathname]);

  const currentService = serviceData[activeService];

  // Get display title from service name
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
              <span className="service-details__subtitle tp-char-animation">
                {getDisplayTitle()}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {currentService.title}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {currentService.bannerDescription}
                </p>
                <p className="tp_title_anim">
                  {currentService.bannerCallToAction}
                </p>
              </div>
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
                  // Optional: add width/height for Next.js optimization
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
                <p className="text-1 tp_title_anim">
                  {currentService.description}
                </p>
                <p>
                  {currentService.benefits}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {currentService.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {currentService.benefits}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <Link
                  href="/services/digital-marketing"
                  onClick={(e) => handleCategoryClick("digital-marketing", e)}
                  className={activeService === "digital-marketing" ? "active" : ""}
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/services/creative-design"
                  onClick={(e) => handleCategoryClick("creative-design", e)}
                  className={activeService === "creative-design" ? "active" : ""}
                >
                  Creative Design
                </Link>
                <Link
                  href="/services/web-development"
                  onClick={(e) => handleCategoryClick("web-development", e)}
                  className={activeService === "web-development" ? "active" : ""}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/ai-automation"
                  onClick={(e) => handleCategoryClick("ai-automation", e)}
                  className={activeService === "ai-automation" ? "active" : ""}
                >
                  AI Automation
                </Link>
                <Link
                  href="/services/ebooks"
                  onClick={(e) => handleCategoryClick("ebooks", e)}
                  className={activeService === "ebooks" ? "active" : ""}
                >
                  E-Books
                </Link>
                <Link
                  href="/services/mobile-development"
                  onClick={(e) => handleCategoryClick("mobile-development", e)}
                  className={activeService === "mobile-development" ? "active" : ""}
                >
                  Mobile App Development
                </Link>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  {activeService === "digital-marketing" ? "Digital" :
                    activeService === "creative-design" ? "Creative" :
                      activeService === "web-development" ? "Web" :
                        activeService === "ai-automation" ? "AI" :
                          activeService === "ebooks" ? "EBook" :
                            "Mobile"}
                  <br />
                  {activeService === "digital-marketing" ? "Marketing" :
                    activeService === "creative-design" ? "Design" :
                      activeService === "web-development" ? "Development" :
                        activeService === "ai-automation" ? "Automation" :
                          activeService === "ebooks" ? "Creation" :
                            "Apps"}
                </h4>
                <p className="mb-20">
                  {currentService.rightDescription}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}