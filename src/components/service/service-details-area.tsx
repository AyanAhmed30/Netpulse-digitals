import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  rightDescription: string;
  benefits: string;
}

const serviceData: Record<string, ServiceData> = {
  "Digital Marketing": {
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
    benefits: "Great digital marketing strategy lets users focus on your brand and evokes emotion without distracting them. Bonus points for when it also drives measurable results and ROI!"
  },
  "SEO": {
    title: "Search Engine Optimization",
    description: "Boost your website's visibility on search engines with our comprehensive SEO strategies. We optimize your site to rank higher and attract more organic traffic.",
    features: [
      "Keyword research and optimization",
      "Technical SEO audit and fixes",
      "On-page optimization",
      "Link building strategies",
      "Local SEO optimization",
      "Performance monitoring and reporting"
    ],
    rightDescription: "Improve your website's search engine rankings and drive organic traffic with our proven SEO strategies tailored to your business needs.",
    benefits: "Effective SEO increases your website's visibility, drives targeted traffic, and helps you reach customers actively searching for your products or services."
  },
  "Google Ads": {
    title: "Pay-Per-Click Advertising",
    description: "Drive immediate results with Google Ads campaigns that put your business in front of potential customers when they're searching for your services.",
    features: [
      "Search campaign setup and management",
      "Display advertising",
      "Shopping ads for e-commerce",
      "Remarketing campaigns",
      "Budget optimization",
      "Conversion tracking and analytics"
    ],
    rightDescription: "Get instant visibility on Google with targeted ads that reach customers when they're actively searching for your products or services.",
    benefits: "Google Ads delivers immediate results, offers full budget control, and provides measurable ROI with detailed performance tracking."
  },
  "Social Media Marketing": {
    title: "Social Media Presence",
    description: "Build a strong social media presence that connects with your audience and drives engagement across all major platforms.",
    features: [
      "Social media strategy development",
      "Content creation and scheduling",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
      "Analytics and performance tracking"
    ],
    rightDescription: "Connect with your audience on social platforms and build brand awareness through strategic social media marketing campaigns.",
    benefits: "Social media marketing builds brand loyalty, increases customer engagement, and provides valuable insights into customer behavior and preferences."
  },
  "Email Automation": {
    title: "Email Automation",
    description: "Automate your email marketing to nurture leads, retain customers, and drive conversions with personalized, timely communications.",
    features: [
      "Email campaign setup and automation",
      "Segmentation and personalization",
      "A/B testing for optimization",
      "Lead nurturing sequences",
      "Transactional email setup",
      "Performance analytics and optimization"
    ],
    rightDescription: "Automate your communication with customers and prospects through targeted email campaigns that deliver the right message at the right time.",
    benefits: "Email automation saves time, increases engagement, and drives higher conversion rates by delivering personalized content based on user behavior."
  }
};

export default function ServiceDetailsArea() {
  const [activeService, setActiveService] = useState<keyof typeof serviceData>("Digital Marketing");

  const currentService = serviceData[activeService];

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                Digital Marketing
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
                  Digital marketing is essential to establish your brand in the 
                  online market in a unique and permanent way. At Fast Print Guys, 
                  we attach great importance to your online presence. We seek to 
                  understand your business to better convey your values and your 
                  talent through strategic digital campaigns.
                </p>
                <p className="tp_title_anim">
                  Explore our achievements and let yourself be convinced!
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
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
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
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveService("SEO");
                  }}
                  className={activeService === "SEO" ? "active" : ""}
                >
                  SEO
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveService("Google Ads");
                  }}
                  className={activeService === "Google Ads" ? "active" : ""}
                >
                  Google Ads
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveService("Social Media Marketing");
                  }}
                  className={activeService === "Social Media Marketing" ? "active" : ""}
                >
                  Social Media Marketing
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveService("Email Automation");
                  }}
                  className={activeService === "Email Automation" ? "active" : ""}
                >
                  Email Automation
                </Link>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  {activeService === "Digital Marketing" ? "Digital" : 
                   activeService === "SEO" ? "SEO" : 
                   activeService === "Google Ads" ? "Google Ads" : 
                   activeService === "Social Media Marketing" ? "Social Media" : 
                   "Email Automation"}
                  <br /> 
                  {activeService === "Digital Marketing" ? "Marketing" : 
                   activeService === "SEO" ? "Optimization" : 
                   activeService === "Google Ads" ? "Advertising" : 
                   activeService === "Social Media Marketing" ? "Marketing" : 
                   "Automation"}
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