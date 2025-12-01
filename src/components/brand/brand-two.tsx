import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Leaf } from "../svg";

import b_1 from "@/assets/img/home-01/brand/fast.png";
import b_2 from "@/assets/img/home-01/brand/logo2.png";
import b_3 from "@/assets/img/home-01/brand/logo3.png";
import b_4 from "@/assets/img/home-01/brand/logo4.png";
import b_5 from "@/assets/img/home-01/brand/timeless.png";
import b_6 from "@/assets/img/home-01/brand/moizzy.png";
import b_7 from "@/assets/img/home-01/brand/premier.png";
import b_8 from "@/assets/img/home-01/brand/klaude.png";
import b_9 from "@/assets/img/home-01/brand/pinnacle.png";
import b_10 from "@/assets/img/home-01/brand/logo100.png";
import b_11 from "@/assets/img/home-01/brand/logo11.png";
import { headers } from "next/headers";

const brand_data = [
  { id: 1, brand: b_1, height: 70, width: "auto" },
  { id: 2, brand: b_2 },
  { id: 3, brand: b_3 },
  { id: 4, brand: b_4 },
  { id: 5, brand: b_5, height: 70, width: "auto" },
  { id: 6, brand: b_6, height: 70, width: "auto" },
  { id: 7, brand: b_7, height: 70, width: "auto" },
  { id: 8, brand: b_8, height: 70, width: "auto" },
  { id: 9, brand: b_9, height: 70, width: "auto" },
  { id: 10, brand: b_10, height: 70, width: "auto" },
  { id: 11, brand: b_11 },
];

export function BrandItems() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Until mounted, do NOT invert (prevents hydration mismatch)
  const wrapperStyle = mounted
    ? theme === "light"
      ? { filter: "invert(1)" }
      : { filter: "invert(0)" }
    : { filter: "invert(0)" };

  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div
            className="tp-brand-4-item p-relative brand-no-hover"
            style={wrapperStyle}
          >
            <Image src={item.brand} alt="brand" style={{ height: item.height ? item.height : "auto", width: item.width ? item.width : ""}} />
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
