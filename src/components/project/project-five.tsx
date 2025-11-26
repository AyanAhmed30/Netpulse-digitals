import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";

type IProps = {
  style_2?: boolean;
};

export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      
      <div className="container">
        <div className="row gx-140">
          {portfolioData.map((category) => (
            <div key={category.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="View<br>Projects"
              >
                <Link
                  className="cursor-hide"
                  href={{
                    pathname: "/portfolio-details-1",
                    query: { id: category.id },
                  }}
                >
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={category.thumbnail}
                        alt={category.title}
                        width={600}
                        height={400}
                        style={{ height: "auto", width: "100%" }}
                        className="hover-scale-img"
                      />
                    </div>
                  </span>
                  
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{category.category}</span>
                  </div>
                  
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{category.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{category.title}</h4>
                    <p className="tp-project-5-2-count text-muted mt-2 mb-0">
                      {category.projects.length} Projects
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${
                    style_2 ? "style-2" : ""
                  } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio-details-1"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}