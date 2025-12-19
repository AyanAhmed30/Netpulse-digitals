// components/blog/details/blog-details-related-posts.tsx
import React from "react";
import { blog_home_five, blog_data } from "@/data/blog-data";
import BlogItemTwo from "../blog-item/blog-item-2";
import { IBlogDT } from "@/types/blog-d-t";

interface BlogDetailsRelatedPostsProps {
  id: string; // Accept the id prop
}

export default function BlogDetailsRelatedPosts({
  id,
}: BlogDetailsRelatedPostsProps) {
  // Find the current blog to exclude it from related posts
  const currentBlog = blog_data.find(
    (blog) => blog.slug === id || blog.id == Number(id)
  );

  // Get related posts (exclude current blog and limit to 3)
  const relatedBlogs = blog_data
    .filter(
      (blog) =>
        blog.category === currentBlog?.category && blog.id !== currentBlog?.id
    )
    .slice(0, 3);

  // Fallback to home five if no related posts found
  const blog_items =
    relatedBlogs.length > 0 ? relatedBlogs : [...blog_home_five].slice(0, 3);

  return (
    <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-realated-title-box text-center mb-50">
              <h3
                className="blog-details-realated-title"
                style={{ fontFamily: "var(--tp-ff-gelder)", color: "#0047AB" }}
              >
                Related posts
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_items.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <BlogItemTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
