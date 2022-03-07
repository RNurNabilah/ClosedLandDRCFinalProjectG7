import React from "react";
import { Col, Row } from "react-bootstrap";

function AccStats() {
  return (
    <div className="acc-stats">
      <Row className="accstatsGroup">
        <Col className="accstat-column">
          <div className="accstat-box" data-aos="flip-left">
            <h5>2022</h5>
            <h6>Year Founded</h6>
          </div>
          <div className="accstat-box" data-aos="flip-left">
            <h5>6</h5>
            <h6>Employees</h6>
          </div>
          <div className="accstat-box" data-aos="flip-left">
            <h5>n</h5>
            <h6>Users</h6>
          </div>
          <div className="accstat-box" data-aos="flip-left">
            <h5>n</h5>
            <h6>Collections</h6>
          </div>
          <div className="accstat-box" data-aos="flip-left">
            <h5>n</h5>
            <h6>NFTs</h6>
          </div>
          <div className="accstat-box" data-aos="flip-left">
            <h5>n</h5>
            <h6>Volume</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AccStats;
