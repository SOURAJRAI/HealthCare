import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";

import HealthIndicators from "./DashboardSectionPages/HealthIndicators";
import "./styles/Dashboard.css";
import { activityData } from "../data/activity";
import ActivityChart from "./DashboardSectionPages/ActivityChart";
import AnatomySection from "./DashboardSectionPages/AnatomySection";

const Dashboard = () => (
  <div className="dashboard-container">
    {/* Search Bar */}
    <div className="search-container">
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          aria-label="Search"
        />
        <BsBellFill className="notification-icon" />
      </div>
    </div>

    {/* Dashboard Header */}
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <p className="subtext">This Week</p>
    </header>

    {/* Main Content */}
    <main className="main-content">
      <section className="anatomy-section">
        <AnatomySection />
        <HealthIndicators />
      </section>
      <ActivityChart
        days={activityData.days}
        bars={activityData.bars}
        title={activityData.title}
        subtitle={activityData.subtitle}
      />
    </main>
  </div>
);

export default Dashboard;
