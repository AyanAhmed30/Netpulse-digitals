"use client";
import React from "react";

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        <video
          loop
          muted
          autoPlay
          playsInline
          style={{ width: "100%", height: "auto" }}
        >
          <source
            src="/assets/video/netpulse-digital-video.mov"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideOne;
