import React from "react";
import "../mainpage.css";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome To E-Nexus</h1>
        <p>A best Platform To Connect With Success</p>
        <button className="cta-btn" onClick={() => scrollToSection("portfolio")}>
          View Features
        </button>
      </div>
    </section>
  );
};

export default Hero;
export {};