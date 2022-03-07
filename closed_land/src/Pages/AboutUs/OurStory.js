import React from "react";
import { Row } from "react-bootstrap";
import ourstorylogo from "../../images/ourstory.png";

function OurStory() {
  return (
    <div>
      <Row className="ourstory">
        <div className="ourstory-logo" data-aos="fade-left">
          <img id="OS" src={ourstorylogo} alt="ourstorylogo" />
          <div className="ourstory-header" data-aos="fade-down">
            <h2 className="ourstory-name">Our Story</h2>
            <div className="rectangle5">.</div>
            <h5 className="ourstory-describe">
              It started with six students from various IT backgrounds that come
              together to develop a blockchain platform that involves
              cryptocurrency which focuses on bridging and highlighting that
              digital art can be in various forms
            </h5>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default OurStory;
