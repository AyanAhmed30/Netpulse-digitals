// components/blog/details/blog-sidebar.tsx
import React from "react";
import Image from "next/image";
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-2.jpg";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
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
    ? blog_data.find(blog => blog.id == Number(currentBlogId) || blog.slug === currentBlogId)
    : null;
  
  // Get tags for current blog or all tags if no current blog
  const blogTags = currentBlog?.tags || [];
  
  // Get recent posts with images
  const rc_posts = [...blog_data.filter((b) => b.img)].slice(0, 3);
  
  // Get categories
  const categories = Array.from(new Set(blog_data.map(blog => blog.category)));

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image src={avatar} alt="avatar" style={{ height: "auto" }} />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Mark Hopkins</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form action="#">
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search product" />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/blog?category=${encodeURIComponent(category)}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
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
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
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
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <Link href="#">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}