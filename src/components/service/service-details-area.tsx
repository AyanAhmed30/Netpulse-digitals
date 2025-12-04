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
  modernProblems: string[];
  solutions: string[];
  detailedIntro: string;
}

const serviceData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Online Presence & Growth",
    detailedIntro: "Digital marketing is the fundamental necessity for every business in today's era. It's not just about advertising, but rather the means to keep your brand alive in the digital world. From social media to search engines, your presence everywhere is essential so customers can easily reach you.",
    description: "Your online presence is at the heart of your digital identity. Strategic marketing, tailored to align with your business goals, helps you differentiate yourself and reach your target audience effectively. We utilize data-driven strategies that deliver measurable results and maximize your ROI.",
    modernProblems: [
      "Low online visibility and lack of brand awareness that creates barriers to reaching customers",
      "Ineffective presence and absence of engagement on social media platforms",
      "Low ranking on search engines preventing organic traffic generation",
      "Falling behind competitors in digital marketing strategies",
      "Poor conversion rates despite high advertising costs",
      "Inability to reach target audience with the right message, resulting in wasted marketing budget"
    ],
    solutions: [
      "Implementing comprehensive SEO strategies that bring your website to the top of search results",
      "Designing targeted social media campaigns that engage your specific audience",
      "Cost-effective PPC advertising that generates qualified leads and maximizes ROI",
      "Content marketing strategies that build authority and develop customer trust",
      "Email automation systems that nurture leads and increase conversions",
      "Advanced analytics and tracking systems that provide real-time insights for campaign performance"
    ],
    features: [
      "SEO optimization and comprehensive keyword research",
      "Multi-platform social media marketing campaigns",
      "Strategic pay-per-click advertising management",
      "Content marketing strategy and creation",
      "Advanced email marketing automation",
      "Detailed analytics and performance tracking",
    ],
    rightDescription: "Our digital marketing services transform your brand into an online dominant force. We use a data-driven approach that delivers guaranteed results and aligns with your business goals.",
    benefits: "A powerful digital marketing strategy focuses customers on your brand and creates an emotional connection without any distractions. And when it drives measurable results and ROI as well, that's the cherry on top!",
    bannerDescription: "Digital marketing is essential to establish your brand uniquely and permanently in today's competitive market. At Fast Print Guys, we place great importance on your online presence. We understand your business to better convey your values and talent through strategic digital campaigns.",
    bannerCallToAction: "Explore our achievements and convince yourself!",
  },
  "creative-design": {
    title: "Creative Design Solutions",
    detailedIntro: "Creative design is not just about beauty, it's your brand's identity. A good design leaves a memorable impression and secures a place in customers' hearts. From logos to packaging, every visual element tells your brand story.",
    description: "Transform your brand with visually stunning designs that capture attention and effectively communicate your message. We believe that every design element should be purposeful and strengthen your brand identity.",
    modernProblems: [
      "Generic and forgettable brand identity that fails to stand out in the market",
      "Inconsistent visual branding across different platforms creating confusion",
      "Outdated designs that fail to attract modern customers",
      "Poor user experience due to bad UI/UX design that frustrates customers",
      "Low-quality graphics and visuals that give an unprofessional impression",
      "Lack of cohesive visual strategy that dilutes the brand message"
    ],
    solutions: [
      "Creating unique and memorable brand identities that clearly stand out in the market",
      "Developing consistent design systems that provide a unified experience across all platforms",
      "Modern, trend-forward designs that meet current market demands",
      "User-centric UI/UX designs that create intuitive and engaging experiences",
      "High-quality, professional graphics that build brand credibility",
      "Comprehensive visual strategies that amplify brand message and resonate with target audience"
    ],
    features: [
      "Comprehensive brand identity and logo design",
      "Modern website and intuitive UI/UX design",
      "Professional print design and marketing materials",
      "Eye-catching packaging design solutions",
      "Engaging social media graphics and templates",
      "Custom illustrations and unique graphics",
    ],
    rightDescription: "Our creative design services create memorable visual experiences that distinguish your brand from the competition. We provide the perfect blend of creativity and strategy.",
    benefits: "Creative design builds brand recognition, increases customer engagement, and helps establish a strong market presence. Good design is an investment that delivers long-term returns.",
    bannerDescription: "Creative design is essential to give your brand a unique and permanent identity in the online market. At Fast Print Guys, we give great importance to your visual identity. We strive to understand your business to effectively convey your values and talent through strategic design solutions.",
    bannerCallToAction: "Explore our design portfolio and convince yourself!",
  },
  "web-development": {
    title: "Web Development Services",
    detailedIntro: "Your website is your digital property - it's the online home of your business. A professional, fast, and user-friendly website not only provides information but defines customer experience and drives conversions.",
    description: "Build responsive, high-performance websites and web applications that deliver exceptional user experiences and drive business growth. We use the latest technologies and best practices to ensure your website is fast, secure, and scalable.",
    modernProblems: [
      "Slow-loading websites that frustrate visitors and increase bounce rates",
      "Non-responsive designs that provide poor experience to mobile users",
      "Security vulnerabilities that create data breaches and customer trust issues",
      "Outdated technology stacks that create performance issues and maintenance problems",
      "Poor user experience that negatively impacts conversions and sales",
      "Lack of scalability that limits business growth"
    ],
    solutions: [
      "Developing lightning-fast websites with optimized code and performance best practices",
      "Fully responsive designs that provide perfect experience on every device",
      "Enterprise-grade security implementations that protect data and users",
      "Using modern technology stacks that are future-proof and maintainable",
      "Designing intuitive user experiences that maximize conversions",
      "Building scalable architectures that can easily expand with business growth"
    ],
    features: [
      "Full-stack frontend and backend development",
      "Mobile-first responsive design implementation",
      "Secure e-commerce solutions with payment integration",
      "Flexible CMS development and integration",
      "RESTful API development and third-party integration",
      "Ongoing website maintenance and technical support",
    ],
    rightDescription: "Our web development services create powerful, scalable solutions that meet your business needs and provide seamless user experiences. Quality and performance are our priorities.",
    benefits: "Professional web development ensures optimal performance, robust security, and scalability for your online presence. A good website works 24/7 and converts customers effortlessly.",
    bannerDescription: "Web development is essential to give your brand a unique and permanent position in the online market. At Fast Print Guys, we give exceptional importance to your online presence. We deeply understand your business to effectively showcase your values and capabilities through strategic web solutions.",
    bannerCallToAction: "Explore our web projects and see the quality yourself!",
  },
  "ai-automation": {
    title: "AI & Automation Solutions",
    detailedIntro: "AI and automation are no longer just talk of the future, they are a present necessity. By automating repetitive tasks, you give your team the opportunity to focus on more important work. Smart systems work for you 24/7 without getting tired.",
    description: "Leverage artificial intelligence and automation to streamline operations, improve efficiency, and gain competitive advantages. We implement cutting-edge AI solutions that revolutionize your business processes.",
    modernProblems: [
      "Manual, repetitive tasks that waste valuable time and resources",
      "Human errors that cause costly mistakes and productivity loss",
      "Inability to handle large data volumes efficiently and extract actionable insights",
      "Providing 24/7 customer support becomes expensive and challenging",
      "Slow decision-making due to lack of real-time data analysis",
      "Scaling operations becomes difficult with manual processes"
    ],
    solutions: [
      "Intelligent automation systems that handle repetitive tasks and reduce human effort",
      "AI-powered quality control that minimizes errors and improves consistency",
      "Advanced analytics platforms that process large datasets and provide actionable insights",
      "24/7 AI chatbots and virtual assistants that provide instant customer support",
      "Predictive analytics systems that enable real-time insights for better decision-making",
      "Scalable automation solutions that can easily grow with the business"
    ],
    features: [
      "Advanced AI-powered chatbots and intelligent virtual assistants",
      "Comprehensive process automation and workflow optimization",
      "Predictive analytics and actionable business insights",
      "Custom machine learning model development and training",
      "Enterprise robotic process automation (RPA) implementation",
      "Seamless AI integration with existing business systems",
    ],
    rightDescription: "Our AI automation services transform your business operations with intelligent solutions that save time and significantly reduce costs. Implement future-ready technology today.",
    benefits: "AI automation exponentially increases productivity, dramatically reduces errors, and gives your team the freedom to focus on strategic, high-value tasks. This is the competitive advantage that gives you the lead in the market.",
    bannerDescription: "AI automation is essential to make your business competitive and efficient in the digital age. At Fast Print Guys, we provide cutting-edge technology solutions. We analyze your business to optimize your operations through strategic automation and achieve maximum efficiency.",
    bannerCallToAction: "See our automation solutions and experience the transformation!",
  },
  "ebooks": {
    title: "Ebook Creation & Publishing",
    detailedIntro: "Ebooks are the best way to share knowledge and generate passive income. Your expertise can now be read by people worldwide in book form. Digital products never run out and are always available.",
    description: "Create professional, engaging ebooks that showcase your expertise and generate revenue through digital publishing. We provide complete support from concept to publishing to ensure your ebook is successful.",
    modernProblems: [
      "Difficulty in organizing thoughts and presenting knowledge in a structured format",
      "Lack of writing skills and time that makes quality content creation difficult",
      "Poor design and formatting that gives ebooks an unprofessional look",
      "Confusion about multiple publishing platforms and their requirements",
      "Inability to effectively market and distribute ebooks to reach target audience",
      "Not knowing how to price and position ebooks in a competitive market"
    ],
    solutions: [
      "Expert content planning and structuring that converts ideas into compelling narratives",
      "Professional writing and ghostwriting services that deliver polished content",
      "High-quality design and formatting that displays perfectly on every platform",
      "Platform-specific optimization and publishing support that maximizes reach",
      "Comprehensive marketing strategies that effectively get ebooks to target audience",
      "Pricing and positioning strategies that provide competitive advantage and maximize sales"
    ],
    features: [
      "Comprehensive content planning and professional writing",
      "Expert editing and meticulous proofreading services",
      "Professional cover design and interior layout",
      "Multi-platform formatting (Kindle, Apple Books, PDF, etc.)",
      "Digital publishing assistance and distribution support",
      "Strategic marketing and distribution planning",
    ],
    rightDescription: "Our ebook services transform your knowledge and expertise into valuable digital products that reach a global audience. Your message, worldwide impact.",
    benefits: "Ebooks establish authority, create passive income streams, and expand your reach to a global audience. Create once, sell forever - that's the power of digital products.",
    bannerDescription: "Ebook creation is a powerful way to monetize your expertise and knowledge. At Fast Print Guys, we make digital publishing accessible and profitable. We understand your ideas and convert them into professional ebooks that enhance your brand value and generate steady income.",
    bannerCallToAction: "See our ebook projects and explore the possibilities!",
  },
  "mobile-development": {
    title: "Mobile App Development",
    detailedIntro: "Mobile apps are no longer a luxury but a necessity. People spend more time on their phones, and if your app is on their phone, you are always with them. This is the most powerful tool for customer engagement.",
    description: "Create high-quality, user-friendly mobile applications for iOS and Android platforms that engage users and drive business growth. We provide both native and cross-platform solutions that meet your specific requirements.",
    modernProblems: [
      "Inability to engage customers who are increasingly mobile-first",
      "Missing out on mobile commerce opportunities that are rapidly growing",
      "Poor mobile user experience that pushes customers towards competitors",
      "High development costs and long timelines that delay app launches",
      "Lack of native device features integration that provides limited functionality",
      "Difficulty in maintaining apps across multiple platforms and OS versions"
    ],
    solutions: [
      "Developing engaging mobile apps that directly connect with customers",
      "Full-featured m-commerce solutions that exponentially increase mobile sales",
      "Intuitive, native-feeling experiences that maximize user satisfaction",
      "Cost-effective cross-platform development that reduces time-to-market",
      "Deep native integration that fully utilizes device features (camera, GPS, notifications)",
      "Comprehensive maintenance and update strategies that keep apps current and functional"
    ],
    features: [
      "Native iOS and Android app development with optimal performance",
      "Cross-platform development using React Native and Flutter",
      "Modern UI/UX design for intuitive mobile interfaces",
      "App store optimization (ASO) for maximum visibility",
      "Robust backend integration and RESTful APIs",
      "Rigorous testing, quality assurance, and ongoing maintenance",
    ],
    rightDescription: "Our mobile development services create powerful applications that connect your audience on their preferred devices. Native performance, cross-platform efficiency.",
    benefits: "Mobile apps drastically increase customer engagement, provide convenient access to services, and significantly enhance brand loyalty. Apps are a direct channel to customers with push notifications and personalized experiences.",
    bannerDescription: "Mobile development is critical for business success in today's mobile-first world. At Fast Print Guys, we follow a mobile-first approach. We understand your business objectives and develop strategic mobile solutions that delight users and deliver business results.",
    bannerCallToAction: "Explore our mobile apps and see the innovation!",
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
                <h5 className="mb-20">Service Introduction</h5>
                <p className="text-1 tp_title_anim mb-30">{currentService.detailedIntro}</p>
                <p className="mb-20">{currentService.description}</p>
                <p>{currentService.benefits}</p>
              </div>

              <div className="service-details__left-text pb-20 pt-30">
                <h5 className="mb-20">Modern Business Challenges</h5>
                <p className="mb-20">In today&apos;s digital landscape, businesses face significant challenges:</p>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    {currentService.modernProblems.map((problem, index) => (
                      <li key={index}>{problem}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-details__left-text pb-30">
                <h5 className="mb-20">Our Strategic Solutions</h5>
                <p className="mb-20">We provide comprehensive solutions that directly address these challenges:</p>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    {currentService.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-details__left-text pb-20">
                <h5 className="mb-20">Key Features & Deliverables</h5>
                <div className="service-details__fea-list">
                  <ul>
                    {currentService.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div className="service-details__sm-thumb-wrap mb-60 mt-40">
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
              </div> */}
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