import React from "react";
import "../mainpage.css";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About E-Nexus</h2>
        <p>
          It's a platform where gamers, content creators, and gaming staff can 
          reach big organizations to show who they are and what makes them a 
          perfect fit for that organization.
        </p>
      </div>
    </section>
  );
};

export default About;
export {};