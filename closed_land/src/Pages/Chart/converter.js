import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { Container } from "react-bootstrap";
import ETH from "../images/eth.png";

function Convert() {
  return (
    <div className="main-convert">
      <div className="convert-rec1">
        <p className="converter-price">RM 12,651.56</p>
      </div>
      <div className="convert-text"> 1 ETH = RM 12,651.56</div>
      <Container className="details-convert">
        <Container className="convert-rec2">1</Container>
        <Container className="convert-rec3">
          {" "}
          ETH <img className="eth-pic" src={ETH} alt="png" />
        </Container>
        <Container className="arrow-icon">
          <BsArrowLeftRight className="arrow" />
        </Container>
        <Container className="convert-rec4">
          MYR <VscChevronDown className="dd-button" />
        </Container>
      </Container>
    </div>
  );
}

export default Convert;
