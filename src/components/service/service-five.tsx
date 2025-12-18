import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "AI Automation",
    desc: "AI automation helps businesses streamline workflows, reduce manual tasks, and boost efficiency using intelligent tools and automated systems.",
    icon: s_2,
  },

  {
    id: 2,
    title: "Web Design",
    desc: "We craft visually stunning and responsive websites that deliver a seamless user experience across all devices, ensuring your brand looks perfect everywhere.",
    icon: s_1,
  },
  {
    id: 3,
    title: "Marketing",
    desc: "Our marketing strategies are designed to connect, engage, and convert your audience, making your apps and websites more impactful and memorable.",
    icon: s_3,
  },

];

// service items
export function ServiceItems() {
  const services = [
    { title: "AI Automation", icon: "", desc: "AI automation helps businesses streamline workflows, reduce manual tasks, and boost efficiency using intelligent tools and automated systems." },
    { title: "Web Design", icon: "", desc: "We craft visually stunning and responsive websites that deliver a seamless user experience across all devices, ensuring your brand looks perfect everywhere." },
    { title: "Marketing", icon: "", desc: "Our marketing strategies are designed to connect, engage, and convert your audience, making your apps and websites more impactful and memorable." }
  ];

  return (
    <>
      <div className="services-section">
        <style jsx>{`
          .services-section {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            flex-wrap: wrap;
            margin-top: 20px;
          }
          .service-card {
            flex: 1 1 30%;
            background: #fff;
            border-radius: 15px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0, 71, 171, 0.08);
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid #0047AB;
           
          }
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 71, 171, 0.12);
             border: 5px solid #0047AB;
           
            
          }
          .icon {
            font-size: 50px;
            margin-bottom: 25px;
            display: inline-block;
          }
          .service-card h3 {
            font-family: var(--tp-ff-gelder);
            font-size: 1.75rem;
            font-weight: 700;
            color: #0047AB;
            margin-bottom: 15px;
          }
          .service-card p {
            font-family: var(--tp-ff-body);
            font-size: 1.05rem;
            line-height: 1.7;
            color: #4A5568;
            margin-bottom: 0;
          }

          @media (max-width: 991px) {
            .service-card {
              flex: 1 1 45%;
            }
          }
          @media (max-width: 767px) {
            .service-card {
              flex: 1 1 100%;
            }
          }
        `}</style>

        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <style jsx>{`
                .tp-service-5-title {
                  font-family: var(--tp-ff-gelder);
                  font-size: 3rem;
                  font-weight: 700;
                  color: #0047AB;
                  line-height: 1.2;
                  text-align: center;
                }
                .tp-service-5-subtitle {
                  font-family: var(--tp-ff-body);
                  font-size: 1rem;
                  font-weight: 600;
                  color: #0047AB;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  display: block;
                  margin-bottom: 20px;
                  text-align: center;
                }
              `}</style>
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                We strongly believe that only design, development & <br />
                marketing reinforced by strategy can provide real results.
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems />
        </div>
      </div>
    </div>
  );
}
