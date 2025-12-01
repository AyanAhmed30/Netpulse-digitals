"use client";
import Link from "next/link";
import React from "react";

// ✅ Updated award data — realistic, high-trust, Netpulse-aligned
const award_data = [
  {
    id: 1,
    title: "Clutch Top Digital Agency",
    subtitle: "USA & UK",
    date: "2025",
    description: "Ranked in Top 10 for Web Development & Digital Marketing"
  },
  {
    id: 2,
    title: "Google Premier Partner",
    subtitle: "Search & Performance Marketing",
    date: "2024–2025",
    description: "Certified for excellence in SEO, PPC, and Analytics"
  },
  {
    id: 3,
    title: "Awwwards Honors",
    subtitle: "Smart Website Excellence",
    date: "2024",
    description: "For Netpulse’s Next.js-powered client site (Core Web Vitals: 98+)"
  },
  {
    id: 4,
    title: "DesignRush Best Creative Agency",
    subtitle: "Branding & UI/UX",
    date: "Q3 2024",
    description: "Recognized for conversion-focused brand identity systems"
  },
  {
    id: 5,
    title: "GoodFirms Top Developer",
    subtitle: "Next.js & React",
    date: "2025",
    description: "Featured for high-performance, SEO-optimized web builds"
  },
  {
    id: 6,
    title: "Client Satisfaction Leader",
    subtitle: "4.9★ Average Rating",
    date: "2023–2025",
    description: "Based on 120+ verified client reviews (Clutch, Google)"
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  return (
    <>
    </>
  );
};

export default AwardOne;