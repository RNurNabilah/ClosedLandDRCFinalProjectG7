import React from "react";
import ameerul from "../../images/ameerul.png";
import suisin from "../../images/suisin.png";
import amira from "../../images/amira.png";
import raja from "../../images/raja.png";
import luqman from "../../images/luqman.png";
import raven from "../../images/raven.png";
import { Col, Row } from "react-bootstrap";

function Employee() {
  return (
    <div className="employee">
      <h2 className="employee-title">
        Standing strong with the most forward-thinking angels
      </h2>
      <div className="employee-list">
        <Row id="emp-img">
          <Col id="columntorow">
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/7AJJQDw1xELJcjY5U8nyxK0O0PF91UHB1HSXVWcZia52uksjzguD0JZ1rx0TdhkeEG59izMZMDZzw9BvcxhDqmrsd4k3qXpJdG9WkQQ=w335"
                alt="ameerul"
              />
              <h5 id="emp-name">Ameerul</h5>
            </div>
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/XIZt4ZlpKClfQ9ypa29FEZDFdGoU2gZ6IpyfkIhzs0h1_Hjb_otup2zNv6jhOntX77Fw-HjZ48HK-1T81ldpOmxn-sb9rxBzwQFpmQ=w335"
                alt="raja"
              />
              <h5 id="emp-name">Raja</h5>
            </div>
          </Col>
          <Col id="columntorow1">
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/2XIJ84mWXVIj7pvem097NgS9maAea_CYudsPGmzVLL5q7lIxV0FK9aSG_QLm4N0JekcT5wAhGDG8KqNJ2p33AIaDZXoltMJSPBqd=w335"
                alt="suisin"
              />
              <h5 id="emp-name">Suisin</h5>
            </div>
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/HyG5of7Jjhvbo8l9AqoCiLYZKRp4Km3fzWSi7Ei7ZlUWMyYcrBmsyDCImUrr89OxUnmbpw4CtuWpVVoDlzhoegw69MaGuymjfPOE=w335"
                alt="luqman"
              />
              <h5 id="emp-name">Luqman</h5>
            </div>
          </Col>
          <Col id="columntorow2">
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/zQh1nkW3Vhjue5qLUdXW_SX748GfIccDgZ-SJgU7SiZWaaqy2hranN6TnjoajnmfVpRTS4j9RN71RjHpWzKlKqLoJANqal3IL1yf=w335"
                alt="amira"
              />
              <h5 id="emp-name">Amira</h5>
            </div>
            <div data-aos="zoom-in">
              <img
                className="emp-icon"
                src="https://lh3.googleusercontent.com/JhShss0qM27oJQluCRJ-GA4jtuLWYXDlaN0gD1kgGfvpGwgNTgCtKToPR3eQKClD5UtQxRqxW649U0tlS3PCRdnt0y2CkjUzzty4=w335"
                alt="raven"
              />
              <h5 id="emp-name">Raven</h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Employee;
