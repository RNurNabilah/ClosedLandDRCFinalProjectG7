import React from "react";
import { Col } from "react-bootstrap";

function VisionMission() {
  return (
    <div className="main-vismis">
      <div className="aboutus-header" data-aos="fade-down">
        <h2 className="aboutus-name">About Us</h2>
        <div className="rectangle4">.</div>
      </div>
      <div className="visionmission">
        <Col className="vision-container" data-aos="fade-right">
          <h3 className="vis-name">Vision</h3>
          <h5 className="vis-describe">
            We are commited in making digital art well-known in our society
            through the platform we offer.
          </h5>
        </Col>
        <Col className="mission-container" data-aos="fade-left">
          <h3 className="mis-name">Mission</h3>
          <h5 className="mis-describe">
            To provide a platform for digital artists to promote their rare
            creations and sell them to aesthetes.{" "}
          </h5>
        </Col>
      </div>
    </div>
  );
}

export default VisionMission;
