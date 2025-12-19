// components/blog/details/blog-details-breadcrumb.tsx
import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import avatar from "@/assets/img/inner-blog/blog-details/avatar/avatar-2.jpg";
import { blog_data } from "@/data/blog-data";

interface BlogDetailsBreadcrumbProps {
  id: string; // Accept string for both ID and slug
}

export default function BlogDetailsBreadcrumb({
  id,
}: BlogDetailsBreadcrumbProps) {
  // First try to find by slug, then by ID
  let blog = blog_data.find((item) => item.slug === id);

  // If not found by slug, try to find by ID
  if (!blog) {
    blog = blog_data.find((item) => item.id == Number(id));
  }

  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: blog?.img
            ? `url(${blog.img.src})`
            : `url(/assets/img/inner-blog/blog-details/blog-details-1.jpg) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span
                  style={{
                    fontFamily: "var(--tp-ff-gelder)",
                  }}
                  className="blog-details-meta"
                >
                  {blog?.category} <i>{blog?.date}</i>
                </span>
                <h4
                  className="blog-details-title tp-char-animation"
                  style={{
                    fontFamily: "var(--tp-ff-gelder)",
                    color: "#fff",
                  }}
                >
                  {blog?.title}
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <Image
                    src={blog?.avatar || avatar}
                    alt={blog?.author || "author"}
                  />
                  <span
                    style={{
                      fontFamily: "var(--tp-ff-gelder)",
                    }}
                  >
                    {blog?.author} / <i>5 min</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
