import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({
  whiteFooter = false,
  topCls = "footer-top",
}: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Ready to boost your digital presence? Reach out and let’s
                    make it happen.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/blog-modern">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>

                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link
                      href="https://maps.app.goo.gl/WFVCTF3hBK2Bse8ZA"
                      target="_blank"
                    >
                      15631 Blue Ash Dr, Houston, TX 77090, United States
                    </Link>
                  </span>
                </div>

                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="tel:+18322208552">+1 832 220 8552</Link>
                  </span>
                </div>

                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="mailto:netpulsedigitalS@gmail.com">
                      netpulsedigitalS@gmail.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Section Updated */}
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>

                  <form
                    action="https://formsubmit.co/ZeeshanZahid663@gmail.com"
                    method="POST"
                  >
                    {/* Recommended hidden fields */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Email auto-reply to the user */}
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thanks for subscribing to our newsletter! We will keep you updated with the latest news."
                    />

                    <input type="hidden" name="_template" value="box" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Newsletter Subscriber!"
                    />

                    <div className="tp-footer-2-input p-relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        required
                      />
                      <button type="submit">
                        <RightArrow
                          clr={whiteFooter ? "currentcolor" : "#F3F3F4"}
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Newsletter */}
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © Netpulse
                  Digital
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link
                  className="mb-10"
                  target="_blank"
                  href="https://www.facebook.com/NetpulseDigital"
                >
                  Facebook
                </Link>
                <Link
                  className="mb-10"
                  target="_blank"
                  href="https://www.instagram.com/netpulsedigitals/"
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  className="mb-10"
                  href="https://www.linkedin.com/company/net-pulse-digital"
                >
                  Linkedin
                </Link>
                <Link
                  target="_blank"
                  className="mb-10"
                  href="https://www.x.com/@netpulsedigital"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
