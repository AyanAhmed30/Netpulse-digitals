"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { getCategoryById, PortfolioCategory } from "@/data/portfolio-data";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-three";

export default function PortfolioDetails() {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [category, setCategory] = useState<PortfolioCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (id) {
      const found = getCategoryById(Number(id));
      setCategory(found || null);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [category]);

  if (loading) {
    return (
      <> </>
    );
  }

  if (!category) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">404</div>
          <h2 className="not-found-title">Portfolio Category Not Found</h2>
          <p className="not-found-text">
            The portfolio category you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" className="not-found-button">
            ← Back to Home
          </Link>
        </div>
        <style jsx>{`
          .not-found-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .not-found-content {
            text-align: center;
            color: white;
            animation: fadeInUp 0.8s ease-out;
          }
          .not-found-icon {
            font-size: 120px;
            font-weight: 900;
            opacity: 0.3;
            margin-bottom: 20px;
          }
          .not-found-title {
            font-size: 32px;
            margin-bottom: 16px;
          }
          .not-found-text {
            font-size: 18px;
            margin-bottom: 32px;
            opacity: 0.9;
          }
          .not-found-button {
            display: inline-block;
            padding: 14px 32px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .not-found-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  const parallaxOffset = scrollY * 0.5;

  return (
    <>
      <HeaderEleven />
      <div className="tp-portfolio-details-area">
        {/* Animated Background */}
        <div className="animated-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        {/* Portfolio Header Section */}
        <div className="portfolio-header">
          <div className="container container-1530">

            <div className="sv-small-text-box vertical">
              <span>Explore Our Amazing Portfolio</span>

            </div>

            <div className="sv-big-text-box center">
              <h4 className="sv-big-text tp-char-animation">
                {category.title}
              </h4>
            </div>

          </div>
        </div>



        {/* Projects Grid */}
        <div className="projects-section ">
          <div className="container">
            {category.projects.map((project, index) => (
              <div key={project.id} className="project-item animate-on-scroll">
                <div className={`project-row ${index % 2 === 0 ? 'normal' : 'reversed'}`}>
                  {/* Project Image */}
                  <div className={`project-image-wrapper animate-on-scroll ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}>
                    <div className="image-container">
                      <div className="image-overlay"></div>
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={800}
                        height={600}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        className="project-image"
                        priority={index < 2}
                      />
                      <div className="image-border"></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`project-content animate-on-scroll ${index % 2 === 0 ? 'slide-from-right' : 'slide-from-left'}`}>
                    <div className="content-wrapper">
                      <span className="project-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h2 className="project-title">
                        {project.title}
                      </h2>

                      <p className="project-description">
                        {project.description}
                      </p>

                      {/* Project Meta Info */}
                      <div className="project-meta">
                        {project.client && (
                          <div className="meta-item">
                            <span className="meta-label">Client</span>
                            <strong className="meta-value">{project.client}</strong>
                          </div>
                        )}
                        <div className="meta-item">
                          <span className="meta-label">Year</span>
                          <strong className="meta-value">{project.year}</strong>
                        </div>
                      </div>

                      {/* Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="technologies">
                          <span className="tech-label">Technologies</span>
                          <div className="tech-badges">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="tech-badge" style={{ animationDelay: `${i * 0.1}s` }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Back to Portfolio Button */}
            <div className="d-flex justify-content-center align-items-center tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/contact">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">let&apos;s Start Your Project</span>
                  <span className="text-2">let&apos;s Start Your Project</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo topCls={""} />

      <style jsx>{`
        .tp-portfolio-details-area {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        /* Animated Background */
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); /* CHANGED: Light Purple to Light Blue/Pink */
          top: 50%;
          right: -200px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: -300px;
          left: 30%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, -50px) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) rotate(240deg);
          }
        }


        /* Projects Section */
        .projects-section {
          position: relative;
          padding: 40px 0 60px;
          z-index: 1;
        }

        .project-item {
          margin-bottom: 120px;
        }

        /* Directional Slide Animations */
        .slide-from-left {
          opacity: 0;
          transform: translateX(-100px);
        }

        .slide-from-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .slide-from-left.animate-in,
        .slide-from-right.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .project-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
          .sv-big-text {
  font-size: 105px;    /* Apni marzi ka size rakh lein */
  line-height: 1.2;
}


        .project-row.reversed .project-image-wrapper {
          order: 2;
        }

        .project-row.reversed .project-content {
          order: 1;
        }

        /* Project Image */
        .project-image-wrapper {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
        }

        .project-image {
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-container:hover .project-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .image-container:hover .image-overlay {
          opacity: 0.15;
        }

        .image-border {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid #667eea;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .image-container:hover .image-border {
          opacity: 0.5;
        }

        /* Project Content */
        .project-content {
          padding: 20px;
        }

        .content-wrapper {
          max-width: 500px;
        }

        .project-number {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 16px;
          letter-spacing: 2px;
        }

        .project-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #667eea;
          line-height: 1.3;
        }

        .project-description {
          font-size: 16px;
          line-height: 1.8;
          color: #6c757d;
          margin-bottom: 32px;
        }

        /* Project Meta */
        .project-meta {
          display: flex;
          gap: 40px;
          margin-bottom: 32px;
          padding: 24px 0;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }

        .meta-item {
          flex: 1;
        }

        .meta-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #adb5bd;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .meta-value {
          display: block;
          font-size: 18px;
          color: #1a1a1a;
          font-weight: 700;
        }

        /* Technologies */
        .technologies {
          margin-bottom: 32px;
        }

        .tech-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #adb5bd;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-badge {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 1px solid #dee2e6;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #495057;
          transition: all 0.3s ease;
          opacity: 0;
          animation: techBadgeAppear 0.5s ease forwards;
        }

        @keyframes techBadgeAppear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-badge:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
          transform: translateY(-2px);
        }

        /* Back Button Section */
        .back-button-section {
          text-align: center;
          padding: 60px 0 80px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 18px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .back-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .back-button:hover::before {
          left: 100%;
        }

        .back-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
        }

        .back-button svg {
          transition: transform 0.3s ease;
        }

        .back-button:hover svg {
          transform: translateX(-5px);
        }

        /* Animation Classes */
        .animate-on-scroll {
          transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .project-row.reversed .project-image-wrapper,
          .project-row.reversed .project-content {
            order: initial;
          }

          .content-wrapper {
            max-width: 100%;
          }

          .portfolio-header {
            padding: 100px 0 60px;
          }

          .main-title {
            font-size: 40px;
          }

          .project-title {
            font-size: 28px;
          }
        }

        @media (max-width: 576px) {
          .project-meta {
            flex-direction: column;
            gap: 20px;
          }

          .tech-badges {
            gap: 8px;
          }

          .tech-badge {
            font-size: 12px;
            padding: 6px 12px;
          }

          .back-button {
            width: 100%;
            justify-content: center;
          }

          .portfolio-header {
            padding: 80px 0 40px;
          }
        }
      `}</style>
    </>
  );
}