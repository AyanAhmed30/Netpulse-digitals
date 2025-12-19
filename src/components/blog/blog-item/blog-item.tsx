// components/blog/blog-item/blog-item.tsx
import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItem({ item }: { item: IBlogDT }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        <Image src={item.img!} alt="blog-img" style={{ height: "auto" }} />
        <div className="tp-blog-meta">
          <span
            style={{
              backgroundColor: "#0047AB",
              color: "#fff",
              fontFamily: "var(--tp-ff-gelder)",
            }}
          >
            {item.date}
          </span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span
          style={{
            fontFamily: "var(--tp-ff-gelder)",
          }}
        >
          {item.category}
        </span>
        <h4
          className="tp-blog-title-sm"
          style={{
            color: "#0047AB",
            fontFamily: "var(--tp-ff-gelder)",
          }}
        >
          <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
