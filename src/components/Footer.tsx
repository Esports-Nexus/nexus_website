import React from "react";
import "../mainpage.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} E-Nexus. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
export {};