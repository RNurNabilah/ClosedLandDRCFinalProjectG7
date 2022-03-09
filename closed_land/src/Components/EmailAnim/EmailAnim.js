import React from "react";
import "./EmailAnim.css";

const EmailAnim = () => {
  return (
    <div id="anim-wrapper">
      <div id="anim-bg">
        <div id="env-wrapper">
          <div className="speedline line1"></div>
          <div className="speedline line2"></div>
          <div className="speedline line3"></div>
          <i id="env" className="fas fa-envelope"></i>
        </div>
      </div>

      <div id="check-container">
        <div className="check-stroke1"></div>
        <div className="check-stroke2"></div>
      </div>
    </div>
  );
};

export default EmailAnim;
