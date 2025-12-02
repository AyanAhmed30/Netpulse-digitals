import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

// generateMetadata now receives params as a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // Await the params Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "creative-design"; 
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  
  return {
    title: `Netpulse Digital - ${title} Details page`,
  };
}

// Main page component also receives params as a Promise in Next.js 15+
const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // Await the params Promise
  const resolvedParams = await params;
  // Pass the slug to your main component
  return <ServiceDetailsMain slug={resolvedParams.slug} />;
};

export default ServiceDetailsPage;