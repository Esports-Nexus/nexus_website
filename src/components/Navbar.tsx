import React, { useState } from "react";
import "../mainpage.css"; // import your CSS

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>E-Nexus</h1>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Profile</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
export {};