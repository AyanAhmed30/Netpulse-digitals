// components/blog/details/blog-sidebar.tsx
import React from "react";
import Image from "next/image";
import avatar from "@/assets/img/logo/logo-h.png";
import banner from "@/assets/img/logo/logo-h.png";
import { Search } from "../svg";
import { blog_data } from "@/data/blog-data";
import Link from "next/link";
import { IBlogDT } from "@/types/blog-d-t";

interface BlogSidebarProps {
  currentBlogId?: string; // Optional prop for current blog ID
}

export default function BlogSidebar({ currentBlogId }: BlogSidebarProps) {
  // Get current blog if ID is provided
  const currentBlog = currentBlogId
    ? blog_data.find(
        (blog) =>
          blog.id == Number(currentBlogId) || blog.slug === currentBlogId
      )
    : null;

  // Get tags for current blog or all tags if no current blog
  const blogTags = currentBlog?.tags || [];

  // Get recent posts with images
  // Get recent posts with images - UPDATED for Netpulse Digital
  const rc_posts = [...blog_data.filter((b) => b.img && b.status !== "draft")]
    .sort((a, b) => {
      // Featured first, then by date (desc)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map((post) => {
      // Replace titles based on your request
      let title = post.title;
      if (title === "Design To Remember") {
        title = "Digital Marketing";
      } else if (title === "Simplistic photo setup") {
        title = "Web Development";
      } else if (title === "Future Business Ideas.") {
        title = "AI Automation";
      }
      return { ...post, title };
    })
    .slice(0, 3);

  // Get categories
  const categories = Array.from(
    new Set(blog_data.map((blog) => blog.category))
  );

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image
              src={avatar}
              alt="Alex Morgan, Senior Growth Strategist at Netpulse Digital"
              width={100}
              height={100}
              style={{
                height: "auto",
                borderRadius: "10%",
                border: "3px solid #f1f5f9",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            />
          </div>
          <div className="sidebar__author-content mt-3">
            <h4
              className="sidebar__author-title"
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#0047AB",
                marginBottom: "0.25rem",
                fontFamily: "var(--tp-ff-gelder)",
              }}
            >
              Netpulse Digital
            </h4>
            <p
              className="text-muted mb-2"
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#475569",
                fontFamily: "var(--tp-ff-gelder)",
              }}
            >
              Admin
            </p>
          </div>
        </div>
      </div>

      <div className="sidebar__widget mb-65">
        <h3
          className="sidebar__widget-title"
          style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB" }}
        >
          Category
        </h3>
        <div className="sidebar__widget-content">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px", // ← adds consistent spacing between items
              fontFamily: "var(--tp-ff-gelder)",
            }}
          >
            {categories.map((category, index) => (
              <li
                key={index}
                style={{
                  fontSize: "1rem", // ← larger text (≈17.6px)
                  fontWeight: 400, // semi-bold for emphasis
                  color: "#0f172a", // dark slate (Netpulse professional tone)
                  letterSpacing: "-0.01em",
                  padding: "6px 0", // subtle vertical padding for balance
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3
          className="sidebar__widget-title"
          style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB" }}
        >
          Recent Post
        </h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${item.slug}`}>
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={item.img!}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span style={{ fontFamily: "var(--tp-ff-gelder)" }}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link
                      href={`/blog-details/${item.slug}`}
                      style={{ fontFamily: "var(--tp-ff-gelder)" }}
                    >
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3
          className="sidebar__widget-title"
          style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB" }}
        >
          Tags
        </h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {blogTags.length > 0 ? (
              blogTags.map((tag, index) => (
                <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  {tag}
                </Link>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <Image src={banner} alt="banner" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3
          className="sidebar__widget-title"
          style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB" }}
        >
          Follow Us
        </h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <Link
              target="_blank"
              href="https://www.facebook.com/NetpulseDigital"
            >
              <i
                className="fa-brands fa-facebook"
                style={{
                  color: "#0047AB",
                }}
              ></i>
            </Link>
            <Link target="_blank" href="https://www.x.com/@netpulsedigital">
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#0047AB" }}
              ></i>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/net-pulse-digital"
            >
              <i
                className="fa-brands fa-linkedin-in"
                style={{ color: "#0047AB" }}
              ></i>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/netpulsedigitals"
            >
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#0047AB" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
