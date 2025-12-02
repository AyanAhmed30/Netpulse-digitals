import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

// Use direct destructuring and typing for generateMetadata arguments
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Use 'ai-automation' as a fallback if slug is somehow undefined
  const slug = params.slug || "digital-marketing"; 
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  
  return {
    title: `Netpulse Digital - ${title} Details page`,
  };
}

// Use direct destructuring and typing for the main component arguments
const ServiceDetailsPage = ({ params }: { params: { slug: string } }) => {
  // Pass the slug to your main component
  return <ServiceDetailsMain slug={params.slug} />;
};

export default ServiceDetailsPage;