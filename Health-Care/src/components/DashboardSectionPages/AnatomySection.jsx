import React from "react";
import anatomyImage from "../../assets/HumanAnatomy.webp";

const AnatomySection = () => (

    <div className="anatomy-card">
      <div className="human-figure">
        <img
          src={anatomyImage}
          alt="Human anatomy diagram showing health indicators"
          className="anatomy-image"
        />
        
        <div className="scanner-overlay heart-scanner">
          <div className="scanner-circle">
            <div className="scanner-dot"></div>
          </div>
        </div>
    
        <div className="scanner-overlay leg-scanner">
          <div className="scanner-circle">
            <div className="scanner-dot"></div>
          </div>
        </div>
    
        <div className="tag heart-tag">
          <span className="tag-icon">❤️</span>
          <span>Healthy Heart</span>
        </div>
        <div className="tag leg-tag">
          <span className="tag-icon">🦵</span>
          <span>Healthy Leg</span>
        </div>
      </div>
    </div>

);

export default AnatomySection;