// components/blog/details/blog-details-area.tsx
import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import Link from "next/link";
import { blog_data } from "@/data/blog-data";
import { IBlogDT } from "@/types/blog-d-t";

interface BlogDetailsAreaProps {
  id: string; // Accept string
}

export default function BlogDetailsArea({ id }: BlogDetailsAreaProps) {
  // Find the blog by either slug or id
  let blog: IBlogDT | undefined = blog_data.find((item) => item.slug === id);
  if (!blog) {
    blog = blog_data.find((item) => item.id == Number(id));
  }

  if (!blog) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="text-center py-5">
              <h2>Blog Not Found</h2>
              <p>The requested blog post could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {/* Dynamic blog content */}
              {blog.content ? (
                <div
                  className="blog-details-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              ) : (
                <div className="blog-details-top-text">
                  <p>
                    {blog.desc ||
                      "No detailed content available for this blog post."}
                  </p>
                </div>
              )}

              {/* Tags and sharing */}
              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <Link
                        href={`/blog?category=${encodeURIComponent(
                          blog.category
                        )}`}
                      >
                        {blog.category}
                      </Link>
                      <Link
                        href={`/blog?author=${encodeURIComponent(blog.author)}`}
                      >
                        {blog.author}
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <Link href="#">Share Post</Link>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* blog details author */}
              <BlogDetailsAuthor author={blog.author} />
              {/* blog details author */}

              {/* blog details navigation */}
              <BlogDetailsNavigation currentBlogId={blog.id} />
              {/* blog details navigation */}

              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">Comments</h3>
                {/* blog details comments */}
                <BlogDetailsComments />
                {/* blog details comments */}
              </div>

             
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar currentBlogId={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
