import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Stil faylı

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // 100px aşağı sürüşəndə
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        {!isScrolled && <img src="logo.png" alt="Logo" className="navbar-logo" />} {/* Scroll edilmedikdə logo görünür */}
      </div>
      <ul className="navbar-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#webflow">Webflow</a></li>
      </ul>
      <div className="navbar-right">
        {!isScrolled && <button className="talk-btn">Talk to us</button>} {/* Scroll edilmədikdə düymə görünür */}
      </div>
    </nav>
  );
};

export default Navbar;
