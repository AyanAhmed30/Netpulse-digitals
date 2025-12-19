import React, { useState } from "react";
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
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // set replyto to user email
    const userEmail = formData.get("email") as string;
    formData.set("replyto", userEmail);

    formData.append("access_key", "1bb5a4c4-c414-4070-9637-5a6a7228146e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Subscribed successfully!");
        form.reset();
      } else {
        setResult("Something went wrong, try again!");
      }
    } catch (error) {
      setResult("Error submitting form!");
    }
  };

  return (
    <footer className={`${topCls}`} style={{ background: whiteFooter ? "" : "linear-gradient(135deg, #0047AB 0%, #002D6B 100%)", color: whiteFooter ? "" : "white" }}>
      <div
        className={`tp-footer-2-area pt-60 pb-20 ${whiteFooter ? "tp-footer-white" : ""
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
                  <p style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem", lineHeight: "1.5" }}>
                    Ready to boost your digital presence? Reach out and let’s make it happen.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title" style={{ color: "white", fontFamily: "var(--tp-ff-gelder)", fontSize: "1.4rem" }}>Sitemap</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li className="mb-1">
                      <Link href="/" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>Home</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/about-us" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>About</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/service" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>Services</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/contact" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>Contact</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/blog-modern" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title" style={{ color: "white", fontFamily: "var(--tp-ff-gelder)", fontSize: "1.4rem" }}>Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link
                      href="https://maps.app.goo.gl/WFVCTF3hBK2Bse8ZA"
                      target="_blank"
                      style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}
                    >
                      15631 Blue Ash Dr, Houston, TX 77090, United States
                    </Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="tel:+18322208552" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>+1 832 220 8552</Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="mailto:netpulsedigitalS@gmail.com" style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}>
                      netpulsedigitalS@gmail.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title" style={{ color: "white", fontFamily: "var(--tp-ff-gelder)", fontSize: "1.4rem" }}>
                    Subscribe to our newsletter
                  </h4>

                  <form onSubmit={handleSubmit}>
                    <div className="tp-footer-2-input p-relative">
                      <input
                        type="email"
                        name="email"
                        style={{ fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem" }}
                        placeholder="Enter your email..."
                        required
                      />
                      <input
                        type="hidden"
                        name="replyto"
                        value="Thanks for subscribing to our newsletter! We will keep you updated with the latest news. — Netpulse Digital" // will set dynamically in handleSubmit
                      />
                      <input
                        type="hidden"
                        name="autoresponse"
                        value="Thanks for subscribing to our newsletter! We will keep you updated with the latest news. — Netpulse Digital"
                      />
                      <button type="submit">
                        <RightArrow
                          clr={whiteFooter ? "currentcolor" : "#F3F3F4"}
                        />
                      </button>
                    </div>
                    {result && <p className="mt-2 text-success">{result}</p>}
                  </form>
                </div>
              </div>
            </div>
            {/* End Newsletter */}
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${whiteFooter ? "tp-copyright-white" : ""
          }`}
        style={{ background: whiteFooter ? "" : "rgba(0,0,0,0.1)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "0.9rem" }}>
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
                  style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem", marginLeft: "25px", border: "none", background: "none", padding: 0, textTransform: "none" }}
                >
                  Facebook
                </Link>
                <Link
                  className="mb-10"
                  target="_blank"
                  href="https://www.instagram.com/netpulsedigitals/"
                  style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem", marginLeft: "25px", border: "none", background: "none", padding: 0, textTransform: "none" }}
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  className="mb-10"
                  href="https://www.linkedin.com/company/net-pulse-digital"
                  style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem", marginLeft: "25px", border: "none", background: "none", padding: 0, textTransform: "none" }}
                >
                  Linkedin
                </Link>
                <Link
                  target="_blank"
                  className="mb-10"
                  href="https://www.x.com/@netpulsedigital"
                  style={{ color: "white", fontFamily: "var(--tp-ff-body)", fontSize: "1.1rem", marginLeft: "25px", border: "none", background: "none", padding: 0, textTransform: "none" }}
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
