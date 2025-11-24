import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug || "digital-marketing"; // fallback to digital-marketing if slug is undefined
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  return {
    title: `Netpulse Digital - ${title} Details page`,
  };
}

const ServiceDetailsPage = ({ params }: { params: { slug: string } }) => {
  return <ServiceDetailsMain slug={params.slug} />;
};

export default ServiceDetailsPage;