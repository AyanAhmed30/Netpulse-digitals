import React, { useState, useEffect, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// images
<<<<<<< HEAD
import s11 from "@/assets/img/inner-service/service/s111.jpg";
import s22 from "@/assets/img/inner-service/service/s22.png";
import s33 from "@/assets/img/inner-service/service/s33.png";
import s44 from "@/assets/img/inner-service/service/s445.jpg";
=======
import s11 from "@/assets/img/inner-service/service/s11.png";
import s22 from "@/assets/img/inner-service/service/s221.jpeg";
import s33 from "@/assets/img/inner-service/service/s331.jpeg";
import s44 from "@/assets/img/inner-service/service/s44.png";
>>>>>>> 085e8fdaa2fee65226ab4edf14eadba6c5de98dd
import s55 from "@/assets/img/inner-service/service/s55.png";
import s66 from "@/assets/img/inner-service/service/s66.png";

import sv_2 from "@/assets/img/inner-service/sercive-details/seo1.png";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

interface ServiceData {
  // Hero
  heroTitle: string;
  heroSubtext: string;
  heroCTA1: string;
  heroCTA2: string;

  // Problems
  problemsTitle: string;
  problemsIntro?: string;
  modernProblems: string[];

  // Solutions
  solutionsTitle: string;
  solutionsIntro?: string;
  solutions: string[];

  // Features
  featuresTitle: string;
  featuresIntro?: string;
  features: string[];

  // Process
  processTitle: string;
  processSteps: { step: string; title: string; desc: string }[];

  // Why Choose Us
  whyChooseTitle: string;
  whyChooseItems: string[];

  // Testimonials
  testimonialsTitle: string;
  testimonials: { quote: string; author: string }[];

  // Final CTA
  finalCTATitle: string;
  finalCTASubtext: string;
  finalCTAPrimary: string;
  finalCTASecondary: string;
  microtrustLine: string;

  // Sidebar
  sidebarTitle: string;
  rightDescription: string;
  callToActionLinkText: string;

  // New Sidebar Content
  faq: { q: string; a: string }[];
  technologies: string[];
  industries: string[];
  deliverables: string[];
}

const serviceData: Record<string, ServiceData> = {
  "digital-marketing": {
    heroTitle: "Digital Marketing That Delivers Real Growth",
    heroSubtext:
      "From social media to SEO, paid ads, funnels, and content strategy — Netpulse Digital helps businesses across the USA, UK, Canada, and Australia attract more customers and convert more leads with data-driven marketing solutions.",
    heroCTA1: "Get a Free Marketing Strategy Call",
    heroCTA2: "Visit Our Portfolio",

    problemsTitle: "Why Most Businesses Fail to Grow Online",
    problemsIntro:
      "In today's digital landscape, businesses face significant challenges:",
    modernProblems: [
      " No Clear Marketing Strategy – Businesses jump between trends without a structured growth plan.",
      " Low Website Traffic – Search engines and social media algorithms don’t favor weak content.",
      " Poor Lead Quality – Wrong targeting means wasted budgets and no real conversions.",
      " Inconsistent Branding & Messaging – Customers don’t trust brands that lack clarity and consistency.",
      " Ineffective Social Media Presence – Posting is not enough — businesses need strategy + engagement + content psychology.",
      " No Data Tracking or Analytics – Decisions based on guesswork hurt revenue and prevent scaling.",
      " Overspending on Ads With No ROI – Without optimization, ad budgets burn fast and return nothing.",
    ],

    solutionsTitle: "Smart, Scalable Marketing Solutions That Actually Work",
    solutionsIntro:
      "We provide comprehensive solutions that directly address these challenges:",
    solutions: [
      " Clear Marketing Strategy & Roadmap – We create a customized blueprint aligned with your business goals, audience, and budget.",
      " SEO + Keyword Strategy for High-Intent Traffic – Rank higher, attract better leads, and improve organic visibility.",
      " Advanced Targeting for Quality Leads – We refine your audience using industry data, competitor analysis, and buyer psychology.",
      " Content That Builds Trust & Engagement – From design to messaging, we craft content that converts audiences into buyers.",
      " Analytics, Tracking & Performance Reporting – We use data — not guesswork — to optimize every campaign for growth.",
      " High-ROI Advertising Campaigns – Our Google, Facebook, and multi-platform ad strategies lower costs and increase conversions.",
      " Full Transparency & Communication – You’re updated at every step — no confusion, no black-box marketing.",
    ],

    featuresTitle: "Everything Your Business Needs to Grow Online",
    features: [
      " Social Media Marketing – Strategic posting, content creation, engagement, and growth systems.",
      " Paid Advertising (Facebook, Google, TikTok, Instagram) – High-ROI ad campaigns with weekly optimization.",
      " Search Engine Optimization (SEO) – On-page, technical, and local SEO to improve rankings and traffic.",
      " Content Creation & Brand Messaging – Premium content that builds trust and drives customer action.",
      " Email Marketing & Automation – Personalized workflows that nurture leads and increase lifetime value.",
    ],

    processTitle: "A Proven Process That Scales With You",
    processSteps: [
<<<<<<< HEAD
      {
        step: "",
        title: "Discovery & Audit",
        desc: "We analyze your current digital presence, competitors, and opportunities.",
      },
      {
        step: "",
        title: "Strategy & Planning",
        desc: "We create a personalized, data-driven strategy tailored to your industry.",
      },
      {
        step: "",
        title: "Execution & Optimization",
        desc: "Campaigns, content, SEO, ads, and funnels — managed and optimized weekly.",
      },
      {
        step: "",
        title: "Growth & Scaling",
        desc: "Once results are stable, we scale budgets, expand campaigns, and improve ROI.",
      },
=======
      { step: "01", title: "Discovery & Audit", desc: "We analyze your digital presence and opportunities." },
      { step: "02", title: "Strategy & Planning", desc: "A personalized, data-driven roadmap for your industry." },
      { step: "03", title: "Execution & Optimization", desc: "Campaigns and content managed and optimized weekly." },
      { step: "04", title: "Growth & Scaling", desc: "Scaling budgets and improving ROI for long-term success." },
>>>>>>> 085e8fdaa2fee65226ab4edf14eadba6c5de98dd
    ],

    whyChooseTitle: "Why Choose Netpulse Digital",
    whyChooseItems: [
      "Performance-Driven Team – Everything we do aligns with your growth goals.",
      "Real Transparency – Clear communication, weekly updates, and honest reporting.",
      "Global Expertise – Delivering results across USA, UK, Canada & Australia.",
      "Creative + Analytical Approach – Beautiful content backed by data and strategy.",
      "Affordable, Scalable Solutions – Plans for startups, small businesses, and growing brands.",
      "Long-Term Growth Partner – We care about your business as much as you do.",
    ],

    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      {
        quote:
          "Netpulse Digital rebuilt our entire marketing system — our traffic increased, leads improved, and our brand finally feels consistent.",
        author: "— Michael • USA",
      },
      {
        quote:
          "Their ad strategies helped us cut costs while doubling conversions.",
        author: "— Sophie • UK",
      },
    ],

    finalCTATitle: "Ready to Grow Your Business With Smart Digital Marketing?",
    finalCTASubtext:
      "Let’s create a marketing system that attracts the right audience, boosts engagement, and drives consistent growth.",
    finalCTAPrimary: "Get a Free Marketing Audit",
    finalCTASecondary: "Contact Our Team",
    microtrustLine:
      "We respond within 24 hours. No obligations — just insights.",

    sidebarTitle: "Digital Marketing",
    rightDescription:
      "Our digital marketing services transform your brand into an online dominant force. We use a data-driven approach that delivers guaranteed results and aligns with your business goals.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "How long until I see results?", a: "Most SEO campaigns see movement in 3-6 months, while PPC/Ads deliver instant traffic." },
      { q: "Which platform is best for my business?", a: "We analyze your audience to determine if Google, Meta, or TikTok will drive the highest ROI." }
    ],
    technologies: ["Google Ads", "Meta Business Suite", "SEMRush", "Google Analytics 4", "Mailchimp"],
    industries: ["E-commerce", "SaaS", "Real Estate", "Healthcare", "Education"],
    deliverables: ["Comprehensive Marketing Roadmap", "Weekly Performance Reports", "Optimized Ad Campaigns", "High-Converting Content", "Monthly Strategy Reviews"]
  },
  "creative-design": {
    heroTitle:
      "Creative Designs That Build Trust, Strengthen Brands & Drive Results",
    heroSubtext:
      "From logos and brand identity systems to social media design, UI/UX, and complete visual branding — Netpulse Digital helps businesses worldwide create strong, memorable designs that connect with customers and inspire action.",
    heroCTA1: "Get a Free Brand Consultation",
    heroCTA2: "View Our Design Work",

    problemsTitle:
      "Most Businesses Struggle With Weak Visual Identity — Here’s Why",
    problemsIntro: "",
    modernProblems: [
      " Outdated or Unprofessional Branding – Generic or outdated designs make businesses look unreliable.",
      " Inconsistent Brand Visuals Across Platforms – Mismatched colors, fonts, and layouts confuse customers and reduce trust.",
      " Low-Quality Logos & Graphics – Cheap designs don’t scale well and fail to represent the brand’s value.",
      " No Clear Brand Messaging or Visual Story – Businesses struggle to communicate who they are and why they matter.",
      " Poor Social Media Visuals – Low-engagement posts caused by weak design, wrong colors, and unclear layouts.",
      " Confusing UI/UX That Pushes Users Away – Bad user experience leads to low conversions and high bounce rates.",
    ],

    solutionsTitle:
      "Design Solutions That Elevate Your Brand & Boost Conversions",
    solutionsIntro: "",
    solutions: [
      "Strategic, Psychology-Driven Branding – We create visuals that influence trust, emotion, and buying behavior.",
      "Professional Logo & Identity Systems – Every logo, color palette, and typeface is crafted to fit your audience and industry.",
      "Complete Brand Guidelines – We deliver full guidelines to keep your brand consistent across all platforms.",
      "High-Impact Social Media Design – Scroll-stopping designs optimized for engagement and storytelling.",
      "UI/UX Design for Websites & Apps – Beautiful and intuitive product designs that improve user experience and conversions.",
      "Fast Turnaround With Premium Quality – Top-tier design work, delivered quickly and efficiently.",
    ],

    featuresTitle:
      "Everything Your Brand Needs to Look Professional & Powerful",
    features: [
      "Logo Design & Brand Identity – Unique, memorable, scalable logos designed for long-term brand success.",
      "Full Brand Kits & Guidelines – Color systems, typography, icons, patterns, brand voice — everything packaged beautifully.",
      "Social Media Design – Templates, post graphics, reels covers, stories, ads & banners.",
      "UI/UX Design (Web & App) – Wireframes, prototypes, high-fidelity designs built for clarity and conversion.",
    ],

    processTitle: "Our Creative Process (Designed for Clarity & Growth)",
    processSteps: [
      { step: "01", title: "Discovery", desc: "We learn your goals and brand personality." },
      { step: "02", title: "Direction", desc: "We create palettes, and visual direction." },
      { step: "03", title: "Refinement", desc: "We craft strategic designs based on feedback." },
      { step: "04", title: "Activation", desc: "Professional delivery so you launch with confidence." },
    ],

    whyChooseTitle: "Why Brands Choose Our Creative Team",
    whyChooseItems: [
      "Clean, Modern, High-Quality Designs – Every design is crafted with premium aesthetic standards.",
      "Brand Psychology Taken Seriously – Every color, shape, layout, and font is chosen with purpose.",
      "Industry & Global Expertise – Serving clients in USA, UK, Canada, and Australia.",
      "Dedicated Creative Team – Experienced designers specializing in branding, UI/UX, and visual marketing.",
      "Fast Communication & Revisions – We keep the process smooth, friendly, and highly efficient.",
      "Fully Custom Work — Never Templates – Your brand deserves originality, not recycled designs.",
    ],

    testimonialsTitle: "What Clients Say About Our Designs",
    testimonials: [
      {
        quote:
          "Our brand identity finally feels premium. Their design work transformed how customers see us.",
        author: "— Olivia • UK",
      },
      {
        quote: "High-quality, clean, creative — exactly what our brand needed.",
        author: "— Rebecca • Australia",
      },
    ],

    finalCTATitle:
      "Ready to Elevate Your Brand With Stunning, Strategic Design?",
    finalCTASubtext:
      "Let’s bring your vision to life with creative solutions that boost trust, recognition, and conversions.",
    finalCTAPrimary: "Get a Free Brand Consultation",
    finalCTASecondary: "View Our Design Portfolio",
    microtrustLine: "No commitment — just expert insights to grow your brand.",

    sidebarTitle: "Creative Design",
    rightDescription:
      "Our creative design services create memorable visual experiences that distinguish your brand from the competition. We provide the perfect blend of creativity and strategy.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "Do I get full ownership of the designs?", a: "Yes, once the project is completed and paid, you own all final raw source files and copyrights." },
      { q: "What is your revision policy?", a: "We offer unlimited revisions until you are 100% satisfied with the brand identity." }
    ],
    technologies: ["Adobe Illustrator", "Figma", "Photoshop", "After Effects", "Blender"],
    industries: ["Startups", "Corporate", "Fashion", "Tech Brands", "Personal Brands"],
    deliverables: ["Brand Identity Guidelines", "Primary & Secondary Logos", "Social Media Templates", "UI/UX Prototypes", "Ready-to-Print Assets"]
  },
  "web-development": {
    heroTitle: "High-Performance Websites Built to Convert, Scale & Impress",
    heroSubtext:
      "We design and develop modern, fast, mobile-optimized websites that don’t just look good — they turn visitors into customers. Trusted by businesses across the USA, UK, Canada, and Australia, we build digital experiences that fuel long-term growth.",
    heroCTA1: "Start Your Website Project",
    heroCTA2: "View Portfolio",

    problemsTitle: "Why Most Business Websites Fail to Convert",
    problemsIntro: "",
    modernProblems: [
      " Outdated Designs That Don’t Build Trust – Customers judge your brand within seconds — old layouts instantly reduce credibility.",
      " Slow Loading Speed – Slow pages kill conversions and hurt Google rankings.",
      " Poor Mobile Experience – Over 70% of users browse on mobile — most websites still aren’t optimized.",
      " Confusing Navigation & Bad UX – Users leave instantly if they can’t find what they need.",
      " No Clear Call-To-Action (CTA) – Visitors don’t know what to do → fewer leads → fewer sales.",
      " Weak SEO Structure – Websites that ignore SEO never attract organic traffic.",
      " Built With Cheap Templates – Template-based sites lack uniqueness, security, and long-term scalability.",
    ],

    solutionsTitle:
      "Strategic Web Development That Delivers Real Business Growth",
    solutionsIntro: "",
    solutions: [
      "Custom, Modern & Conversion-Focused Designs – No templates — every website is built uniquely to match your brand and goals.",
      "Lightning-Fast Performance – Optimized code, image compression, caching, and modern frameworks like Next.js.",
      "100% Mobile-Responsive Builds – Perfect across all devices — phones, tablets, desktops.",
      "Clear CTA & Lead Capture Systems – Designed to generate more calls, messages, and sales.",
      "SEO-Ready Architecture – Clean code, schema setup, meta tags, optimized URL structure.",
      "Analytics + Tracking Integration – Google Analytics, Search Console, Facebook Pixel, CRM/Webhooks.",
      "Secure & Scalable Frameworks – Built for long-term growth — not quick fixes.",
    ],

    featuresTitle: "Everything You Need for a High-Performing Website",
    features: [
      "Custom Website Development – Tailored websites built from scratch based on your brand and business goals.",
      "UI/UX Design – User-centered interfaces that improve engagement and reduce bounce rates.",
      "Next.js / React Development – Modern, fast, SEO-friendly frameworks for long-term scalability.",
      "Ecommerce Development (Shopify / WooCommerce) – Conversion-driven online stores with powerful features.",
      "Landing Pages & Funnels – High-converting pages designed to capture leads and drive sales.",
      "Responsive Design & Optimization – Perfect display across mobile, tablet, and desktop.",
    ],

    processTitle: "A Smooth & Transparent Process From Start to Finish",
    processSteps: [
      { step: "01", title: "Planning", desc: "Understand your audience and technical goals." },
      { step: "02", title: "UI/UX Design", desc: "We craft interfaces that enhance conversions." },
      { step: "03", title: "Development", desc: "Building your site using modern technologies." },
      { step: "04", title: "Support", desc: "Performance testing and ongoing maintenance." },
    ],

    whyChooseTitle:
      "A Team Dedicated to Quality, Performance & Long-Term Growth",
    whyChooseItems: [
      "Modern Tech Stack (Next.js, React, WordPress, Shopify)",
      "Conversion-Focused, Not Just Design-Focused",
      "Transparent Communication & Fast Delivery",
      "Experience Across USA, UK, Canada & Australia",
      "Affordable Options for Small Businesses and Startups",
      "Long-Term Maintenance & Marketing Support",
    ],

    testimonialsTitle: "What Clients Say About Our Web Development Work",
    testimonials: [
      {
        quote:
          "Our new website increased leads by over 200% in the first month. The UX improvements alone made a huge difference.",
        author: "— Daniel, USA",
      },
      {
        quote:
          "Clean, fast, and perfectly aligned with our brand. Netpulse Digital exceeded our expectations.",
        author: "— Clara, UK",
      },
    ],

    finalCTATitle: "Ready to Build a Website That Grows Your Business?",
    finalCTASubtext:
      "Let’s create a high-performing website designed to generate leads, drive sales, and elevate your brand.",
    finalCTAPrimary: "Start Your Website Project",
    finalCTASecondary: "Request a Free Consultation",
    microtrustLine:
      "We reply within 24 hours. No obligations — just expert insights.",

    sidebarTitle: "Web Development",
    rightDescription:
      "Our web development services create powerful, scalable solutions that meet your business needs and provide seamless user experiences. Quality and performance are our priorities.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "Will my website be mobile-friendly?", a: "Absolutely. 100% of our sites are optimized for mobile, tablet, and desktop viewports." },
      { q: "Do you provide hosting and maintenance?", a: "Yes, we offer fully managed high-speed hosting and ongoing technical support." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Shopify"],
    industries: ["E-commerce", "Tech Startups", "Professional Services", "Portfolio Sites"],
    deliverables: ["Custom Source Code", "Mobile-Responsive Website", "Admin Control Panel", "SEO Setup & Indexing", "Deployment Documentation"]
  },
  "ai-automation": {
    heroTitle:
      "AI Automations & Chatbots That Save Time, Reduce Costs & Scale Your Business",
    heroSubtext:
      "From smart AI chatbots to workflow automation, CRM integrations, and GPT-powered assistants — Netpulse Digital helps businesses automate repetitive tasks, improve customer experience, and operate more efficiently across the USA, UK, Canada, and Australia.",
    heroCTA1: "Get a Free Automation Audit",
    heroCTA2: "Visit Our AI Portfolio",

    problemsTitle:
      "Businesses Lose Time & Money Every Day — Often Without Realizing It",
    problemsIntro: "",
    modernProblems: [
      "Too Many Manual Tasks – Teams waste hours daily on repetitive work that can be automated.",
      "Slow Customer Response Times – Businesses lose leads when they take too long to reply.",
      "Inconsistent Customer Service – No scripts, no structure, no immediate support equals poor customer experience.",
      "High Operational Costs – Human labor is expensive; AI can handle 60–70% of repetitive workflows.",
      "Complicated Tools That Don’t Talk to Each Other – CRMs, emails, forms, social media — all disconnected, causing errors and delays.",
      "Missed Leads Due to Poor Follow-Up – Most leads disappear because businesses don’t respond fast enough.",
      "No Data Organization or Automation Systems – Scattered processes = lost opportunities + slow growth.",
    ],

    solutionsTitle:
      "Smarter Workflows. Faster Response Times. Lower Costs. Happier Customers.",
    solutionsIntro: "",
    solutions: [
      "Custom AI Chatbots (24/7 Support) – Instant replies, lead qualification, FAQs, bookings, sales assistance — all on autopilot.",
      "GPT-Powered Assistants – Advanced AI trained on your business to handle inquiries, support, tasks, and internal operations.",
      "Workflow Automation – We automate tasks like emails, follow-ups, scheduling, reporting, onboarding, and more.",
      "CRM Integration & Lead Routing – AI sends leads to the right team automatically, with instant notifications.",
      "Automated Reports & Insights – Daily, weekly, and monthly performance updates — without manual effort.",
      "Multi-Platform Chatbots – Website, social media, WhatsApp, Messenger, Instagram, and more.",
      "Secure, Scalable AI Systems – Built with enterprise-level frameworks to support long-term growth.",
    ],

    featuresTitle: "What We Can Automate for Your Business",
    features: [
      "AI Chatbots for Websites – 24/7 support, lead capture, FAQs, bookings, sales assistance.",
      "Social Media & Messenger Bots – DM automation for Instagram, Facebook, and WhatsApp.",
      "Custom GPT Assistants – AI trained on your business documents, processes, and knowledge base.",
      "Workflow Automation – Follow-ups, emails, notifications, scheduling, internal tasks.",
      "CRM / Zapier / Make Integrations – Connect all your tools into one powerful, automated system.",
    ],

    processTitle: "Our Proven Automation Workflow",
    processSteps: [
      { step: "01", title: "Audit", desc: "Analyzing your processes for opportunities." },
      { step: "02", title: "AI Design", desc: "Mapping automations and assistant flows." },
      { step: "03", title: "Integration", desc: "Chatbots and workflows built and tested." },
      { step: "04", title: "Launch", desc: "Monitoring and refining and live optimization." },
    ],

    whyChooseTitle: "Your Long-Term AI & Automation Partner",
    whyChooseItems: [
      "Custom Solutions – No Templates – Every automation is fully built around your business needs.",
      "Advanced AI Expertise – GPT models, automation frameworks, cloud integrations & more.",
      "Fast Delivery & Transparent Communication – Clear updates, step-by-step walkthroughs, and fast iterations.",
      "Affordable Solutions for Small Businesses – Enterprise-level automation without enterprise pricing.",
      "Global Experience – Serving businesses in USA, UK, Canada, and Australia.",
      "Continuous Support & Optimization – We improve your AI systems as your business grows.",
    ],

    testimonialsTitle: "What Clients Say About Our AI & Automation Services",
    testimonials: [
      {
        quote:
          "Our customer support workload dropped by 70% after implementing their chatbot. Huge improvement!",
        author: "— Tom, Australia",
      },
      {
        quote:
          "The workflow automations saved us hours each week. Our leads now get instant responses.",
        author: "— Maria, USA",
      },
    ],

    finalCTATitle: "Ready to Automate Your Business With AI?",
    finalCTASubtext:
      "Let us build an AI system that saves time, increases efficiency, and helps your business scale effortlessly.",
    finalCTAPrimary: "Get a Free Automation Audit",
    finalCTASecondary: "Speak to an AI Specialist",
    microtrustLine:
      "We respond within 24 hours. No obligations — just real value.",

    sidebarTitle: "AI & Automation",
    rightDescription:
      "Our AI automation services transform your business operations with intelligent solutions that save time and significantly reduce costs. Implement future-ready technology today.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "Can AI really handle customer support?", a: "Yes, our bots handle up to 70% of repetitive FAQs, leaving only complex cases for humans." },
      { q: "Is my business data secure with AI?", a: "We use secure, private enterprise-level GPT models that do not train on your sensitive data." }
    ],
    technologies: ["OpenAI API", "Python", "Zapier", "Make.com", "Vector Databases", "LangChain"],
    industries: ["Customer Service", "Real Estate", "Financial Services", "Legal", "SaaS"],
    deliverables: ["Custom Trained AI Models", "24/7 Automated Chatbots", "Automated Workflows (Zapier)", "Live Data Dashboards", "Staff Training & Documentation"]
  },
  "mobile-development": {
    heroTitle:
      "Custom Mobile Apps Built for Performance, Scalability & User Experience",
    heroSubtext:
      "From idea to launch, we design and develop high-performance mobile apps for startups, growing businesses, and global brands. Whether you need iOS, Android, or a cross-platform solution, our mobile apps deliver seamless experiences and long-term scalability.",
    heroCTA1: "Start Your App Project",
    heroCTA2: "Visit Our Portfolio",

    problemsTitle:
      "Most Apps Fail — Not Because of Coding, But Because of Strategy",
    problemsIntro: "",
    modernProblems: [
      "No Clear User Experience Strategy – Apps are built without understanding user flow, leading to confusion and drop-offs.",
      "Slow, Laggy, or Buggy Performance – Poor optimization results in low ratings and uninstall rates.",
      "Low User Retention – Apps attract downloads but fail to keep users engaged.",
      "Outdated UI/UX Design – Old layouts instantly make your app feel untrustworthy.",
      "Poor Backend or API Integration – Apps crash or fail when backend systems aren’t properly designed.",
      "Long Development Cycles – Some agencies take months without transparency or iteration.",
      "No Post-Launch Support – Businesses are left alone once the app is “delivered,” with no updates or maintenance.",
    ],

    solutionsTitle: "We Build Apps That Users Love & Businesses Depend On",
    solutionsIntro: "",
    solutions: [
      "User-Centered UI/UX Design – Clean, intuitive, modern interfaces that improve usability and engagement.",
      "Fast, High-Performance Development – Optimized codebases for smooth, fast, reliable app performance.",
      "Cross-Platform App Development – Build once — deploy on both iOS and Android.",
      "Strategic Product Planning & Architecture – We guide you from concept → strategy → design → development.",
      "Robust Backend, API & Database Setup – Powerful architecture that scales as your business grows.",
      "Analytics + In-App Event Tracking – Know exactly how users behave and where improvements are needed.",
      "Ongoing Support & Maintenance – Updates, optimizations, new features — we stay with you long-term.",
    ],

    featuresTitle: "End-to-End Mobile App Solutions",
    features: [
      "iOS App Development – Native & cross-platform builds for a seamless Apple experience.",
      "Android App Development – High-performance Android apps with scalable architecture.",
      "Cross-Platform App Development (React Native / Flutter) – One codebase → multiple platforms → lower cost → faster launch.",
      "UI/UX for Mobile Apps – User-centric screens, flows, and prototypes designed for clarity and efficiency.",
      "API & Backend Development – Secure, scalable tech stack built for long-term growth.",
    ],

    processTitle: "A Streamlined Process That Reduces Risk & Maximizes Results",
    processSteps: [
      { step: "01", title: "Discovery", desc: "Understanding goals and user expectations." },
      { step: "02", title: "UI/UX Design", desc: "Crafting flows for a smooth experience." },
      { step: "03", title: "Development", desc: "Building with optimized app architecture." },
      { step: "04", title: "Scaling", desc: "Updates, monitoring, and live support." },
    ],

    whyChooseTitle: "A Development Partner You Can Rely On",
    whyChooseItems: [
      "Modern Tech Stack (React Native, Flutter, Next.js, Node.js)",
      "Fast, Clear Communication",
      "Pixel-Perfect UI/UX",
      "Scalable Code Architecture",
      "Affordable Solutions for Startups & Businesses",
      "Experience across USA, UK, Canada & Australia",
    ],

    testimonialsTitle: "What Our App Clients Say",
    testimonials: [
      {
        quote:
          "Netpulse Digital built a seamless, fast app that our users love. Their design quality and communication were outstanding.",
        author: "— Lucas, Canada",
      },
      {
        quote:
          "Our app went from concept to launch in weeks. Highly professional and deeply knowledgeable team.",
        author: "— Priya, UK",
      },
    ],

    finalCTATitle: "Let’s Build the App Your Business Deserves",
    finalCTASubtext:
      "Whether you're launching a startup app or scaling an existing product, we’ll help you build a high-performing, beautiful, and scalable mobile experience.",
    finalCTAPrimary: "Start Your App Project",
    finalCTASecondary: "Book a Free Consultation",
    microtrustLine:
      "We respond within 24 hours — no pressure, just expert insights.",

    sidebarTitle: "Mobile App Development",
    rightDescription:
      "Our mobile development services create powerful applications that connect your audience on their preferred devices. Native performance, cross-platform efficiency.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "Native or Cross-platform?", a: "We recommend React Native or Flutter for most businesses to save 40% on costs while keeping native feel." },
      { q: "Do you handle App Store publishing?", a: "Yes, we manage the entire submission process for both Apple App Store and Google Play." }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js"],
    industries: ["Social Networking", "E-commerce", "Health & Fitness", "Delivery Apps", "FinTech"],
    deliverables: ["iOS & Android App Store Builds", "Complete UI/UX Design File", "Scalable Backend API", "In-App Analytics Setup", "90-Day Bug Support"]
  },
  ebooks: {
    heroTitle:
      "Professional E-Book Creation & Author Services That Bring Your Story to Life",
    heroSubtext:
      "From book writing, editing, formatting, and cover design to author websites, marketing, and affordable book printing, Netpulse Digital offers complete, end-to-end solutions for indie authors worldwide. We turn your manuscript into a polished, published, and market-ready book — all under one roof.",
    heroCTA1: "Start Your Book Project",
    heroCTA2: "View Our Portfolio",

    problemsTitle: "Most Authors Struggle With Publishing — Here’s Why",
    problemsIntro: "",
    modernProblems: [
      "Poor or Unprofessional Book Design – First impressions matter — low-quality covers hurt book sales instantly.",
      "Improper Book Formatting – Incorrect margins, spacing, fonts, or layout make books look unprofessional and get rejected by platforms.",
      "Confusing Publishing Platforms – Amazon KDP, IngramSpark, Gumroad… most authors don’t know where to start.",
      "No Author Brand or Website – Without an online presence, readers can’t discover or trust the author.",
      "Low Book Sales Due to Weak Marketing – Even great books fail without proper promotion & launch strategy.",
      "High Book Printing Costs – Most printing platforms charge expensive per-copy prices that limit profits.",
      "No End-to-End Guidance – Authors are left alone to figure out editing, publishing, design, and marketing.",
    ],

    solutionsTitle: "We Help Authors Publish Professionally & Sell More Books",
    solutionsIntro: "",
    solutions: [
      "Beautiful, Professional Book Designs – Covers & interiors crafted to industry standards that impress readers and retail platforms.",
      "Precise, Platform-Approved Formatting – We format your book for Amazon KDP, IngramSpark, ePub, PDF & print-ready versions.",
      "Complete Publishing Assistance – We handle everything — writing, editing, formatting, uploading, metadata & more.",
      "Custom Author Websites – Build a strong digital presence with a clean, modern, high-converting author website.",
      "Book Marketing & Launch Strategy – Ads, promotions, SEO, landing pages, social media — everything to drive sales.",
      "Affordable Book Printing Services – We offer lower printing prices than major publishing platforms to increase your profit margins.",
      "Fully Guided Process – From concept to final publishing, we support you at every step.",
    ],

    featuresTitle: "Complete Services for Indie Authors & Self-Publishers",
    features: [
      "Book Writing / Ghostwriting – Professional writing services for authors who need help crafting their story or book content.",
      "Book Cover Design – Eye-catching, genre-specific covers that attract readers and increase sales.",
      "Interior Book Formatting – Perfect layout for Kindle, ePub, PDF, and print-ready formats with professional typography.",
      "Book Printing Services – Affordable printing with lower per-book costs than leading print-on-demand platforms.",
      "Author Website Development – Clean, modern websites that help authors build a digital brand and sell books directly.",
      "Book Marketing & Launch Strategy – Social media campaigns, Amazon optimization, email marketing & promotional assets.",
    ],

    processTitle: "A Smooth, Guided Process From Manuscript to Published Book",
    processSteps: [
      { step: "01", title: "Consultation", desc: "Manuscript review and genre planning." },
      { step: "02", title: "Formatting", desc: "Professional cover and interior layout." },
      { step: "03", title: "Publishing", desc: "Uploading to KDP and IngramSpark." },
      { step: "04", title: "Promotion", desc: "Launch support and brand building." },
    ],

    whyChooseTitle: "Your Trusted Partner for Publishing & Author Success",
    whyChooseItems: [
      "Affordable Printing With Higher Profit Margins",
      "Experienced Team in Book Design & Publishing",
      "Perfect Formatting for KDP & Print Platforms",
      "Professional Designs That Attract Readers",
      "Marketing Strategies That Boost Book Sales",
      "Fast Delivery + Transparent Communication",
    ],

    testimonialsTitle: "What Authors Say",
    testimonials: [
      {
        quote:
          "My book went from a Word document to a beautiful, professional product. The cover design alone boosted my sales.",
        author: "— Hannah, UK",
      },
      {
        quote:
          "Their printing service saved me so much money. Excellent quality, fast delivery, and far cheaper than KDP.",
        author: "— David, USA",
      },
    ],

    finalCTATitle: "Ready to Publish Your Book Professionally?",
    finalCTASubtext:
      "Let’s turn your manuscript into a high-quality book and create a strong author presence that grows your readership.",
    finalCTAPrimary: "Start Your Book Project",
    finalCTASecondary: "Get a Free Publishing Consultation",
    microtrustLine:
      "We reply within 24 hours. No pressure — just expert guidance.",

    sidebarTitle: "Ebook Creation & Publishing",
    rightDescription:
      "Our ebook services transform your knowledge and expertise into valuable digital products that reach a global audience. Your message, worldwide impact.",
    callToActionLinkText: "Let's Talk",
    faq: [
      { q: "How much royalty do I keep?", a: "100%. We take no commission on your sales. You own your book and all its profits." },
      { q: "Can you help with Amazon KDP?", a: "Yes, we handle formatting, metadata setup, and publishing on Amazon, IngramSpark, and more." }
    ],
    technologies: ["Vellum", "Adobe InDesign", "Amazon KDP", "Calibre", "Gumroad"],
    industries: ["Business Owners", "Educators", "Indie Authors", "Coaches", "Thought Leaders"],
    deliverables: ["Polished Digital Manuscript", "Print-Ready Book Cover", "Formatted ePub & PDF Files", "Premium Author Website", "Amazon Launch Strategy"]
  },
};

const serviceImageMap: Record<keyof typeof serviceData, StaticImageData> = {
  "digital-marketing": s44,
  "creative-design": s11,
  "web-development": s22,
  "mobile-development": s33,
  "ai-automation": s55,
  ebooks: s66,
};

const SectionCard = ({
  title,
  introText,
  items,
}: {
  title: string;
  introText?: string | null;
  items: string[];
}) => {
  return (
    <div
      className="p-5 rounded-4 border transition-all duration-300 mb-4 bg-white shadow-sm"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,71,171,0.08)",
      }}
    >
      <div className="d-flex align-items-center mb-4">
        <div
          className="me-3 d-flex align-items-center justify-content-center rounded-3"
          style={{ width: "45px", height: "45px", backgroundColor: "rgba(0,71,171,0.05)", color: "#0047AB" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h3
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            fontFamily: "var(--tp-ff-gelder)",
            color: "#0047AB",
            margin: 0
          }}
        >
          {title}
        </h3>
      </div>

      {introText && (
        <p
          className="mb-4"
          style={{
            fontFamily: "var(--tp-ff-body)",
            color: "#4A5568",
            fontSize: "1.1rem",
            lineHeight: "1.6"
          }}
        >
          {introText}
        </p>
      )}

      <div className="row g-3">
        {items.map((item, index) => (
          <div key={index} className="col-12">
            <div
              className="d-flex align-items-start p-3 rounded-3 transition-all h-100 hover-section-item"
              style={{
                backgroundColor: "rgba(0,71,171,0.02)",
                border: "1px solid rgba(0,71,171,0.04)",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
            >
              <span className="me-2 mt-1 bullet-icon" style={{ color: "#0047AB", transition: "all 0.3s ease" }}>•</span>
              <p
                className="mb-0"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "#2D3748",
                  fontSize: "1rem",
                  fontWeight: 500
                }}
              >
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .hover-section-item:hover {
          background-color: rgba(0, 71, 171, 0.05) !important;
          border-color: rgba(0, 71, 171, 0.15) !important;
          transform: translateX(10px);
          box-shadow: 0 4px 12px rgba(0, 71, 171, 0.05);
        }
        .hover-section-item:hover .bullet-icon {
          transform: scale(1.5);
          color: #002D6B !important;
        }
      `}</style>
    </div>
  );
};

const ProcessCard = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="service-details__process-card px-4 py-5 h-100 border-0 rounded-4 text-center transition-all duration-300 bg-white shadow-sm hover-premium-card">
      <div
        className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#0047AB",
          color: "white",
          fontSize: "1.7rem",
          fontWeight: 800,
          boxShadow: "0 10px 20px rgba(0, 71, 171, 0.2)",
          transition: "all 0.3s ease"
        }}
      >
        {step || "!"}
      </div>
      <h5
        className="mb-3 mt-3"
        style={{
          fontFamily: "var(--tp-ff-gelder)",
          color: "#0047AB",
          fontSize: "1.5rem",
          fontWeight: 700
        }}
      >
        {title}
      </h5>
      <p
        className="mb-0 mx-auto"
        style={{
          fontFamily: "var(--tp-ff-body)",
          color: "#4A5568",
          fontSize: "1rem",
          lineHeight: "1.6"
        }}
      >
        {desc}
      </p>
      <style jsx>{`
        .hover-premium-card {
          margin: 5px;
        }
        .hover-premium-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0, 71, 171, 0.15) !important;
          z-index: 2;
        }
        .hover-premium-card:hover .rounded-circle {
          transform: scale(1.1) rotate(5deg);
          background-color: #002D6B !important;
        }
      `}</style>
    </div>
  );
};

const WhyChooseItem = ({ value }: { value: string }) => {
  return (
    <div
      className="p-4 rounded-4 border-0 transition-all duration-300 h-100 bg-white shadow-sm d-flex align-items-center hover-why-card"
      style={{
        border: "1px solid rgba(0,71,171,0.05)",
        cursor: "default"
      }}
    >
      <div className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 check-icon" style={{ width: "32px", height: "32px", backgroundColor: "rgba(0,71,171,0.1)", color: "#0047AB", transition: "all 0.3s ease" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <p
        className="mb-0"
        style={{
          fontFamily: "var(--tp-ff-body)",
          color: "#2D3748",
          fontSize: "1.05rem",
          fontWeight: 500,
        }}
      >
        {value}
      </p>
      <style jsx>{`
        .hover-why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 71, 171, 0.1) !important;
          background-color: #fcfdfe !important;
        }
        .hover-why-card:hover .check-icon {
          background-color: #0047AB !important;
          color: white !important;
          transform: rotate(10deg) scale(1.1);
        }
      `}</style>
    </div>
  );
};

const DeliverablesCard = ({ items }: { items: string[] }) => (
  <div className="service-details__deliverables-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
    <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "20px", fontSize: "1.2rem" }}>What You&apos;ll Get</h4>
    <div className="d-flex flex-column gap-3">
      {items.map((item, i) => (
        <div key={i} className="d-flex align-items-center">
          <div className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: "24px", height: "24px", backgroundColor: "rgba(0,71,171,0.05)", color: "#0047AB" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <span style={{ fontSize: "0.9rem", color: "#4A5568", fontWeight: 600, fontFamily: "var(--tp-ff-body)" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechStackCard = ({ techs }: { techs: string[] }) => (
  <div className="service-details__tech-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
    <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "20px", fontSize: "1.2rem" }}>Tools & Technologies</h4>
    <div className="d-flex flex-wrap gap-2">
      {techs.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-2 rounded-pill hover-tech-tag"
          style={{
            backgroundColor: "rgba(0,71,171,0.05)",
            color: "#0047AB",
            fontSize: "0.85rem",
            fontWeight: 600,
            fontFamily: "var(--tp-ff-body)",
            border: "1px solid rgba(0,71,171,0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
        >
          {tech}
        </span>
      ))}
    </div>
    <style jsx>{`
      .hover-tech-tag:hover {
        background-color: #0047AB !important;
        color: white !important;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 71, 171, 0.2);
      }
    `}</style>
  </div>
);

const IndustryFocusCard = ({ industries }: { industries: string[] }) => (
  <div className="service-details__industry-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
    <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "20px", fontSize: "1.2rem" }}>Industry Focus</h4>
    <div className="row g-2">
      {industries.map((ind, i) => (
        <div key={i} className="col-6">
          <div className="d-flex align-items-center p-2 rounded-3 border-0 transition-all hover-industry-item" style={{ backgroundColor: "#f8f9fa", transition: "all 0.3s ease", cursor: "pointer" }}>
            <span style={{ color: "#0047AB", marginRight: "8px", fontSize: "14px" }}>#</span>
            <span style={{ fontSize: "0.85rem", color: "#4A5568", fontWeight: 600, fontFamily: "var(--tp-ff-body)" }}>{ind}</span>
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .hover-industry-item:hover {
        background-color: rgba(0, 71, 171, 0.05) !important;
        transform: translateX(5px);
      }
      .hover-industry-item:hover span:first-child {
        transform: scale(1.2);
      }
    `}</style>
  </div>
);

const FAQCard = ({ faq }: { faq: { q: string; a: string }[] }) => (
  <div className="service-details__faq-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
    <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "20px", fontSize: "1.2rem" }}>Common Questions</h4>
    <div className="accordion accordion-flush" id="serviceSidebarFaq">
      {faq.map((item, i) => (
        <div key={i} className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm" style={{ border: "1px solid rgba(0,71,171,0.05)" }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed py-3 px-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#sidebarFaq${i}`}
              style={{
                fontFamily: "var(--tp-ff-body)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#0047AB",
                backgroundColor: "white"
              }}
            >
              {item.q}
            </button>
          </h2>
          <div id={`sidebarFaq${i}`} className="accordion-collapse collapse" data-bs-parent="#serviceSidebarFaq">
            <div className="accordion-body py-3 px-4 text-muted" style={{ fontSize: "0.85rem", lineHeight: "1.5", fontFamily: "var(--tp-ff-body)" }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function ServiceDetailsArea({ slug }: { slug: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const extractServiceSlug = useCallback(() => {
    if (pathname) {
      const parts = pathname.split("/");
      return parts[parts.length - 1].toLowerCase();
    }
    return slug?.toLowerCase() || "digital-marketing";
  }, [pathname, slug]);

  const normalizedSlug = extractServiceSlug();
  const [activeService, setActiveService] = useState<keyof typeof serviceData>(
    serviceData[normalizedSlug as keyof typeof serviceData]
      ? (normalizedSlug as keyof typeof serviceData)
      : "digital-marketing"
  );

  useEffect(() => {
    const serviceSlug = extractServiceSlug();
    if (serviceData[serviceSlug as keyof typeof serviceData]) {
      setActiveService(serviceSlug as keyof typeof serviceData);
    } else {
      setActiveService("digital-marketing");
    }
  }, [extractServiceSlug]);

  useGSAP(() => {
    // Initial animations
    gsap.from(".reveal-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    gsap.from(".service-hero-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });

    // Scroll triggered animations
    const sections = gsap.utils.toArray(".scroll-reveal");
    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }, { scope: containerRef, dependencies: [activeService] });

  const currentService = serviceData[activeService];

  const getDisplayTitle = () => {
    const title = activeService.replace(/-/g, " ");
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const handleCategoryClick = (
    service: keyof typeof serviceData,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    setActiveService(service);
    router.push(`/services/${service}`);
  };

  const renderSectionCard = (
    title: string,
    introText: string | null | undefined,
    items: string[],
    key: string
  ) => {
    return (
      <div key={key} className="service-details__left-text">
        <SectionCard title={title} introText={introText} items={items} />
      </div>
    );
  };

  const renderProcessSection = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-80">
            <h3
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB",
                fontSize: "calc(2rem + 0.5vw)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {currentService.processTitle}
            </h3>
          </div>
          <div className="col-12">
            <div className="row g-4 justify-content-center">
              {currentService.processSteps.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <ProcessCard
                    step={item.step || String(i + 1)}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWhyChooseSection = () => {
    return (
      <div className="container mt-40">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-80">
            <h3
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB",
                fontSize: "calc(2rem + 0.5vw)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {currentService.whyChooseTitle}
            </h3>
          </div>
          <div className="col-12">
            <div className="row g-4">
              {currentService.whyChooseItems.map((value, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <WhyChooseItem value={value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTestimonialsSection = () => {
    return (
      <div className="container mb-100 scroll-reveal mt-25">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-80">
            <h3
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB",
                fontSize: "2.5rem",
                fontWeight: 700
              }}
            >
              {currentService.testimonialsTitle}
            </h3>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {currentService.testimonials.map((t, i) => (
            <div key={i} className="col-md-6 col-lg-5">
              <div
                className="h-100 p-5 rounded-4 bg-white shadow-sm border transition-all duration-300 hover-testimonial-card"
                style={{
                  border: "1px solid rgba(0,71,171,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
              >
                <div className="mb-3 text-primary transition-all quote-icon" style={{ opacity: 0.15, transition: "all 0.3s ease" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" /></svg>
                </div>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#2D3748",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    fontStyle: "italic"
                  }}
                >
                  {t.quote}
                </p>
                <div className="d-flex align-items-center">
                  <div className="ms-0">
                    <h6 className="mb-0 fw-bold author-name" style={{ color: "#0047AB", transition: "all 0.3s ease" }}>{t.author.split('•')[0].trim().replace('— ', '')}</h6>
                    <small className="text-muted">{t.author.split('•')[1]?.trim() || 'Client'}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .hover-testimonial-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 71, 171, 0.1) !important;
            border-color: rgba(0, 71, 171, 0.2) !important;
          }
          .hover-testimonial-card:hover .quote-icon {
            opacity: 0.4 !important;
            transform: scale(1.1);
            color: #0047AB !important;
          }
          .hover-testimonial-card:hover .author-name {
            color: #002D6B !important;
            transform: translateX(5px);
          }
        `}</style>
      </div>
    );
  };

  const renderFinalCTASection = () => {
    return (
      <div className="container pb-100 scroll-reveal">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="p-5 p-lg-8 rounded-5 text-center text-white shadow-2xl" style={{
              background: "linear-gradient(135deg, #0047AB 0%, #002D6B 100%)",
              boxShadow: "0 25px 50px -12px rgba(0, 71, 171, 0.5)"
            }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--tp-ff-gelder)",
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: 800
                }}
              >
                {currentService.finalCTATitle}
              </h3>
              <p
                className="mb-5 mx-auto"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "white",
                  opacity: 0.9,
                  fontSize: "1.25rem",
                  maxWidth: "700px"
                }}
              >
                {currentService.finalCTASubtext}
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link
                  href="/contact"
                  className="btn btn-light px-5 py-3 rounded-pill fw-bold"
                  style={{ color: "#0047AB", fontSize: "1.1rem" }}
                >
                  {currentService.finalCTAPrimary}
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold"
                  style={{ fontSize: "1.1rem" }}
                >
                  {currentService.finalCTASecondary}
                </Link>
              </div>
              <p
                className="mt-4"
                style={{
                  fontSize: "0.95rem",
                  fontFamily: "var(--tp-ff-body)",
                  color: "white",
                  opacity: 0.7
                }}
              >
                {currentService.microtrustLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="service-details__area service-details__space pt-150 pb-120 overflow-hidden">
      {/* HERO SECTION */}
      <section className="service-details__hero mb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              <div className="service-details__title-box mb-40">
                <span
                  className="service-details__subtitle reveal-text"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#0047AB",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    display: "block",
                    marginBottom: "15px"
                  }}
                >
                  {getDisplayTitle()}
                </span>
                <h1
                  className="reveal-text"
                  style={{
                    fontFamily: "var(--tp-ff-gelder)",
                    color: "#0047AB",
                    fontSize: "calc(2.5rem + 1.5vw)",
                    lineHeight: "1.1",
                    fontWeight: "800",
                    marginBottom: "25px",
                  }}
                >
                  {currentService.heroTitle}
                </h1>
                <p
                  className="reveal-text"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#1A202C",
                    fontSize: "1.15rem",
                    lineHeight: "1.7",
                    maxWidth: "650px",
                    marginBottom: "50px",
                    opacity: 0.9
                  }}
                >
                  {currentService.heroSubtext}
                </p>
                <div className="reveal-text d-flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    style={{
                      padding: "16px 35px",
                      backgroundColor: "#0047AB",
                      color: "#ffffff",
                      fontFamily: "var(--tp-ff-body)",
                      fontWeight: 600,
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 10px 20px rgba(0, 71, 171, 0.2)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 71, 171, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 71, 171, 0.2)";
                    }}
                  >
                    {currentService.heroCTA1}
                  </Link>
                  <Link
                    href="/portfolio-standard-main"
                    style={{
                      padding: "16px 35px",
                      backgroundColor: "transparent",
                      color: "#0047AB",
                      fontFamily: "var(--tp-ff-body)",
                      fontWeight: 600,
                      border: "2px solid #0047AB",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0, 71, 171, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {currentService.heroCTA2}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <div className="service-hero-img p-relative">
                <Image
                  src={serviceImageMap[activeService]}
                  alt={`${getDisplayTitle()} illustration`}
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="service-details__main-content pb-100">
        <div className="container">
          <div className="row g-5">
            {/* Sidebar Sticky */}
            <div className="col-xl-4 col-lg-4 order-2 order-lg-1">
              <aside className="service-details__sidebar sticky-top" style={{ top: "100px", zIndex: 10 }}>
                <div className="service-details__category-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
                  <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "25px", fontSize: "1.4rem" }}>Expertise Areas</h4>
                  <div className="d-flex flex-column gap-2">
                    {Object.keys(serviceData).map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service}`}
                        onClick={(e) => handleCategoryClick(service as keyof typeof serviceData, e)}
                        className={`p-3 rounded-3 text-decoration-none transition-all ${activeService === service ? 'bg-primary text-white shadow-lg' : 'text-primary'}`}
                        style={{
                          fontFamily: "var(--tp-ff-body)",
                          fontWeight: 600,
                          backgroundColor: activeService === service ? "#0047AB" : "transparent",
                          fontSize: "0.95rem",
                          border: activeService === service ? "none" : "1px solid rgba(0,71,171,0.1)"
                        }}
                      >
                        {service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="service-details__help-box p-5 rounded-4 text-center text-white border-0 mb-40" style={{ background: "linear-gradient(135deg, #0047AB 0%, #002D6B 100%)", position: "relative", overflow: "hidden" }}>
                  <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "white", marginBottom: "15px", position: "relative", zIndex: 2 }}>{currentService.sidebarTitle}</h4>
                  <p style={{ color: "white", opacity: 0.9, marginBottom: "30px", position: "relative", zIndex: 2 }}>{currentService.rightDescription}</p>
                  <Link
                    href="/contact"
                    className="btn btn-light w-100 py-3 rounded-pill fw-bold"
                    style={{ color: "#0047AB", position: "relative", zIndex: 2 }}
                  >
                    {currentService.callToActionLinkText}
                  </Link>
                  <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>
                </div>

                <div className="service-details__highlights-box p-4 rounded-4 bg-white shadow-sm mb-40 border">
                  <h4 style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB", marginBottom: "20px", fontSize: "1.2rem" }}>Service Highlights</h4>
                  <ul className="list-unstyled mb-0">
                    {currentService.whyChooseItems.slice(0, 4).map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: "20px", height: "20px", backgroundColor: "rgba(0,71,171,0.1)", color: "#0047AB", fontSize: "10px" }}>
                          ✓
                        </div>
                        <span style={{ fontSize: "0.95rem", color: "#4A5568", fontFamily: "var(--tp-ff-body)", fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <DeliverablesCard items={currentService.deliverables} />

                <TechStackCard techs={currentService.technologies} />
                <IndustryFocusCard industries={currentService.industries} />
                <FAQCard faq={currentService.faq} />
              </aside>
            </div>

            {/* Main Content Sections */}
            <div className="col-xl-8 col-lg-8 order-1 order-lg-2">
              <div className="scroll-reveal mb-80">
                {renderSectionCard(currentService.problemsTitle, currentService.problemsIntro, currentService.modernProblems, "problems")}
              </div>

              <div className="scroll-reveal mb-80">
                {renderSectionCard(currentService.solutionsTitle, currentService.solutionsIntro, currentService.solutions, "solutions")}
              </div>

              <div className="scroll-reveal mb-100">
                {renderSectionCard(currentService.featuresTitle, currentService.featuresIntro, currentService.features, "features")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <section className="service-details__process-area py-120 bg-light-blue" style={{ backgroundColor: "rgba(0,71,171,0.02)" }}>
        {renderProcessSection()}
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="service-details__why-choose py-120">
        {renderWhyChooseSection()}
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="service-details__testimonials py-120 bg-light-blue" style={{ backgroundColor: "rgba(0,71,171,0.02)" }}>
        {renderTestimonialsSection()}
      </section>

      {/* FINAL CTA SECTION */}
      <section className="service-details__cta py-120">
        {renderFinalCTASection()}
      </section>
    </div>
  );
}
