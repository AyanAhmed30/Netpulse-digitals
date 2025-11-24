import React from "react";
import { Metadata } from "next";
import CartMain from "@/pages/cart/cart-main";

export const metadata: Metadata = {
  title: "Netpulse Digital - Cart page",
};

const CartPage = () => {
  return (
    <CartMain/>
  );
};

export default CartPage;
