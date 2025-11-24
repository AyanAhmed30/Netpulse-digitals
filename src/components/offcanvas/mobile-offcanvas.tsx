"use client";

import React from "react";
import Image from "next/image";
import {
  Behance,
  CloseTwo,
  Dribble,
  Facebook,
  InstagramTwo,
  Twitter,
  Youtube,
} from "../svg";
import { useTheme } from "next-themes";

// images
import logo from "@/assets/img/logo/logo.png";
import logoWhite from "@/assets/img/logo/logo-white.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";
import { LinkedIn, TwitterX } from "../svg/social";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  const { theme } = useTheme();

  // Fix hydration mismatch:
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Logo logic (safe for SSR)
  const renderLogo = () => {
    if (!mounted) {
      return <Image src={logo} alt="logo" />;
    }
    return <Image src={theme === "dark" ? logoWhite : logo} alt="logo" />;
  };

  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="#">{renderLogo()}</Link>
            </div>

            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>

          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>
                Netpulse Digital develops, designs & delivers websites &
                creative campaigns that drive results
              </p>
            </div>

            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>

            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image
                          style={{ width: "100%", height: "auto" }}
                          src={item}
                          alt="gallery-img"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <Link href="tel:+18322208552">+1 832 220 8552</Link>
                </li>
                <li>
                  <Link href="mailto:netpulsedigitalS@gmail.com">
                    netpulsedigitalS@gmail.com
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/WFVCTF3hBK2Bse8ZA"
                    target="_blank"
                  >
                    15631 Blue Ash Dr, Houston, <br /> TX 77090, United States
                  </Link>
                </li>
              </ul>
            </div>

            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/NetpulseDigital"
                  >
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/netpulsedigitals"
                  >
                    <InstagramTwo />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/net-pulse-digital"
                  >
                    <LinkedIn />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.x.com/@netpulsedigital"
                  >
                    <TwitterX />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
