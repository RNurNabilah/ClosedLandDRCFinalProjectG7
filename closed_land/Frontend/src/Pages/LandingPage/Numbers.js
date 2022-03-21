import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaSimCard } from "react-icons/fa";

const Numbers = () => {
  return (
    <div className="numbers">
      <Row className="numberCardGroup px-0">
        <Col>
          <Card className="numberCard animate__animated animate__bounceIn animate__delay-2s">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Daily Sales
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard animate__animated animate__bounceIn animate__delay-2s">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total Sales
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard animate__animated animate__bounceIn animate__delay-2s">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Daily ETH Volume
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard animate__animated animate__bounceIn animate__delay-2s">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total ETH Volume
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
