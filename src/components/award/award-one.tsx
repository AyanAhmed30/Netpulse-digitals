"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/img/home-01/award/award1.png";
import a_2 from "@/assets/img/home-01/award/award2.png";
import a_3 from "@/assets/img/home-01/award/award3.png";
import a_4 from "@/assets/img/home-01/award/award4.png";
import a_5 from "@/assets/img/home-01/award/award5.png";
import a_6 from "@/assets/img/home-01/award/award6.png";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    subtitle: "1",
    title: "Top Entertainment App Developers",
    date: "2023",
  },
  {
    id: 2,
    img: a_2,
    subtitle: "2",
    title: "Top 1000 companies",
    date: "2023",
  },
  {
    id: 3,
    img: a_3,
    subtitle: "3",
    title: "Horizon Gold Award Winner",
    date: "2024",
  },
  {
    id: 4,
    img: a_4,
    subtitle: "4",
    title: "Rank Watch Top Web Development Agency.",
    date: "2025",
  },
  {
    id: 5,
    img: a_5,
    subtitle: "5",
    title: "INC. 5000 Fastest Growing Companies",
    date: "2023",
  },
  {
    id: 6,
    img: a_6,
    subtitle: "6",
    title: "Expertise.com Best Digital Marketing Agency",
    date: "2025",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <style jsx>{`
        .tp-award-title-box .tp-section-title {
          font-size: 4rem;
          font-weight: 700;
          font-family: var(--tp-ff-gelder);
          color: #0047AB;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .tp-award-title-box .tp-section-title span {
          color: #0047AB;
        }
        .tp-award-list-content-left p {
          font-family: var(--tp-ff-gelder);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0047AB;
          margin-bottom: 0;
          transition: all 0.3s ease;
        }
        .tp-award-list-content-left span {
          font-family: var(--tp-ff-body);
          font-size: 1.15rem;
          color: #4A5568;
          margin-right: 25px;
        }
        .tp-award-list-content-right span {
          font-family: var(--tp-ff-body);
          font-size: 1.15rem;
          color: #4A5568;
        }
        .tp-award-list-item {
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 71, 171, 0.1);
          padding: 25px 0;
        }
        .tp-award-list-item:hover .tp-award-list-content-left p {
          transform: translateX(10px);
        }
      `}</style>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Awards & Recognitions
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;
