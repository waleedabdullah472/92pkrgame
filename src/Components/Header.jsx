import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaInfoCircle, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import "./Header.css"; // For CSS styles

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Close sidebar if screen is resized to large
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      {/* Left side with logo */}
      <div className="header-left">
      <a href="https://92PKRGame.com">
        <img src="pkr.webp" alt="Logo" className="logo" />
        </a>
      </div>

      {/* Right side with icon in mobile view */}
      <div className="header-right">
        {isMobile ? (
          <FaBars className="menu-icon" onClick={toggleSidebar} />
        ) : (
          <div className="links">
            <a href="/" className="link">92PKR</a>
            <a href="/about" className="link">About</a>
            <a href="/contact" className="link">Contact</a>
            <a href="/privacy" className="link">Privacy</a>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <a href="/" className="link" onClick={() => setIsSidebarOpen(false)}>92PKR</a>
          <a href="/about" className="link" onClick={() => setIsSidebarOpen(false)}>About</a>
          <a href="/contact" className="link" onClick={() => setIsSidebarOpen(false)}>Contact</a>
          <a href="/privacy" className="link" onClick={() => setIsSidebarOpen(false)}>Privacy</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
