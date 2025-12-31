import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        &copy; 2025-{new Date().getFullYear()} Anton Voshchinskiy. All rights reserved.
    </div>
  );
};

export default Footer;
