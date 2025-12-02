import React, { Suspense } from "react";
import { Metadata } from "next";
import PortfolioDetailsThreeMain from "@/pages/portfolio/details/portfolio-details-3-main";

export const metadata: Metadata = {
  title: "Netpulse Digital - Portfolio Details 3 page",
};

const PortfolioDetailsThreePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioDetailsThreeMain />
    </Suspense>
  );
};

export default PortfolioDetailsThreePage;
