// FooterOne component with reduced font size for .footer-big-text
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim";

const footer_links = [
  { link: "/portfolio-standard", title: "Projects" },
  { link: "/service", title: "What we do" },
  { link: "/about-us", title: "About" },
  { link: "/blog-modern", title: "Blog" },
  { link: "/contact", title: "Contact" },
];

export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    footerOneAnimation();
  }, []);

  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">
                      {"Let's"} Contact!
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href="mailto:netpulsedigitalS@gmail.com">
                              netpulsedigitalS@gmail.com
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <Link
                              href="https://maps.app.goo.gl/WFVCTF3hBK2Bse8ZA"
                              target="_blank"
                            >
                              15631 Blue Ash Dr, Houston, <br /> TX 77090,
                              United States
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.facebook.com/NetpulseDigital"
                            >
                              Facebook
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.instagram.com/netpulsedigitals/"
                            >
                              Instagram
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.linkedin.com/company/net-pulse-digital"
                            >
                              Linkedin
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.x.com/@netpulsedigital"
                            >
                              Twitter
                            </Link>
                          </li>
                          {/* <li className="tp_fade_bottom">
                            <Link href="#">Dribbble</Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={100} height={100} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} Netpulse Digital. All
                    rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
