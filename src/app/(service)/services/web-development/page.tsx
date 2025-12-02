import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

// 1. Define the explicit Props interface for the Next.js Page Component
interface Props {
  params: {
    // Must match the dynamic segment in the route: /services/[slug]
    slug: string; 
  };
  // searchParams are included for completeness, though unused here
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Use 'ai-automation' as a safer fallback if slug is somehow missing
  const slug = params.slug || "web-development"; 
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  
  return {
    title: `Netpulse Digital - ${title} Details page`,
  };
}

// 2. Apply the Props interface to the functional component
const ServiceDetailsPage: React.FC<Props> = ({ params }) => {
  // We use params.slug, which is now correctly typed
  return <ServiceDetailsMain slug={params.slug} />;
};

export default ServiceDetailsPage;