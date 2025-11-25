"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import { Leaf, ScrollDownTwo, UpArrowFour } from "@/components/svg";
import Link from "next/link";

// Reuse your project data to stay consistent
// import { project_data } from "@/components/home-01/project/project-one"; // 🔁 Adjust this path if needed

// Default images (used across all projects unless you add per-project assets)
import full_image_default_1 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg";
import business_ai from "@/assets/img/inner-project/portfolio-details-3/business-ai-automation.png";
import medical_ai_automation from "@/assets/img/inner-project/portfolio-details-3/medical_ai_automation.png";
import customer_ai_automation from "@/assets/img/inner-project/portfolio-details-3/customer_ai_automation.png";
import business_ai_automation from "@/assets/img/inner-project/portfolio-details-3/business_ai_automation.png";
import full_image_default_2 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg";
import thumb_1 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg";
import thumb_2 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg";
import thumb_3 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg";
import thumb_4 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg";
import thumb_5 from "@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg";

// Define dynamic content per project ID (1–6)
const getProjectContent = (id: number) => {
  const base = {
    full_image_1: business_ai,
    full_image_2: full_image_default_2,
    thumb_images: [thumb_1, thumb_2],
    slider_images: [thumb_3, thumb_4, thumb_5, thumb_4],
  };

  switch (id) {
    case 1:
      return {
        ...base,
        title: "Fast Web Development",
        category: "Web Development",
        intro: "Our web development approach focuses on speed, performance, and modern architecture. We build scalable, responsive websites using cutting-edge frameworks like Next.js and React.",
        goal: "The goal was to deliver a blazing-fast, SEO-optimized website that loads instantly and provides an exceptional user experience across all devices.",
      };
    case 2:
      return {
        ...base,
        title: "AI Automation",
        category: "AI & Automation",
        intro: "We leverage artificial intelligence to automate repetitive tasks, enhance decision-making, and improve business efficiency through smart integrations and custom models.",
        goal: "To replace manual workflows with intelligent systems that learn, adapt, and scale with your business needs—reducing cost and human error.",
        thumb_images: [thumb_2, thumb_1],
        slider_images: [business_ai, medical_ai_automation, customer_ai_automation, business_ai_automation],
      };
    case 3:
      return {
        ...base,
        title: "Creative Design",
        category: "UI/UX Design",
        intro: "Our design philosophy blends aesthetics with functionality. Every pixel is crafted to deliver intuitive, beautiful, and conversion-focused digital experiences.",
        goal: "To create a unique visual language that reflects the brand’s identity while ensuring seamless interaction and accessibility.",
        thumb_images: [thumb_3, thumb_4],
        slider_images: [thumb_1, thumb_5, thumb_2, thumb_1],
      };
    case 4:
      return {
        ...base,
        title: "Digital Marketing",
        category: "Digital Marketing",
        intro: "From SEO to paid campaigns, we craft data-driven strategies that increase visibility, drive qualified traffic, and maximize ROI across all digital channels.",
        goal: "To build a sustainable growth engine that turns clicks into customers and customers into brand advocates.",
        thumb_images: [thumb_4, thumb_5],
        slider_images: [thumb_2, thumb_3, thumb_1, thumb_2],
      };
    case 5:
      return {
        ...base,
        title: "Mobile Application",
        category: "Mobile Development",
        intro: "We develop native and cross-platform mobile apps that are fast, reliable, and packed with features your users will love—on both iOS and Android.",
        goal: "To deliver a seamless mobile experience that aligns with user behavior and business objectives, wrapped in a polished, high-performance app.",
        thumb_images: [thumb_5, thumb_3],
        slider_images: [thumb_4, thumb_1, thumb_5, thumb_4],
      };
    case 6:
      return {
        ...base,
        title: "Interactive eBook",
        category: "Content Platform",
        intro: "We transform static content into engaging, interactive eBooks with multimedia elements, dynamic layouts, and seamless reading experiences.",
        goal: "To redefine content consumption by making learning and reading more immersive, accessible, and shareable across devices.",
        thumb_images: [thumb_1, thumb_5],
        slider_images: [thumb_3, thumb_2, thumb_4, thumb_3],
      };
    default:
      return null;
  }
};

// Slider settings (unchanged from your original)
const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': { slidesPerView: 3 },
    '1200': { slidesPerView: 3 },
    '992': { slidesPerView: 2 },
    '768': { slidesPerView: 2 },
    '576': { slidesPerView: 1 },
    '0': { slidesPerView: 1 },
  },
};

export default function PortfolioDetailsThreeArea() {
  const searchParams = useSearchParams();
  const projectIdParam = searchParams.get("project");
  const projectId = projectIdParam ? parseInt(projectIdParam, 10) : 1; // fallback to 1

  const [content, setContent] = useState<ReturnType<typeof getProjectContent> | null>(null);

  useEffect(() => {
    const loaded = getProjectContent(projectId);
    setContent(loaded || getProjectContent(1)); // fallback to project 1 if invalid
  }, [projectId]);

  const scrollTo = () => {
    scroller.scrollTo("xyz", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  if (!content) return null;

  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-title-box">
                <h2 className="tp-section-title-160 mb-50 tp-char-animation">
                  {content.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span>
                    <ScrollDownTwo />
                  </span>
                  Scroll to Explore
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <Link href="#">
                  Visit Website
                  <span>
                    <UpArrowFour />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image
          data-speed=".8"
          src={content.full_image_1}
          alt={`${content.title} - Full View`}
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">
                  Daring Colors
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{content.intro}</p>
                <p>
                  Each case study gets its own identity through the styling options in the custom content
                  management system. The styling options are pre-defined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details thumb */}
      <div id="xyz" className="tp-project-details-3-thumb mb-120">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-thumb-box">
                <Image
                  data-speed=".8"
                  src={content.full_image_2}
                  alt={`${content.title} - Detail View`}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">
                  The Goal
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{content.goal}</p>
                <p>
                  Each case study gets its own identity through the styling options in the custom content
                  management system. The styling options are pre-defined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details thumb */}
      <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-thumb-box mb-30">
                <Image
                  className="w-100"
                  src={content.thumb_images[0]}
                  alt={`${content.title} - Thumbnail 1`}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-thumb-box mb-30">
                <Image
                  className="w-100"
                  src={content.thumb_images[1]}
                  alt={`${content.title} - Thumbnail 2`}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">
                  The Goal
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{content.goal}</p>
                <p>
                  Each case study gets its own identity through the styling options in the custom content
                  management system. The styling options are pre-defined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* slider images area */}
      <div className="pd-visual-slider-wrap pb-40">
        <Swiper
          {...slider_setting}
          modules={[Autoplay]}
          className="swiper-container pd-visual-slider-active"
        >
          {content.slider_images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="pd-visual-slider-thumb fix">
                <Image
                  src={imgSrc}
                  alt={`${content.title} - Visual ${index + 1}`}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider images area */}
    </>
  );
}