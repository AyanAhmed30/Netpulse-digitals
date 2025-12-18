"use client";
import React from "react";

const steps = [
  { id: 1, title: "Discovery & Strategy", desc: "We understand your goals, audience, and challenges." },
  { id: 2, title: "Design & Prototyping", desc: "Clean UI/UX, brand-focused visuals, and conversion psychology." },
  { id: 3, title: "Development & Build", desc: "Fast, secure, and high-performing solutions." },
  { id: 4, title: "Launch & Optimizations", desc: "SEO, testing, performance, analytics." },
  { id: 5, title: "Ongoing Supports", desc: "Marketing, updates, scaling & automation." },
];

const ServiceProcess = () => {
  return (
    <div className="tp-process-area pt-90 pb-90 position-relative">
      <div className="container container-1630">
        <div className="row">
          <div className="col-12">
           <div style={{ textAlign: "center" }}>
  <h2 className="tp-section-title tp-char-animation mb-4">

               How We Bring Your Vision to Life
              </h2>
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
        .tp-section-title {
          font-family: var(--tp-ff-gelder);
          font-size: 3rem;
          font-weight: 700;
          color: #0047AB;
          line-height: 1.2;
          text-align: center;
          width: 100%;
          display: block;
        }
        .tp-process-number span { 
          display: inline-block; 
          width: 56px; 
          height: 56px; 
          line-height: 56px; 
          border-radius: 50%; 
          background: rgba(0, 71, 171, 0.08); 
          font-weight: 700; 
          font-size: 1.3rem;
          font-family: var(--tp-ff-gelder);
          color: #0047AB;
        }
        .tp-process-item { 
          border-radius: 12px; 
          transition: all 0.3s ease;
          border: 1px solid #116ae7ff;
        }
        .tp-process-item:hover { 
          background: white; 
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 71, 171, 0.1);
          border: 3px solid #0047AB;
        }
        .tp-process-item h5 { 
          font-family: var(--tp-ff-gelder);
          font-size: 1.25rem; 
          font-weight: 600; 
          color: #0047AB;
          text-align: center !important;
        }
        .tp-process-item p { 
          font-family: var(--tp-ff-body);
          color: #4A5568;
          font-size: 0.95rem;
          line-height: 1.6;
          text-align: center !important;
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
