import React from "react";
import "../mainpage.css";

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2>Your Portfolio</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total People Connected</h3>
            <p>5000</p>
          </div>
          <div className="stat-card">
            <h3>People Connecting Daily</h3>
            <p>+12.3%</p>
          </div>
          <div className="stat-card">
            <h3>Active People</h3>
            <p>7 Active</p>
          </div>
        </div>
        <a href="login.html" className="cta-btn">
          Login to Manage
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
export {};