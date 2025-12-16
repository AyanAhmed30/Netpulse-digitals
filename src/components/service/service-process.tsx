"use client";
import React from "react";

const steps = [
  { id: 1, title: "Discovery & Strategy", desc: "We understand your goals, audience, and challenges." },
  { id: 2, title: "Design & Prototyping", desc: "Clean UI/UX, brand-focused visuals, and conversion psychology." },
  { id: 3, title: "Development & Build", desc: "Fast, secure, and high-performing solutions." },
  { id: 4, title: "Launch & Optimization", desc: "SEO, testing, performance, analytics." },
  { id: 5, title: "Ongoing Support", desc: "Marketing, updates, scaling & automation." },
];

const ServiceProcess = () => {
  return (
    <div className="tp-process-area pt-90 pb-90 position-relative">
      <div className="container container-1630">
        <div className="row">
          <div className="col-12">
            <div className="tp-service-title-box p-relative text-center mb-60">
              <h4 className="tp-section-title tp-char-animation">How We Bring Your Vision to Life</h4>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {steps.map((s) => (
            <div key={s.id} className="col-xl-2-custom col-lg-3 col-md-6 col-sm-6">
              <div className="tp-process-item tp_fade_bottom text-center p-4 h-100">
                <div className="tp-process-number mb-3">
                  <span className="h4">{`0${s.id}`}</span>
                </div>
                <h5 className="mb-3">{s.title}</h5>
                <p className="mb-0 small">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .col-xl-2-custom { flex: 0 0 calc(20% - 1rem); }
        .tp-process-number span { 
          display: inline-block; 
          width: 56px; 
          height: 56px; 
          line-height: 56px; 
          border-radius: 50%; 
          background: rgba(0,0,0,0.06); 
          font-weight: 700; 
          font-size: 1.3rem;
        }
        .tp-process-item { 
          border-radius: 8px; 
          transition: all 0.3s ease;
        }
        .tp-process-item:hover { 
          background: rgba(0,0,0,0.02); 
          transform: translateY(-5px);
        }
        .tp-process-item h5 { 
          font-size: 1rem; 
          font-weight: 600; 
          color: #000;
        }
        .tp-process-item p { 
          color: rgba(0,0,0,0.65);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        @media (max-width: 1399px) {
          .col-xl-2-custom { flex: 0 0 calc(25% - 1rem); }
        }
        
        @media (max-width: 991px) {
          .col-xl-2-custom { flex: 0 0 calc(33.333% - 1rem); }
        }
        
        @media (max-width: 767px) {
          .col-xl-2-custom { flex: 0 0 calc(50% - 1rem); }
        }
        
        @media (max-width: 575px) {
          .col-xl-2-custom { flex: 0 0 100%; }
          .tp-process-item { padding: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default ServiceProcess;
