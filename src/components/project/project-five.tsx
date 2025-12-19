import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// This is the correct NAMED import which resolves the data warning issue for this specific file.
import { portfolioData } from "@/data/portfolio-data";

type IProps = {
  style_2?: boolean;
};

export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area ${style_2 ? "pb-30" : "pb-130"} ${style_2 ? "" : "tp-project-5-2-pt black-bg"
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
                className={`tp-project-5-2-thumb fix ${style_2 ? "mb-40" : "mb-140"} p-relative not-hide-cursor`}
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
                    {/* <span style={{ fontFamily: 'var(--tp-ff-body)', color: '#4A5568', fontWeight: '500' }}>{category.category}</span> */}
                  </div>

                  
                </Link>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .tp-project-5-2-title-sm {
            transition: all 0.3s ease;
          }
          .tp-project-5-2-thumb:hover .tp-project-5-2-title-sm {
            transform: translateX(10px);
            color: #4A5568 !important;
          }
        `}</style>

        <div className="row">
          <div className="col-xl-12">

          </div>
        </div>
      </div>
    </div>
  );
}