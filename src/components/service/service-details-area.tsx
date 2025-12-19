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
}

const serviceData: Record<string, ServiceData> = {
  "digital-marketing": {
    heroTitle: "Digital Marketing That Delivers Real Growth",
    heroSubtext:
      "From social media to SEO, paid ads, funnels, and content strategy — Netpulse Digital helps businesses across the USA, UK, Canada, and Australia attract more customers and convert more leads with data-driven marketing solutions.",
    heroCTA1: "Get a Free Marketing Strategy Call",
    heroCTA2: "See Our Work",

    problemsTitle: "Why Most Businesses Fail to Grow Online",
    problemsIntro: "In today's digital landscape, businesses face significant challenges:",
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
    solutionsIntro: "We provide comprehensive solutions that directly address these challenges:",
    solutions: [
      "⚡ Clear Marketing Strategy & Roadmap – We create a customized blueprint aligned with your business goals, audience, and budget.",
      "📈 SEO + Keyword Strategy for High-Intent Traffic – Rank higher, attract better leads, and improve organic visibility.",
      "🎯 Advanced Targeting for Quality Leads – We refine your audience using industry data, competitor analysis, and buyer psychology.",
      "✨ Content That Builds Trust & Engagement – From design to messaging, we craft content that converts audiences into buyers.",
      "📊 Analytics, Tracking & Performance Reporting – We use data — not guesswork — to optimize every campaign for growth.",
      "💸 High-ROI Advertising Campaigns – Our Google, Facebook, and multi-platform ad strategies lower costs and increase conversions.",
      "🤝 Full Transparency & Communication – You’re updated at every step — no confusion, no black-box marketing.",
    ],

    featuresTitle: "Everything Your Business Needs to Grow Online",
    features: [
      "⭐ Social Media Marketing – Strategic posting, content creation, engagement, and growth systems.",
      "⭐ Paid Advertising (Facebook, Google, TikTok, Instagram) – High-ROI ad campaigns with weekly optimization.",
      "⭐ Search Engine Optimization (SEO) – On-page, technical, and local SEO to improve rankings and traffic.",
      "⭐ Content Creation & Brand Messaging – Premium content that builds trust and drives customer action.",
      "⭐ Email Marketing & Automation – Personalized workflows that nurture leads and increase lifetime value.",
      "⭐ Full Funnel Setup (Lead Magnet → CTA → Landing Page) – Complete systems designed for conversions, not random clicks.",
      "⭐ Analytics & Reporting – Monthly performance, KPI tracking, and strategic adjustments.",
    ],

    processTitle: "A Proven Process That Scales With You",
    processSteps: [
      {
        step: "1️⃣",
        title: "Discovery & Audit",
        desc: "We analyze your current digital presence, competitors, and opportunities.",
      },
      {
        step: "2️⃣",
        title: "Strategy & Planning",
        desc: "We create a personalized, data-driven strategy tailored to your industry.",
      },
      {
        step: "3️⃣",
        title: "Execution & Optimization",
        desc: "Campaigns, content, SEO, ads, and funnels — managed and optimized weekly.",
      },
      {
        step: "4️⃣",
        title: "Growth & Scaling",
        desc: "Once results are stable, we scale budgets, expand campaigns, and improve ROI.",
      },
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
        quote: "Netpulse Digital rebuilt our entire marketing system — our traffic increased, leads improved, and our brand finally feels consistent.",
        author: "— Michael • USA",
      },
      {
        quote: "Their ad strategies helped us cut costs while doubling conversions.",
        author: "— Sophie • UK",
      },
    ],

    finalCTATitle: "Ready to Grow Your Business With Smart Digital Marketing?",
    finalCTASubtext:
      "Let’s create a marketing system that attracts the right audience, boosts engagement, and drives consistent growth.",
    finalCTAPrimary: "Get a Free Marketing Audit",
    finalCTASecondary: "Contact Our Team",
    microtrustLine: "We respond within 24 hours. No obligations — just insights.",

    sidebarTitle: "Digital Marketing",
    rightDescription:
      "Our digital marketing services transform your brand into an online dominant force. We use a data-driven approach that delivers guaranteed results and aligns with your business goals.",
    callToActionLinkText: "Let's Talk",
  },
  "creative-design": {
    heroTitle: "Creative Designs That Build Trust, Strengthen Brands & Drive Results",
    heroSubtext:
      "From logos and brand identity systems to social media design, UI/UX, and complete visual branding — Netpulse Digital helps businesses worldwide create strong, memorable designs that connect with customers and inspire action.",
    heroCTA1: "Get a Free Brand Consultation",
    heroCTA2: "View Our Design Work",

    problemsTitle: "Most Businesses Struggle With Weak Visual Identity — Here’s Why",
    problemsIntro: "",
    modernProblems: [
      " Outdated or Unprofessional Branding – Generic or outdated designs make businesses look unreliable.",
      " Inconsistent Brand Visuals Across Platforms – Mismatched colors, fonts, and layouts confuse customers and reduce trust.",
      " Low-Quality Logos & Graphics – Cheap designs don’t scale well and fail to represent the brand’s value.",
      " No Clear Brand Messaging or Visual Story – Businesses struggle to communicate who they are and why they matter.",
      " Poor Social Media Visuals – Low-engagement posts caused by weak design, wrong colors, and unclear layouts.",
      " Confusing UI/UX That Pushes Users Away – Bad user experience leads to low conversions and high bounce rates.",
    ],

    solutionsTitle: "Design Solutions That Elevate Your Brand & Boost Conversions",
    solutionsIntro: "",
    solutions: [
      "Strategic, Psychology-Driven Branding – We create visuals that influence trust, emotion, and buying behavior.",
      "Professional Logo & Identity Systems – Every logo, color palette, and typeface is crafted to fit your audience and industry.",
      "Complete Brand Guidelines – We deliver full guidelines to keep your brand consistent across all platforms.",
      "High-Impact Social Media Design – Scroll-stopping designs optimized for engagement and storytelling.",
      "UI/UX Design for Websites & Apps – Beautiful and intuitive product designs that improve user experience and conversions.",
      "Fast Turnaround With Premium Quality – Top-tier design work, delivered quickly and efficiently.",
    ],

    featuresTitle: "Everything Your Brand Needs to Look Professional & Powerful",
    features: [
      "Logo Design & Brand Identity – Unique, memorable, scalable logos designed for long-term brand success.",
      "Full Brand Kits & Guidelines – Color systems, typography, icons, patterns, brand voice — everything packaged beautifully.",
      "Social Media Design – Templates, post graphics, reels covers, stories, ads & banners.",
      "UI/UX Design (Web & App) – Wireframes, prototypes, high-fidelity designs built for clarity and conversion.",
      "Business Collateral Design – Business cards, pitch decks, brochures, packaging & more.",
      "Marketing Creatives & Ads – High-converting ad creatives for Meta, Google, TikTok & YouTube.",
    ],

    processTitle: "Our Creative Process (Designed for Clarity & Growth)",
    processSteps: [
      {
        step: "1️⃣",
        title: "Discovery & Brand Understanding",
        desc: "We learn your goals, audience, competitors, and brand personality.",
      },
      {
        step: "2️⃣",
        title: "Creative Direction & Concepting",
        desc: "We create concepts, color palettes, typography and visual direction.",
      },
      {
        step: "3️⃣",
        title: "Design & Refinement",
        desc: "We craft polished, strategic designs based on feedback and brand goals.",
      },
      {
        step: "4️⃣",
        title: "Delivery & Brand Activation",
        desc: "We package everything professionally so you can launch with confidence.",
      },
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
        quote: "Our brand identity finally feels premium. Their design work transformed how customers see us.",
        author: "— Olivia • UK",
      },
      {
        quote: "High-quality, clean, creative — exactly what our brand needed.",
        author: "— Rebecca • Australia",
      },
    ],

    finalCTATitle: "Ready to Elevate Your Brand With Stunning, Strategic Design?",
    finalCTASubtext:
      "Let’s bring your vision to life with creative solutions that boost trust, recognition, and conversions.",
    finalCTAPrimary: "Get a Free Brand Consultation",
    finalCTASecondary: "View Our Design Portfolio",
    microtrustLine: "No commitment — just expert insights to grow your brand.",

    sidebarTitle: "Creative Design",
    rightDescription:
      "Our creative design services create memorable visual experiences that distinguish your brand from the competition. We provide the perfect blend of creativity and strategy.",
    callToActionLinkText: "Let's Talk",
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

    solutionsTitle: "Strategic Web Development That Delivers Real Business Growth",
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
      "Speed Optimization – Reduce load times, improve rankings, and strengthen user experience.",
      "Maintenance & Support – Ongoing updates, monitoring, backups, and fixes.",
    ],

    processTitle: "A Smooth & Transparent Process From Start to Finish",
    processSteps: [
      {
        step: "1️⃣",
        title: "Discovery & Project Planning",
        desc: "Understand your audience, goals, and technical requirements.",
      },
      {
        step: "2️⃣",
        title: "Design & Prototyping",
        desc: "We craft UI/UX that aligns with your brand and enhances conversions.",
      },
      {
        step: "3️⃣",
        title: "Development & Testing",
        desc: "Building your site using modern technologies with quality assurance.",
      },
      {
        step: "4️⃣",
        title: "Launch, Optimization & Support",
        desc: "Deploy, test performance, integrate tracking, and provide ongoing support.",
      },
    ],

    whyChooseTitle: "A Team Dedicated to Quality, Performance & Long-Term Growth",
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
        quote: "Our new website increased leads by over 200% in the first month. The UX improvements alone made a huge difference.",
        author: "— Daniel, USA",
      },
      {
        quote: "Clean, fast, and perfectly aligned with our brand. Netpulse Digital exceeded our expectations.",
        author: "— Clara, UK",
      },
    ],

    finalCTATitle: "Ready to Build a Website That Grows Your Business?",
    finalCTASubtext:
      "Let’s create a high-performing website designed to generate leads, drive sales, and elevate your brand.",
    finalCTAPrimary: "Start Your Website Project",
    finalCTASecondary: "Request a Free Consultation",
    microtrustLine: "We reply within 24 hours. No obligations — just expert insights.",

    sidebarTitle: "Web Development",
    rightDescription:
      "Our web development services create powerful, scalable solutions that meet your business needs and provide seamless user experiences. Quality and performance are our priorities.",
    callToActionLinkText: "Let's Talk",
  },
  "ai-automation": {
    heroTitle: "AI Automations & Chatbots That Save Time, Reduce Costs & Scale Your Business",
    heroSubtext:
      "From smart AI chatbots to workflow automation, CRM integrations, and GPT-powered assistants — Netpulse Digital helps businesses automate repetitive tasks, improve customer experience, and operate more efficiently across the USA, UK, Canada, and Australia.",
    heroCTA1: "Get a Free Automation Audit",
    heroCTA2: "See How AI Can Transform Your Business",

    problemsTitle: "Businesses Lose Time & Money Every Day — Often Without Realizing It",
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

    solutionsTitle: "Smarter Workflows. Faster Response Times. Lower Costs. Happier Customers.",
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
      "Internal Team Automation – AI tools for teams to reduce manual work and increase efficiency.",
      "AI Analytics & Insights – Smart dashboards and automated reporting.",
    ],

    processTitle: "Our Proven Automation Workflow",
    processSteps: [
      {
        step: "1️⃣",
        title: "Business Analysis & Automation Audit",
        desc: "We analyze your processes and identify automation opportunities.",
      },
      {
        step: "2️⃣",
        title: "System Planning & AI Design",
        desc: "We map automations, build flows, and design your custom AI assistant.",
      },
      {
        step: "3️⃣",
        title: "Development & Integration",
        desc: "Chatbots, workflows, integrations — all built and tested.",
      },
      {
        step: "4️⃣",
        title: "Launch, Optimization & Support",
        desc: "We monitor usage, refine flows, and provide ongoing optimization.",
      },
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
        quote: "Our customer support workload dropped by 70% after implementing their chatbot. Huge improvement!",
        author: "— Tom, Australia",
      },
      {
        quote: "The workflow automations saved us hours each week. Our leads now get instant responses.",
        author: "— Maria, USA",
      },
    ],

    finalCTATitle: "Ready to Automate Your Business With AI?",
    finalCTASubtext:
      "Let us build an AI system that saves time, increases efficiency, and helps your business scale effortlessly.",
    finalCTAPrimary: "Get a Free Automation Audit",
    finalCTASecondary: "Speak to an AI Specialist",
    microtrustLine: "We respond within 24 hours. No obligations — just real value.",

    sidebarTitle: "AI & Automation",
    rightDescription:
      "Our AI automation services transform your business operations with intelligent solutions that save time and significantly reduce costs. Implement future-ready technology today.",
    callToActionLinkText: "Let's Talk",
  },
  "mobile-development": {
    heroTitle: "Custom Mobile Apps Built for Performance, Scalability & User Experience",
    heroSubtext:
      "From idea to launch, we design and develop high-performance mobile apps for startups, growing businesses, and global brands. Whether you need iOS, Android, or a cross-platform solution, our mobile apps deliver seamless experiences and long-term scalability.",
    heroCTA1: "Start Your App Project",
    heroCTA2: "Book a Free Consultation",

    problemsTitle: "Most Apps Fail — Not Because of Coding, But Because of Strategy",
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
      "Quality Assurance & Testing – Bug-free, smooth performance across all devices and operating systems.",
      "Maintenance, Updates & Optimization – We manage your app post-launch — new features, fixes, and improvements.",
    ],

    processTitle: "A Streamlined Process That Reduces Risk & Maximizes Results",
    processSteps: [
      {
        step: "1️⃣",
        title: "Discovery & Strategy",
        desc: "Understanding your business goals, competition, and user expectations.",
      },
      {
        step: "2️⃣",
        title: "Wireframing & UI/UX Design",
        desc: "Crafting user flows and screens that ensure a smooth experience.",
      },
      {
        step: "3️⃣",
        title: "Development & Integration",
        desc: "Building the app using modern frameworks and optimized architecture.",
      },
      {
        step: "4️⃣",
        title: "Testing & Refinement",
        desc: "Bug fixing, performance optimization, device testing.",
      },
      {
        step: "5️⃣",
        title: "Launch & Deployment",
        desc: "Publishing your app on the Apple App Store & Google Play Store.",
      },
      {
        step: "6️⃣",
        title: "Post-Launch Support & Scaling",
        desc: "Feature enhancements, updates, monitoring, analytics & marketing support.",
      },
    ],

    whyChooseTitle: "A Development Partner You Can Rely On",
    whyChooseItems: [
      "Modern Tech Stack (React Native, Flutter, Next.js, Node.js)",
      "Fast, Clear Communication",
      "Pixel-Perfect UI/UX",
      "Scalable Code Architecture",
      "Affordable Solutions for Startups & Businesses",
      "Experience across USA, UK, Canada & Australia",
      "Transparent Processes & Weekly Updates",
    ],

    testimonialsTitle: "What Our App Clients Say",
    testimonials: [
      {
        quote: "Netpulse Digital built a seamless, fast app that our users love. Their design quality and communication were outstanding.",
        author: "— Lucas, Canada",
      },
      {
        quote: "Our app went from concept to launch in weeks. Highly professional and deeply knowledgeable team.",
        author: "— Priya, UK",
      },
    ],

    finalCTATitle: "Let’s Build the App Your Business Deserves",
    finalCTASubtext:
      "Whether you're launching a startup app or scaling an existing product, we’ll help you build a high-performing, beautiful, and scalable mobile experience.",
    finalCTAPrimary: "Start Your App Project",
    finalCTASecondary: "Book a Free Consultation",
    microtrustLine: "We respond within 24 hours — no pressure, just expert insights.",

    sidebarTitle: "Mobile App Development",
    rightDescription:
      "Our mobile development services create powerful applications that connect your audience on their preferred devices. Native performance, cross-platform efficiency.",
    callToActionLinkText: "Let's Talk",
  },
  ebooks: {
    heroTitle: "Professional E-Book Creation & Author Services That Bring Your Story to Life",
    heroSubtext:
      "From book writing, editing, formatting, and cover design to author websites, marketing, and affordable book printing, Netpulse Digital offers complete, end-to-end solutions for indie authors worldwide. We turn your manuscript into a polished, published, and market-ready book — all under one roof.",
    heroCTA1: "Start Your Book Project",
    heroCTA2: "Get a Free Publishing Consultation",

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
      "E-Book Conversion (PDF, EPUB, MOBI) – Professional eBook conversion compatible with all major reading devices.",
      "KDP & IngramSpark Publishing Assistance – We prepare, upload, optimize, and manage your book publishing process.",
    ],

    processTitle: "A Smooth, Guided Process From Manuscript to Published Book",
    processSteps: [
      {
        step: "1️⃣",
        title: "Consultation & Manuscript Review",
        desc: "We understand your goals, genre, and publication requirements.",
      },
      {
        step: "2️⃣",
        title: "Design & Formatting",
        desc: "Professional cover + interior layout + eBook formatting.",
      },
      {
        step: "3️⃣",
        title: "Publishing Setup & Upload",
        desc: "Everything prepared & uploaded to KDP, IngramSpark, or your chosen platform.",
      },
      {
        step: "4️⃣",
        title: "Marketing & Promotion",
        desc: "We help you launch, promote, and build an author brand.",
      },
      {
        step: "5️⃣",
        title: "Printing & Delivery (Optional)",
        desc: "Affordable printing with high-quality paper & binding.",
      },
      {
        step: "6️⃣",
        title: "Ongoing Support",
        desc: "Updates, new editions, website changes, and marketing support.",
      },
    ],

    whyChooseTitle: "Your Trusted Partner for Publishing & Author Success",
    whyChooseItems: [
      "Affordable Printing With Higher Profit Margins",
      "Experienced Team in Book Design & Publishing",
      "Perfect Formatting for KDP & Print Platforms",
      "Professional Designs That Attract Readers",
      "Marketing Strategies That Boost Book Sales",
      "Fast Delivery + Transparent Communication",
      "End-to-End Support for Every Step",
    ],

    testimonialsTitle: "What Authors Say",
    testimonials: [
      {
        quote: "My book went from a Word document to a beautiful, professional product. The cover design alone boosted my sales.",
        author: "— Hannah, UK",
      },
      {
        quote: "Their printing service saved me so much money. Excellent quality, fast delivery, and far cheaper than KDP.",
        author: "— David, USA",
      },
    ],

    finalCTATitle: "Ready to Publish Your Book Professionally?",
    finalCTASubtext:
      "Let’s turn your manuscript into a high-quality book and create a strong author presence that grows your readership.",
    finalCTAPrimary: "Start Your Book Project",
    finalCTASecondary: "Get a Free Publishing Consultation",
    microtrustLine: "We reply within 24 hours. No pressure — just expert guidance.",

    sidebarTitle: "Ebook Creation & Publishing",
    rightDescription:
      "Our ebook services transform your knowledge and expertise into valuable digital products that reach a global audience. Your message, worldwide impact.",
    callToActionLinkText: "Let's Talk",
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

export default function ServiceDetailsArea({ slug }: { slug: string }) {
  const router = useRouter();
  const pathname = usePathname();

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
      <div key={key} className="service-details__left-text mb-4">
        <div
          className="p-4 rounded border"
          style={{
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
            fontSize: "0.95rem",
          }}
        >
          <h5
            className="mb-2"
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              fontFamily: "var(--tp-ff-gelder)",
              color: "#0047AB"
            }}
          >
            {title}
          </h5>
          {introText && (
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--tp-ff-body)",
                color: "#4A5568"
              }}
            >
              {introText}
            </p>
          )}
          <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
            {items.map((item, index) => (
              <li
                key={index}
                className="mb-1"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "#4A5568"
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderProcessSection = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-80">
            <h3
              className="sv-hero-title tp-char-animation mb-50"
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB"
              }}
            >
              {currentService.processTitle}
            </h3>
            <div className="row g-4">
              {currentService.processSteps.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="service-details__process-card p-4 h-100 border rounded text-center">
                    <div className="mb-3" style={{ fontSize: "1.8rem" }}>
                      {item.step}
                    </div>
                    <h5
                      className="mb-2"
                      style={{
                        fontFamily: "var(--tp-ff-gelder)",
                        color: "#0047AB"
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "var(--tp-ff-body)",
                        color: "#4A5568"
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
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
      <div className="container mb-80">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h3
              className="sv-hero-title tp-char-animation"
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB"
              }}
            >
              {currentService.whyChooseTitle}
            </h3>
          </div>
          <div className="col-12">
            <div className="row g-4">
              {currentService.whyChooseItems.map((value, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.2rem" }}>
                      ⭐
                    </span>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "var(--tp-ff-body)",
                        color: "#4A5568"
                      }}
                    >
                      {value}
                    </p>
                  </div>
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
      <div className="container mb-80">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h3
              className="sv-hero-title tp-char-animation"
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB"
              }}
            >
              {currentService.testimonialsTitle}
            </h3>
          </div>
          <div className="col-md-6 offset-md-3">
            {currentService.testimonials.map((t, i) => (
              <div key={i} className="mb-4 p-4 border rounded">
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#4A5568"
                  }}
                >
                  “{t.quote}”
                </p>
                <p
                  className="text-muted mb-0"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#4A5568",
                    opacity: 0.8
                  }}
                >
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderFinalCTASection = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-80">
            <h3
              className="sv-hero-title tp-char-animation mb-4"
              style={{
                fontFamily: "var(--tp-ff-gelder)",
                color: "#0047AB"
              }}
            >
              {currentService.finalCTATitle}
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--tp-ff-body)",
                color: "#4A5568"
              }}
            >
              {currentService.finalCTASubtext}
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link href="/contact" className="tp-btn-white background-black">
                {currentService.finalCTAPrimary}
              </Link>
              <Link href="/contact" className="tp-btn-border">
                {currentService.finalCTASecondary}
              </Link>
            </div>
            <p
              className="mt-3 text-muted"
              style={{
                fontSize: "0.9rem",
                fontFamily: "var(--tp-ff-body)",
                color: "#4A5568"
              }}
            >
              {currentService.microtrustLine}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      {/* HERO */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span
                className="service-details__subtitle tp-char-animation"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "#0047AB",
                  fontWeight: 600
                }}
              >
                {getDisplayTitle()}
              </span>
              <h4
                className="sv-hero-title tp-char-animation"
                style={{
                  fontFamily: "var(--tp-ff-gelder)",
                  color: "#0047AB"
                }}
              >
                {currentService.heroTitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-4 col-xl-5">
            <div className="service-details__banner-text mb-80">
              <p
                className="mb-30 tp_title_anim"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "#4A5568"
                }}
              >
                {currentService.heroSubtext}
              </p>
              <p
                className="tp_title_anim"
                style={{
                  fontFamily: "var(--tp-ff-body)",
                  color: "#4A5568",
                  fontWeight: 500
                }}
              >
                {currentService.heroCTA1} • {currentService.heroCTA2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={serviceImageMap[activeService]}
                  alt={`${getDisplayTitle()} service illustration`}
                  style={{ height: "auto" }}
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              {renderSectionCard(
                currentService.problemsTitle,
                currentService.problemsIntro,
                currentService.modernProblems,
                "problems"
              )}

              {renderSectionCard(
                currentService.solutionsTitle,
                currentService.solutionsIntro,
                currentService.solutions,
                "solutions"
              )}

              {renderSectionCard(
                currentService.featuresTitle,
                currentService.featuresIntro,
                currentService.features,
                "features"
              )}
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span style={{ fontFamily: "var(--tp-ff-body)", color: "#0047AB", fontWeight: 500 }}>
                  Full list of services
                </span>
              </div>
              <div className="service-details__right-category">
                {Object.keys(serviceData).map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service}`}
                    onClick={(e) =>
                      handleCategoryClick(
                        service as keyof typeof serviceData,
                        e
                      )
                    }
                    className={activeService === service ? "active" : ""}
                    style={{
                      fontFamily: "var(--tp-ff-body)",
                      color: activeService === service ? "#0047AB" : "#4A5568",
                      fontWeight: activeService === service ? 600 : 400
                    }}
                  >
                    {service
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4
                  style={{
                    fontFamily: "var(--tp-ff-gelder)",
                    color: "#0047AB"
                  }}
                >
                  {currentService.sidebarTitle}
                </h4>
                <p
                  className="mb-20"
                  style={{
                    fontFamily: "var(--tp-ff-body)",
                    color: "#4A5568"
                  }}
                >
                  {currentService.rightDescription}
                </p>
                <Link className="tp-btn-white background-black" href="/contact">
                  {currentService.callToActionLinkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC SECTIONS */}
      {renderProcessSection()}
      {renderWhyChooseSection()}
      {/* {renderTestimonialsSection()}
      {renderFinalCTASection()} */}
    </div>
  );
}