import React from 'react';
import { healthIndicators } from '../../data/healthData';
import { IoIosArrowRoundForward } from "react-icons/io";


const HealthIndicators = () => {
  return (
    <div className="health-indicators">
      {healthIndicators.map((indicator) => (
        <div key={indicator.id} className="health-card">
          <div className="health-card-header">
            <div className="icon-circle">
              <span>{indicator.icon}</span>
            </div>
            <h3>{indicator.name}</h3>
          </div>
          <p className="date">Date: {indicator.date}</p>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${indicator.progress}%`,
                backgroundColor: indicator.color
              }}
            ></div>
          </div>
        </div>
      ))}
      <a className="details-link">
              Details <IoIosArrowRoundForward />
            </a>
    </div>
  );
};

export default HealthIndicators;
