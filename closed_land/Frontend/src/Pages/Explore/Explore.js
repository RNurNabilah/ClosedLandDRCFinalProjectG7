import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Explore.css";
import axios from "axios";
import Collection from "../Collection/Collection";
import Ethcall from "../../Components/CombNav/Ethcall";
import { FaEthereum } from "react-icons/fa";
import "animate.css";

const Explore = () => {
  const [rawData, setRawData] = useState([
    {
      BannerImgUrl: "",
      Desc: "",
      ImgUrl: "",
      Name: "",
      StatsCount: "",
      StatsFloorPrice: "",
    },
  ]);

  const defCol = {
    BannerImgUrl:
      "https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=s2500",
    ImgUrl:
      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
    Name: "Doodles",
    Desc: "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
    StatsFloorPrice: 12.7498,
    StatsCount: 10000,
  };

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  useEffect(() => {
    axios.get(`http://localhost:4561/`).then((res) => {
      setRawData(res.data);
    }, []);
  }, []);

  useEffect(() => {
    console.log(rawData);
  }, [rawData]);

  console.log(rawData);

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Ethcall />
      <div className="explore">
        <Row className="h1Row gx-0 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="buttonTitle">Explore Collections</h1>
        </Row>
        <Row className="gx-0 animate__animated animate__fadeIn animate__delay-2s">
          <Col className="px-0">
            <Button className="exploreButton">Trending</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">24hrs</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">7days</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">Top</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">New</Button>
          </Col>
        </Row>
        <Row className="exploreCardsRow gx-0">
          {rawData.map((col, index) => {
            return (
              <Card
                className="exploreCards animate__animated animate__bounceIn animate__delay-2s"
                key={index}
              >
                <Card.Img
                  variant="top"
                  src={
                    col.BannerImgUrl !== "NULL"
                      ? col.BannerImgUrl
                      : defCol.BannerImgUrl
                  }
                  className="exploreBanner"
                />
                <img
                  src={col.ImgUrl !== "NULL" ? col.ImgUrl : defCol.ImgUrl}
                  alt=""
                  className="explorePFP"
                />
                <Card.Body>
                  <Card.Title>
                    {col.Name !== "NULL" ? col.Name : "No name"}
                  </Card.Title>
                  <Card.Text>
                    {col.Desc !== "NULL" ? col.Desc : "No description."}
                  </Card.Text>
                  <Card.Text id="explorePrices">
                    <p id="exploreFloorPrice">
                      <FaEthereum className="eth" />
                      {col.StatsFloorPrice !== "NULL" ? col.StatsFloorPrice : 0}
                    </p>
                    <p id="exploreItems">
                      {col.StatsCount === "NULL" ? col.StatsCount : 0} items
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
