import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Typical from "react-typical";
import loadingImg from "../images/loading.svg";
import LogoCube from "../../Components/Animations/Cube/Cube";
import LogoCube2 from "../../Components/Animations/Cube/Cube2";
import "animate.css";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  // const [assets, setAssets] = useState([]);
  // let dataAssets;

  let navigate = useNavigate();

  function handleNav(text) {
    if (text === "Explore") {
      navigate("/explore");
    } else if (text === "Sign up with Deriv") {
      navigate("/signup");
    }
  }

  // let altAssets = [
  //   "https://lh3.googleusercontent.com/PWZaqY9OXEJA2AtbYqXl1jMHWs27Uk2kEs-sRcrGCmscBxKMeNswOIriW6TvV71sG1IJ-o8tllsLarmVq2mky28pipLVwAHgKSWd=w301",
  //   "https://lh3.googleusercontent.com/He_g8Ne0IYAOYrJWIoa-nd-bNCimHd2kiU4Wz2tuzX9fO83U8dcZwH3aADKswvPVqQvWXPm-jqUIYTC7qrETj88VLWMRXhKf5a_irkM=w301",
  //   "https://lh3.googleusercontent.com/GWqi_hkZ01enfcGA12p3MUUgM34OCWJvtJBuGwk9AsUhB-lz-6t6FFgJGnVtnah5LARWX3Rg2xqw1JGpDkFh88_dk85N9O3tAin6gQ=w600",
  //   "https://lh3.googleusercontent.com/v1UkPH1QhG3NnFNuRybll59QoKrJkKB_hb7UmusyZaRXB5LkwLIZcFHjcZKCxdFIwzs8r9VJT0V40-A5XBLtWUYy-7Qk8zsfagmiDQ=w301",
  //   "https://lh3.googleusercontent.com/tQnHFx1FuJXs1-2ywfh5tfRGqJ0j8uefY60c34qvkSsluKKdEcLUf9EG-97R4iLthgGq-if42S1vJFi7zQ8KuS-GyWL9vUAk1I5m1Jw=w301",
  //   "https://lh3.googleusercontent.com/PmRyUrZPzKFDXZdhxa8MxDXM8TJ6U5iBlVYGMCMqFetiaWmBYG-31cvTBUcfzREfVs_ojubWAeuRzRYdGHMhnELN9VALTLyajMU-kic=w301",
  //   "https://lh3.googleusercontent.com/PWZaqY9OXEJA2AtbYqXl1jMHWs27Uk2kEs-sRcrGCmscBxKMeNswOIriW6TvV71sG1IJ-o8tllsLarmVq2mky28pipLVwAHgKSWd=w301",
  //   "https://lh3.googleusercontent.com/He_g8Ne0IYAOYrJWIoa-nd-bNCimHd2kiU4Wz2tuzX9fO83U8dcZwH3aADKswvPVqQvWXPm-jqUIYTC7qrETj88VLWMRXhKf5a_irkM=w301",
  //   "https://lh3.googleusercontent.com/GWqi_hkZ01enfcGA12p3MUUgM34OCWJvtJBuGwk9AsUhB-lz-6t6FFgJGnVtnah5LARWX3Rg2xqw1JGpDkFh88_dk85N9O3tAin6gQ=w600",
  // ];

  // const options = {
  //   headers: {
  //     Accept: "application/json",
  //     "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
  //   },
  // };

  // const fetchAsset = async () => {
  //   return axios
  //     .get(
  //       "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=5000&limit=9",
  //       options
  //     )
  //     .then((res) => {
  //       return res.data;
  //     });
  // };

  useEffect(() => {
    // fetchAsset().then((data) => {
    //   dataAssets = Object.entries(data).sort((a, b) => {
    //     if (a.name > b.name) return 1;
    //     if (a.name < b.name) return -1;
    //     return 0;
    //   });

    //   setAssets(dataAssets[0][1]);
    // });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // console.log(assets);
  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }

  const steps = ["Buy.", 2000, "Sell.", 2000, "Trade.", 2000];

  return (
    <div className="home">
      <Row className="homeLanding g-0">
        <Row className="animate__animated animate__fadeIn animate__delay-1s g-0">
          <h1 className="imgH1">This is the future.</h1>
        </Row>
        <Row className="animate__animated animate__fadeIn  animate__delay-1s g-0">
          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="h2"
            className="imgH2"
          />
        </Row>
        <Row className="bGroup g-0">
          <Button
            className="animate__animated animate__bounceIn animate__delay-1s b1"
            onClick={(e) => handleNav(e.target.textContent)}
          >
            Explore
          </Button>
          <Col xs={1}></Col>
          <Button
            className="animate__animated animate__bounceIn animate__delay-1s b2"
            onClick={(e) => handleNav(e.target.textContent)}
          >
            Sign up with Deriv
          </Button>
        </Row>
      </Row>
      <Container className="squareAssets animate__animated animate__fadeIn animate__delay-1s">
        {isLoading === false ? (
          // <Row xs={3} className="g-0">
          //   {assets.map((asset, index) => {
          //     return (
          //       <Col key={index}>
          //         {/* <span>{asset.name}</span> */}
          //         <img
          //           className="imgHome"
          //           src={
          //             Object.keys(asset.image_url).length !== 0
          //               ? asset.image_url
          //               : altAssets[index]
          //           }
          //         />
          //       </Col>
          //     );
          //   })}
          // </Row>
          <div>
            <LogoCube></LogoCube>
            <LogoCube2></LogoCube2>
          </div>
        ) : (
          // <Col>
          //   <span>{assets[0].name}</span>
          //   {/* <img src={asset.image_url} alt="test" /> */}
          // </Col>
          <img className="loadingHome" src={loadingImg} />
        )}
        {/* <Row>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
        </Row>
        <Row>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
        </Row>

        <Row>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
          <Col xs className="px-0">
            <img
              src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
              alt="test"
            />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Home;
