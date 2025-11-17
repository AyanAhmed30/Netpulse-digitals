// app/blog-details/[slug]/page.tsx
import { blog_data } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog/blog-details';
import React from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const blog = blog_data.find((blog) => blog.slug === slug);
    return {
        title: blog?.title ? blog.title : "Blog Details",
        description: blog?.desc || "Read our latest blog post for insights and information.",
    };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    
    const blog = blog_data.find((blog) => blog.slug === slug);
    const blogId = blog?.id || 1; // fallback to id 1 if not found

    return (
        <BlogDetailsMain id={blogId.toString()} />
    );
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
    return blog_data.map((blog) => ({
        slug: blog.slug,
    }));
}