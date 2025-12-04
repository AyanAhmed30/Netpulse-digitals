// components/blog/details/blog-details-author.tsx
import React from "react";
import Image from "next/image";
import avatar from "@/assets/img/logo/logo.png"
import Link from "next/link";

interface BlogDetailsAuthorProps {
  author?: string;
}

export default function BlogDetailsAuthor({ author }: BlogDetailsAuthorProps) {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img d-flex justify-content-center align-items-center">
        <Image
          style={{ width: "130px", height: "auto", margin: "20px" }}
          src={avatar}
          alt={author || "author"}
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <Link href="https://www.facebook.com/NetpulseDigital">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="https://www.x.com/@netpulsedigital">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="https://www.linkedin.com/company/net-pulse-digital">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">From Build to Scale it</h4>
          <p>
           MVP ≠ forever. Discover the telltale signs your monolithic architecture is maxing out — slow deploys, fragile APIs, scaling bottlenecks — and how modular, cloud-native refactoring fuels sustainable growth without rewriting from scratch. 
          </p>
        </div>
      </div>
    </div>
  );
}