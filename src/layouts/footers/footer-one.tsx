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
      <div
        className="tp-footer-area pt-60 pb-0"
        style={{
          background: "linear-gradient(135deg, #0047AB 0%, #002D6B 100%)",
          color: "white",
        }}
      >
        <div className="container-fluid">
          <div className="tp-footer-wrap pb-4">
            <div className="row align-items-start">
              <div className="col-xl-4 col-lg-5">
                <div className="tp-footer-menu menu-anim">
                  <ul className="tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                        style={{
                          padding: "1rem",
                        }}
                      >
                        <Link
                          href={item.link}
                          style={{
                            color: "white",
                            fontFamily: "var(--tp-ff-body)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4
                      className="tp-footer-big-title footer-big-text"
                      style={{
                        color: "white",
                        fontFamily: "var(--tp-ff-gelder)",
                        fontSize: "3.5rem",
                        lineHeight: "1.1",
                        marginBottom: "15px",
                      }}
                    >
                      Ready to Grow Your Business? Let’s Talk.
                    </h4>
                    <p
                      className="mt-1"
                      style={{
                        color: "white",
                        fontFamily: "var(--tp-ff-body)",
                        fontSize: "1.1rem",
                        lineHeight: "1.5",
                      }}
                    >
                      Whether you need a new website, brand refresh, marketing
                      system, or AI solution — we’re here to help you scale.
                    </p>
                    <div className="d-flex gap-3 mt-2">
                      <Link
                        href="/contact"
                        style={{
                          display: "inline-block",
                          color: "white",
                          border: "1px solid white",
                          backgroundColor: "transparent",
                          transition: "all 0.3s ease",
                          fontFamily: "var(--tp-ff-body)",
                          fontWeight: 600,
                          borderRadius: "50px",
                          padding: "10px 30px",
                          fontSize: "1.2rem",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.color = "#0047AB";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "white";
                        }}
                      >
                        Contact Us
                      </Link>
                    </div>
                    <small
                      className="d-block mt-1"
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "var(--tp-ff-body)",
                        fontSize: "0.95rem",
                      }}
                    >
                      No obligations. No pressure. 100% value.
                    </small>
                  </div>
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="tp-footer-widget">
                        <h4
                          className="tp-footer-title tp_fade_bottom"
                          style={{
                            color: "white",
                            fontFamily: "var(--tp-ff-gelder)",
                            fontSize: "1.4rem",
                            marginBottom: "10px",
                          }}
                        >
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link
                              href="mailto:netpulsedigitalS@gmail.com"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
                            >
                              netpulsedigitalS@gmail.com
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <Link
                              href="https://maps.app.goo.gl/WFVCTF3hBK2Bse8ZA"
                              target="_blank"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
                            >
                              15631 Blue Ash Dr, Houston, <br /> TX 77090,
                              United States
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="tp-footer-widget">
                        <h4
                          className="tp-footer-title tp_fade_bottom"
                          style={{
                            color: "white",
                            fontFamily: "var(--tp-ff-gelder)",
                            fontSize: "1.4rem",
                            marginBottom: "10px",
                          }}
                        >
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.facebook.com/NetpulseDigital"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
                            >
                              Facebook
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.instagram.com/netpulsedigitals/"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
                            >
                              Instagram
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.linkedin.com/company/net-pulse-digital"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
                            >
                              Linkedin
                            </Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link
                              target="_blank"
                              href="https://www.x.com/@netpulsedigital"
                              style={{
                                color: "white",
                                fontFamily: "var(--tp-ff-body)",
                                fontSize: "1.1rem",
                              }}
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
        <div
          className="container-fluid"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="tp-copyright-wrap" style={{ padding: "15px 0" }}>
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
                  <p
                    style={{
                      color: "white",
                      fontFamily: "var(--tp-ff-body)",
                      fontSize: "0.85rem",
                      margin: 0,
                    }}
                  >
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
