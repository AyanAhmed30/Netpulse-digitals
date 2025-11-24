import React from "react";
import { Metadata } from "next";
import ShopMain from "@/pages/shop/shop-main";

export const metadata: Metadata = {
  title: "Netpulse Digital - Shop page",
};

const ShopPage = () => {
  return (
    <ShopMain/>
  );
};

export default ShopPage;
