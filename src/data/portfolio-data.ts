// src/data/portfolio-data.ts
import { StaticImageData } from "next/image";

// Import all project images
import web_1 from "@/assets/img/inner-project/portfolio-details-3/w1.png" ;
import web_2 from "@/assets/img/inner-project/portfolio-details-3/w3.png";
import web_3 from "@/assets/img/inner-project/portfolio-details-3/w2.png";
import web_4 from "@/assets/img/inner-project/portfolio-details-3/w4.png";
import web_5 from "@/assets/img/inner-project/portfolio-details-3/w5.jpg";

import ai_1 from "@/assets/img/inner-project/portfolio-details-3/business-ai-automation.png";
import ai_2 from "@/assets/img/inner-project/portfolio-details-3/business_ai_automation.png";
import ai_3 from "@/assets/img/inner-project/portfolio-details-3/customer_ai_automation.png";
import ai_4 from "@/assets/img/inner-project/portfolio-details-3/medical_ai_automation.png";
import ai_5 from  "@/assets/img/inner-project/portfolio-details-3/ai5.png";

import design_1 from "@/assets/img/inner-project/portfolio-details-3/cr4.png";
import design_2 from "@/assets/img/inner-project/portfolio-details-3/cr3.png";
import design_3 from "@/assets/img/inner-project/portfolio-details-3/cr5.png";
import design_4 from "@/assets/img/inner-project/portfolio-details-3/cr.png";
import design_5 from "@/assets/img/inner-project/portfolio-details-3/cr22.png";

import digital_1 from "@/assets/img/inner-project/portfolio-details-3/dg1.png";
import digital_2 from "@/assets/img/inner-project/portfolio-details-3/dg2.png";
import digital_3 from "@/assets/img/inner-project/portfolio-details-3/dg3.png";
import digital_4 from "@/assets/img/inner-project/portfolio-details-3/dg4.png";
import digital_5 from "@/assets/img/inner-project/portfolio-details-3/dg5.png";

import mobile_1 from "@/assets/img/inner-project/portfolio-details-3/mb1.jpg";
import mobile_2 from "@/assets/img/inner-project/portfolio-details-3/mb2.png";
import mobile_3 from "@/assets/img/inner-project/portfolio-details-3/mb3.png";
import mobile_4 from "@/assets/img/inner-project/portfolio-details-3/mb4.png";
import mobile_5 from "@/assets/img/inner-project/portfolio-details-3/mb5.png";

import ebook_1 from "@/assets/img/inner-project/portfolio-details-3/e1.jpg";
import ebook_2 from "@/assets/img/inner-project/portfolio-details-3/e2.png";
import ebook_3 from "@/assets/img/inner-project/portfolio-details-3/e2.png";
import ebook_4 from "@/assets/img/inner-project/portfolio-details-3/e3.png";
import ebook_5 from "@/assets/img/inner-project/portfolio-details-3/e4.png";

// Category thumbnails (for main portfolio page)
import p_img_1 from "@/assets/img/home-01/project/fast.png";
import p_img_2 from "@/assets/img/home-01/project/ai.png";
import p_img_3 from "@/assets/img/home-01/project/design.png";
import p_img_4 from "@/assets/img/home-01/project/digital.png";
import p_img_5 from "@/assets/img/home-01/project/mobile.jpg";
import p_img_6 from "@/assets/img/home-01/project/ebook.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
  category: string;
  year: number;
  client?: string;
  technologies?: string[];
  link?: string;
}

export interface PortfolioCategory {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  year: number;
  category: string;
  projects: Project[];
}

// Complete portfolio data with all projects for each category
export const portfolioData: PortfolioCategory[] = [
  {
    id: 1,
    title: "Web Development",
    thumbnail: p_img_1,
    year: 2025,
    category: "Development",
    projects: [
      {
        id: 101,
        title: "iMAN Movement",


        description: "The official website of iMAN — a global faith-based movement empowering men to live with purpose, integrity, and courage. It serves as a digital hub for inspiration, discipleship, and community, offering devotionals, events, leadership resources, and actionable pathways to personal and spiritual growth.",
        img: web_1,
        category: "Web Development",
        year: 2025,
        client: "Verita Inc",
        technologies: ["Next.js", "React", "Nest.js", "Stripe", "MongoDB"],
        link: "https://example.com/project1"
      },
      {
        id: 102,
        title: "SAIA ",
        description: "SAIA is a mission-driven internship platform connecting students and young professionals with values-based opportunities in humanitarian aid, international cooperation, and community development—primarily serving bilingual (English/French) audiences in Canada and partner regions.",
        img: web_2,
        category: "Web Development",
        year: 2025,
        client: "TechFlow",
        technologies: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
        link: "https://example.com/project2"
      },
      {
        id: 103,
        title: "SWITTE",
        description: "This strongly suggests that this is a website for a luxury or high-performance automotive business. It could be a dealership, a custom car shop, a performance parts retailer, or a combination of these. The focus is clearly on premium vehicles and an upscale customer experience.",
        img: web_3,
        category: "Web Development",
        year: 2025,
        client: "Automotive Core ltd.",
        technologies: ["Vue js", ".net", "My Sql", "AWS"],
        link: "https://example.com/project3"
      },
      {
        id: 104,
        title: "GooWell",
        description: "This strongly suggests that this is a website for a health and wellness brand, specifically focused on over-the-counter remedies or supplements. The primary product highlighted is for treating hemorrhoids but there's also a mention of immunity, indicating a broader health focus.",
        img: web_4,
        category: "Web Development",
        year: 2025,
        client: "Cosmetics Hub",
        technologies: ["Next.js", "Node js", "Mongo Db", "Prisma"],
        link: "https://example.com/project4"
      },
      {
        id: 105,
        title: "Fast Print Guys",
        description: "A platform where user can calculate book price select binding options, interior color, exterior color, user can upload their book design their book cover and can select shipping service accordingly.",
        img: web_5,
        category: "Web Development",
        year: 2024,
        client: "Fast Print Guys",
        technologies: ["Next.js", "Python", "Django Rest Framework", "My sql", "AWS"],
        link: "https://example.com/project5"
      }
    ]
  },
  {
    id: 2,
    title: "AI Automation and Chatbots",
    thumbnail: p_img_2,
    year: 2025,
    category: "AI & ML",
    projects: [
      {
        id: 201,
        title: "Customer Support Chatbot",
        description: "Intelligent AI-powered chatbot that handles customer inquiries 24/7. Features natural language processing, sentiment analysis, and seamless handoff to human agents when needed.",
        img: ai_1,
        category: "AI Automation",
        year: 2025,
        client: "Customer Support",
        technologies: ["OpenAI GPT-4", "LangChain", "Python", "FastAPI"],
        link: "https://example.com/ai1"
      },
      {
        id: 202,
        title: "Workflow Automation for Scaling Teams",
        description: "AutoFlow is a SaaS platform designed to help businesses automate complex workflows, eliminate manual tasks, and scale operations efficiently. With intuitive dashboards, real-time analytics, and proven results (like 37% faster processes), it empowers teams to focus on growth — not busywork. Ideal for startups and enterprises seeking smarter, scalable automation.",
        img: ai_2,
        category: "AI Automation",
        year: 2025,
        client: "Marketing Pro",
        technologies: ["Claude AI", "Python", "SendGrid", "MongoDB"],
        link: "https://example.com/ai2"
      },
      {
        id: 203,
        title: "Voice Assistant Integration",
        description: "Custom voice assistant for smart home devices with multi-language support, context awareness, and integration with IoT devices.",
        img: ai_3,
        category: "AI Automation",
        year: 2025,
        client: "Sounds Inc",
        technologies: ["Whisper API", "ElevenLabs", "Python", "MQTT"],
        link: "https://example.com/ai3"
      },
      {
        id: 204,
        title: "Document Processing AI",
        description: "Automated document extraction and processing system that reads, categorizes, and extracts key information from invoices, contracts, and forms.",
        img: ai_4,
        category: "AI Automation",
        year: 2025,
        client: "DocumentFlow",
        technologies: ["GPT-4 Vision", "Anthropic Claude", "Python", "OCR"],
        link: "https://example.com/ai4"
      },
      {
        id: 205,
        title: "Social Media Bot",
        description: "Intelligent social media management bot that schedules posts, responds to comments, analyzes engagement, and generates content suggestions.",
        img: ai_5,
        category: "AI Automation",
        year: 2024,
        client: "SocialBoost",
        technologies: ["OpenAI", "Twitter API", "Python", "Redis"],
        link: "https://example.com/ai5"
      }
    ]
  },
  {
    id: 3,
    title: "UI/UX & Creative Designing",
    thumbnail: p_img_3,
    year: 2025,
    category: "Design",
    projects: [
      {
        id: 301,
        title: "3D Design Interface",
        description: "A conceptual UI design for a next-gen 3D home design platform, blending architectural visualization with intuitive material selection, lighting controls, and landscape planning tools. Designed in dark mode with glowing accents to highlight interactivity and spatial depth — ideal for creative portfolios showcasing UI innovation and immersive digital experiences.",
        img: design_1,
        category: "UI/UX Design",
        year: 2025,
        client: "Digital Architecture Design",
        technologies: ["Figma", "Adobe XD", "Protopie"],
        link: "https://example.com/design1"
      },
      {
        id: 302,
        title: "Vehicle Monitoring Interface",
        description: "A speculative UI concept for “ParkGuard,” a smart vehicle monitoring and parking management system. Designed in sleek dark mode with glowing red and purple accents, it visualizes real-time car status, occupancy alerts, and performance analytics through an immersive isometric view — ideal for showcasing advanced dashboard design, spatial UI, and data-driven user experiences in a creative portfolio.",
        img: design_2,
        category: "Brand Design",
        year: 2025,
        client: "Engine TechStart",
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
        link: "https://example.com/design2"
      },
      {
        id: 303,
        title: "SkillHire",
        description: "A conceptual UI design for “SkillHire,” a modern platform connecting companies with top tech talent. Featuring a bold green aesthetic, responsive layouts, and strategic data highlights (“124k Applicants”), the design emphasizes clarity, trust, and action — ideal for showcasing professional UI/UX storytelling, visual hierarchy, and conversion-focused layouts in a creative portfolio.",
        img: design_3,
        category: "UI/UX Design",
        year: 2025,
        client: "Skill Learner",
        technologies: ["Figma", "Hotjar", "Google Analytics"],
        link: "https://example.com/design3"
      },
      {
        id: 304,
        title: "Paynova Pitch Deck",
        description: "A sleek, professional pitch deck designed for Paynova — a fintech startup focused on transaction processing and investment management. Using a dark theme with vibrant orange highlights, the deck visually communicates growth metrics, market opportunity, team expertise, and strategic vision through clean layouts, impactful data viz, and consistent branding — ideal for showcasing presentation design skills in a creative portfolio.",
        img: design_4,
        category: "UI/UX Design",
        year: 2025,
        client: "Fintech",
        technologies: ["Figma", "Zeroheight", "React Native"],
        link: "https://example.com/design4"
      },
      {
        id: 305,
        title: "Havenly",
        description: "A comprehensive brand identity system for “Havenly,” featuring a minimalist aesthetic with a calming navy and blue palette. The design extends seamlessly across packaging, stationery, digital interfaces, and promotional materials — showcasing strategic consistency, clean typography, and thoughtful application of logo, color, and layout for a premium, trustworthy brand experience.",
        img: design_5,
        category: "Brand Design",
        year: 2024,
        client: "Figma",
        technologies: ["Adobe Creative Suite", "Blender"],
        link: "https://example.com/design5"
      }
    ]
  },
  {
    id: 4,
    title: "Digital Growth Strategist",
    thumbnail: p_img_4,
    year: 2025,
    category: "Marketing",
    projects: [
      {
        id: 401,
        title: "Power Marketing Dashboard",
        description: "A sleek, dark-mode marketing dashboard designed to track, visualize, and optimize digital campaign performance. Features real-time KPIs like revenue, conversions, user growth, and top-selling regions — empowering marketers to make data-driven decisions. Ideal for showcasing how analytics tools drive ROI, improve customer targeting, and measure cross-channel success in a digital marketing context.",
        img: digital_1,
        category: "Digital Marketing",
        year: 2025,
        client: "E-Commerce Brand",
        technologies: ["SEMrush", "Ahrefs", "Google Analytics", "Search Console"],
        link: "https://example.com/digital1"
      },
      {
        id: 402,
        title: "Marketing Performance Hub",
        description: "A real-time digital marketing dashboard visualizing key KPIs—traffic, conversions, revenue, and engagement—to drive ROI-focused optimization and data-driven campaign decisions.",
        img: digital_2,
        category: "Digital Marketing",
        year: 2025,
        client: "Marketing",
        technologies: ["Meta Business Suite", "Hootsuite", "Canva"],
        link: "https://example.com/digital2"
      },
      {
        id: 403,
        title: "Facebook Ads Performance Dashboard",
        description: "A Facebook Ads performance dashboard tracking reach, spend, conversions, and cost per result — enabling data-driven optimization and ROI-focused campaign decisions.",
        img: digital_3,
        category: "Digital Marketing",
        year: 2025,
        client: "Facebook ads",
        technologies: ["HubSpot", "WordPress", "Google Analytics"],
        link: "https://example.com/digital3"
      },
      {
        id: 404,
        title: "SEO and digital marketing",
        description: "An SEO keyword gap dashboard that identifies untapped, high-opportunity search terms by analyzing competitor overlap — driving smarter content and organic growth strategy.",
        img: digital_4,
        category: "Digital Marketing",
        year: 2025,
        client: "SEO",
        technologies: ["Google Ads", "Meta Ads Manager", "Unbounce"],
        link: "https://example.com/digital4"
      },
      {
        id: 405,
        title: "E-commerce Performance Tracking for Digital Marketers",
        description: "A real-time e-commerce dashboard tracking sales, conversions, and customer behavior — enabling data-driven decisions to boost revenue and optimize marketing ROI.",
        img: digital_5,
        category: "Digital Marketing",
        year: 2024,
        client: "E-Learning Platform",
        technologies: ["Klaviyo", "Mailchimp", "Zapier"],
        link: "https://example.com/digital5"
      }
    ]
  },
  {
    id: 5,
    title: "Android & iOS Development",
    thumbnail: p_img_5,
    year: 2025,
    category: "Mobile",
    projects: [
      {
        id: 501,
        title: "Harmony",
        description: "A sleek, intuitive mobile music app interface featuring playlists, player controls, artist profiles, and personalized discovery — designed for seamless user experience across iOS & Android.",
        img: mobile_1,
        category: "Mobile Development",
        year: 2025,
        client: "Musico",
        technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
        link: "https://example.com/mobile1"
      },
      {
        id: 502,
        title: "HomeGo",
        description: "A clean, user-friendly real estate app interface for browsing listings, viewing 3D property details, and booking viewings — optimized for iOS/Android mobile experiences.",
        img: mobile_2,
        category: "Mobile Development",
        year: 2025,
        client: "Construction Corporations",
        technologies: ["Flutter", "Google Maps", "Stripe", "Firebase"],
        link: "https://example.com/mobile2"
      },
      {
        id: 503,
        title: "Take Control Financially",
        description: "A sleek, dark-mode finance app interface for tracking spending, managing budgets, and visualizing income — designed for intuitive mobile financial control and user engagement.",
        img: mobile_3,
        category: "Mobile Development",
        year: 2025,
        client: "EduLingo",
        technologies: ["React Native", "TensorFlow", "SQLite", "AWS"],
        link: "https://example.com/mobile3"
      },
      {
        id: 504,
        title: "Rentcars",
        description: "A user-friendly car rental app interface for browsing vehicles, comparing deals, and booking with flexible pickup/return options — designed for seamless mobile travel planning.",
        img: mobile_4,
        category: "Mobile Development",
        year: 2025,
        client: "Rentals",
        technologies: ["Swift", "Kotlin", "AVFoundation", "Core Data"],
        link: "https://example.com/mobile4"
      },
      {
        id: 505,
        title: "USAF Academy Real Estate",
        description: "A clean, intuitive real estate app for browsing homes, filtering by specs, and saving searches — optimized for mobile-first property discovery and seamless user navigation.",
        img: mobile_5,
        category: "Mobile Development",
        year: 2024,
        client: "USAF Ltd.",
        technologies: ["Flutter", "Plaid API", "SQLite", "Charts"],
        link: "https://example.com/mobile5"
      }
    ]
  },
  {
    id: 6,
    title: "E-Book Platform",
    thumbnail: p_img_6,
    year: 2024,
    category: "Platform",
    projects: [
      {
        id: 601,
        title: "Digital Publishing Platform",
        description: "Complete e-book publishing and distribution platform with author tools, reader app, DRM protection, and royalty management system.",
        img: ebook_1,
        category: "E-Book Platform",
        year: 2024,
        client: "BookTech",
        technologies: ["Next.js", "EPUB.js", "Stripe", "AWS S3"],
        link: "https://example.com/ebook1"
      },
      {
        id: 602,
        title: "Interactive Textbook Platform",
        description: "Educational platform for interactive digital textbooks with embedded videos, quizzes, annotations, and progress tracking for students.",
        img: ebook_2,
        category: "E-Book Platform",
        year: 2024,
        client: "EduBooks",
        technologies: ["React", "PDF.js", "WebRTC", "MongoDB"],
        link: "https://example.com/ebook2"
      },
      {
        id: 603,
        title: "Audiobook Streaming Service",
        description: "Audiobook streaming platform with offline downloads, bookmarks, variable playback speed, and social sharing features.",
        img: ebook_3,
        category: "E-Book Platform",
        year: 2024,
        client: "AudioLib",
        technologies: ["React Native", "AWS CloudFront", "Redis", "PostgreSQL"],
        link: "https://example.com/ebook3"
      },
      {
        id: 604,
        title: "Comic Book Reader",
        description: "Digital comic book platform with panel-by-panel reading mode, collections management, and support for multiple comic book formats.",
        img: ebook_4,
        category: "E-Book Platform",
        year: 2024,
        client: "ComicVerse",
        technologies: ["React", "Canvas API", "IndexedDB", "Webpack"],
        link: "https://example.com/ebook4"
      },
      {
        id: 605,
        title: "Magazine Subscription Platform",
        description: "Digital magazine platform with interactive layouts, subscription management, push notifications for new issues, and offline reading.",
        img: ebook_5,
        category: "E-Book Platform",
        year: 2024,
        client: "MagazineHub",
        technologies: ["Next.js", "Stripe", "Firebase", "PWA"],
        link: "https://example.com/ebook5"
      }
    ]
  }
];

// Helper function to get category by ID
export function getCategoryById(id: number): PortfolioCategory | undefined {
  return portfolioData.find(category => category.id === id);
}

// Helper function to get all projects for a category
export function getProjectsByCategoryId(categoryId: number): Project[] {
  const category = getCategoryById(categoryId);
  return category?.projects || [];
}