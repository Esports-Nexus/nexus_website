import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./mainpage.css";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default App;
