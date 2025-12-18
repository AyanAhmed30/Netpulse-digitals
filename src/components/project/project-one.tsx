"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectOne = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Define desired category order by ID: 
  // 4: Digital Marketing
  // 1: Web Development
  // 5: Mobile App Development
  // 3: UI/UX & Creative Design
  // 2: AI & Automation
  const desiredOrderIds = [4, 1, 5, 3, 2];

  const projectItems = desiredOrderIds
    .map(id => {
      const category = portfolioData.find(cat => cat.id === id);
      if (category && category.projects.length > 0) {
        return {
          project: category.projects[0],
          categoryId: category.id
        };
      }
      return null;
    })
    .filter((item): item is { project: typeof portfolioData[0]['projects'][0], categoryId: number } => item !== null);

  useGSAP(() => {
    // Stagger animation for project cards
    gsap.fromTo(
      ".project-showcase-card",
      { opacity: 0, y: 100, rotateY: -15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-showcase-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    // Section title animation
    gsap.fromTo(
      ".project-showcase-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-showcase-section",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".project-showcase-subtitle",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-showcase-section",
          start: "top 70%",
        },
      }
    );
  }, []);

  // Individual card hover animations
  useEffect(() => {
    if (hoveredIndex !== null) {
      gsap.to(`.project-showcase-card`, {
        opacity: (index) => (index === hoveredIndex ? 1 : 0.4),
        scale: (index) => (index === hoveredIndex ? 1.02 : 1),
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(`.project-showcase-card:nth-child(${hoveredIndex + 1}) .project-img-wrapper`, {
        scale: 1.08,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(`.project-showcase-card:nth-child(${hoveredIndex + 1}) .project-overlay`, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(`.project-showcase-card`, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(`.project-showcase-card .project-img-wrapper`, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(`.project-showcase-card .project-overlay`, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [hoveredIndex]);

  return (
    <section className="project-showcase-section py-120">
      <style>{`
        .project-showcase-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(223, 233, 243, 0.3) 100%);
          padding: 120px 0;
        }

        /* Media queries moved to bottom */

        .project-showcase-header {
          margin-bottom: 80px;
          text-align: center;
        }

        .project-showcase-title {
          font-size: 48px;
          font-weight: 800;
          font-family: var(--tp-ff-heading); /* Added font variable */
          line-height: 1.2;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #005FEE 0%, #0051D5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-showcase-subtitle {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 500;
          font-family: var(--tp-ff-p); /* Added font variable */
          max-width: 600px;
          margin: 0 auto;
        }

        .project-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .project-showcase-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          background: white;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          /* Fixed height deleted to allow content to dictate height or flex alignment */
          display: flex;
          flex-direction: row; /* Changed to row for horizontal layout */
          perspective: 1000px;
          align-items: stretch; /* Ensure both sides are equal height */
        }

        .project-showcase-card.reversed {
          flex-direction: row-reverse;
        }
        
        .project-showcase-grid {
           /* Since cards are now wide, we might want 1 column grid */
           display: grid;
           grid-template-columns: 1fr;
           gap: 60px;
           margin-bottom: 60px;
           max-width: 1200px; /* Limit width for cleaner look */
           margin-left: auto;
           margin-right: auto;
        }

        .project-showcase-card:hover {
          box-shadow: 0 40px 100px rgba(0, 95, 238, 0.15);
          transform: translateY(-8px);
        }

        .project-img-wrapper {
          position: relative;
          width: 55%; /* Roughly 55% image */
          min-height: 400px; /* Ensure meaningful height */
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7f9 0%, #dfe9f3 100%);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .project-showcase-card.active .project-img-wrapper {
          /* height adjustment not needed in row mode usually, removing active height change to keep layout stable */
        }

        .project-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(116, 130, 150, 0.9) 0%, rgba(126, 133, 145, 0.8) 100%);
          display: flex;
          align-items: center; /* Center Vertically */
          justify-content: center; /* Center Horizontally */
          padding: 30px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .overlay-content {
          width: 100%;
          text-align: center;
        }

        .overlay-content p {
          color: white;
          font-size: 14px;
          margin-bottom: 12px;
          opacity: 0.95;
          font-family: var(--tp-ff-p); /* Added font variable */
          line-height: 1.6;
          display: none; /* Hide description as per request to focus on button */
        }

        .overlay-btn {
          display: inline-block;
          padding: 14px 28px;
          background: white;
          color: #005FEE;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: var(--tp-ff-body);
        }

        .overlay-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-content {
          flex: 1;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: white;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 15px;
        }

        .project-number {
          font-size: 48px;
          font-weight: 900;
          font-family: var(--tp-ff-heading); /* Added font variable */
          background: linear-gradient(135deg, #005FEE 0%, #0051D5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
          line-height: 1;
        }

        .project-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(0, 95, 238, 0.1);
          color: #005FEE;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 800;
          font-family: var(--tp-ff-heading); /* Added font variable */
          color: #1a1a1a;
          margin-bottom: 14px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-description {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.7;
          font-family: var(--tp-ff-p); /* Added font variable */
          margin-bottom: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }

        .meta-item {
          flex: 1;
        }

        .meta-label {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          margin-bottom: 6px;
          display: block;
        }

        .meta-value {
          font-size: 16px;
          font-weight: 700;
          font-family: var(--tp-ff-heading); /* Added font variable */
          color: #1a1a1a;
        }

        .project-tech {
          margin-bottom: 20px;
        }

        .tech-label {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          margin-bottom: 10px;
          display: block;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 6px 12px;
          background: rgba(0, 95, 238, 0.08);
          color: #005FEE;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 95, 238, 0.2);
        }

        .tech-tag:hover {
          background: rgba(0, 95, 238, 0.15);
          border-color: rgba(0, 95, 238, 0.4);
          transform: translateY(-2px);
        }

        .project-action {
          display: flex;
          gap: 12px;
        }

        .project-btn {
          flex: 1;
          padding: 12px 20px;
          background: linear-gradient(135deg, #005FEE 0%, #0051D5 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .project-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 95, 238, 0.3);
        }

        .project-btn-secondary {
          background: rgba(0, 95, 238, 0.1);
          color: #005FEE;
          border: 1px solid rgba(0, 95, 238, 0.3);
        }

        .project-btn-secondary:hover {
          background: rgba(0, 95, 238, 0.15);
          border-color: #005FEE;
          box-shadow: 0 10px 30px rgba(0, 95, 238, 0.15);
        }

        /* Decorative elements */
        .project-showcase-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 95, 238, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .project-showcase-section::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 95, 238, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .scroll-indicator {
          text-align: center;
          margin-top: 40px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .indicator-text {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          font-weight: 600;
          font-family: var(--tp-ff-body); /* Added font variable */
          margin-bottom: 10px;
        }

        .indicator-arrow {
          font-size: 20px;
          color: #005FEE;
        }

        /* MEDIA QUERIES MOVED TO BOTTOM FOR OVERRIDE */
        @media (max-width: 1200px) {
             /* Handled by main grid definition */
        }

        @media (max-width: 992px) {
          .project-showcase-card {
             flex-direction: column;
             height: auto; /* Allow auto height on mobile */
          }
          /* Ensure reversed doesn't break mobile column layout */
          .project-showcase-card.reversed {
             flex-direction: column;
          }

          .project-img-wrapper {
             width: 100%;
             min-height: 250px; /* Reduces height on smaller screens */
             height: auto;
          }
           .project-showcase-title {
            font-size: 36px;
          }
          .project-content {
            padding: 25px; /* Reduce padding */
          }
          .project-number {
            font-size: 36px;
          }
          .project-title {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .project-showcase-section {
            padding: 60px 0;
          }
        }

        @media (max-width: 576px) {
          .project-showcase-title {
            font-size: 28px;
          }
          .project-meta {
            flex-direction: column;
            gap: 15px;
          }
          .project-action {
            flex-direction: column;
          }
          .project-img-wrapper {
             min-height: 200px; 
          }
        }
      `}</style>

      <div className="container">
        {/* Header Section */}
        <div className="project-showcase-header">
          <h2 className="tp-section-title tp-char-animation">Featured Projects</h2>
          <p className="project-showcase-subtitle">
            Showcasing our latest and greatest work across various industries and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="project-showcase-grid">
          {projectItems.map(({ project, categoryId }, index) => (
            <div
              key={project.id}
              className={`project-showcase-card ${index % 2 !== 0 ? 'reversed' : ''} ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="project-img-wrapper">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-100"
                  priority={index < 3}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    {/* Link to category portfolio */}
                    <Link
                      href={{
                        pathname: '/portfolio-details-1',
                        query: { id: categoryId }
                      }}
                      className="overlay-btn"
                    >
                      View Complete Portfolio
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="project-content">
                <div>
                  <div className="project-header">
                    <span className="project-badge">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Meta Info */}
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <div className="meta-value">{project.client}</div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <div className="meta-value">{project.year}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-tech">
                      <span className="tech-label">Tech Stack</span>
                      <div className="tech-list">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="tech-badge">
                            {/* Assuming tech tag style is needed, reused from previous code but kept simple */}
                            <span className="tech-tag">{tech}</span>
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tech-tag">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}

              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
};

export default ProjectOne;