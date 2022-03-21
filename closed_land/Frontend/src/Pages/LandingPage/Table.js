import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
  ToggleButton,
} from "react-bootstrap";
import "./LandingPage.css";
import { FaEthereum } from "react-icons/fa";

const Table = ({ props }) => {
  let testData = [
    {
      name: "CryptoPunks",
      image_url:
        "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
      stats: {
        floor_price: 14.18,
        one_day_change: 0.08208649636186115,
        seven_day_change: 0.6932444513088206,
        thirty_day_change: -0.029819,
        total_volume: 842609.8428493055,
      },
    },
    {
      name: "Azuki",
      image_url:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
      stats: {
        floor_price: null,
        one_day_change: -0.06423173959428809,
        seven_day_change: 0.17868895653326272,
        thirty_day_change: -2.29918930919819,
        total_volume: 114730.62944187163,
      },
    },
    {
      name: "Tasty Bones XYZ",
      image_url:
        "https://lh3.googleusercontent.com/pFx2k4GbEd30FbIPOGagqG646QGUk-0Ns8n6kSgozxY4aJSI2AYm1a_Acvu0jngeIx7hSeZeZTHLKUiUEt9qXfE-DWRmJyZJQ_AnKA=s120",
      stats: {
        floor_price: 1.1,
        one_day_change: -0.7578312459646487,
        seven_day_change: 0.121212123,
        thirty_day_change: -0.01330919819,
        total_volume: 7397.572734682764,
      },
    },
    {
      name: "mfers",
      image_url:
        "https://lh3.googleusercontent.com/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw=s120",
      stats: {
        floor_price: 98,
        one_day_change: -0.03450260672295463,
        seven_day_change: -0.11099514357838806,
        thirty_day_change: 0.301918930919819,
        total_volume: 397128.3576695282,
      },
    },
    {
      name: "Bored Ape Yacht Club",
      image_url:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
      stats: {
        floor_price: 3,
        one_day_change: 0.30406417364081934,
        seven_day_change: 1.5077550151934536,
        thirty_day_change: 2.29918930919819,
        total_volume: 13710.919722314218,
      },
    },
  ];

  let navigate = useNavigate();
  function goToStats() {
    navigate("/stats");
  }

  const [cols, setCols] = useState([]);
  let dataAssets;
  let assets = [];
  let temp = [];
  let slugs = [
    "azuki",
    "invisiblefriends",
    "snoop-dogg-doggies",
    "mutant-ape-yacht-club",
    "nft-worlds",
  ];

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     slugs.forEach((element) => {
  //       axios
  //         .get(`https://api.opensea.io/api/v1/collection/${element}`, options)
  //         .then((res) => {
  //           assets.push(res.data);
  //         });
  //     });
  //     dataAssets = Object.entries(assets).sort((a, b) => {
  //       if (a > b) return 1;
  //       if (a < b) return -1;
  //       return 0;
  //     });
  //     setCols(dataAssets);
  //   }, 1000);
  //   console.log(cols);
  // }, []);

  // console.log(cols[0]);
  // console.log(testData);

  testData.sort((b, a) => {
    if (a.stats.one_day_change > b.stats.one_day_change) return 1;
    if (a.stats.one_day_change < b.stats.one_day_change) return -1;
    return 0;
  });

  const [data, setData] = useState(testData);
  const [toggleText, setToggleText] = useState("Last 24 Hours");
  const [percentage, setPercentage] = useState("one_day_change");

  useEffect(() => {}, [data]);

  function sortData(text) {
    switch (text) {
      case "Last 24 Hours":
        setToggleText(text);
        testData.sort((b, a) => {
          if (a.stats.one_day_change > b.stats.one_day_change) return 1;
          if (a.stats.one_day_change < b.stats.one_day_change) return -1;
          return 0;
        });
        setData(testData);
        setPercentage("one_day_change");
        break;
      case "Last 7 Days":
        setToggleText(text);
        testData.sort((b, a) => {
          if (a.stats.seven_day_change > b.stats.seven_day_change) return 1;
          if (a.stats.seven_day_change < b.stats.seven_day_change) return -1;
          return 0;
        });
        setData(testData);
        setPercentage("seven_day_change");
        break;
      case "Last 30 Days":
        setToggleText(text);
        testData.sort((b, a) => {
          if (a.stats.thirty_day_change > b.stats.thirty_day_change) return 1;
          if (a.stats.thirty_day_change < b.stats.thirty_day_change) return -1;
          return 0;
        });
        setData(testData);
        setPercentage("thirty_day_change");
        break;
      default:
        break;
    }
  }

  return (
    <div className="table" id="Table">
      <Col data-aos="fade-in" data-aos-once="true" className="stats gx-0">
        <h1 id="h1Stats">Top Collections Over</h1>
        <DropdownButton id="dropdown-stats" title={toggleText} align="end">
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => sortData(e.target.textContent)}
          >
            Last 24 Hours
          </Dropdown.Item>
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => sortData(e.target.textContent)}
          >
            Last 7 Days
          </Dropdown.Item>
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => sortData(e.target.textContent)}
          >
            Last 30 Days
          </Dropdown.Item>
        </DropdownButton>
      </Col>
      <Container className="tableLP">
        {data.map((col, index) => {
          return (
            <Row
              key={index}
              className="tableRow"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <Col className="tableText" id="numRow">
                <Col id="pNum">
                  <p>{index + 1}</p>
                </Col>
                <Col className="rowImage" id="imageRow">
                  <img className="tableImage" src={col.image_url} alt="" />
                </Col>
                <Col className="rowName">
                  <p id="nameRow">{col.name}</p>
                  <p id="fp">
                    <FaEthereum className="eth" />
                    {col.stats.floor_price === null
                      ? "Floor Price: null"
                      : "Floor Price: " + col.stats.floor_price}
                  </p>
                </Col>
              </Col>
              <Col className="rowStats" id="statsRow">
                <p
                  style={
                    toggleText === "Last 24 Hours"
                      ? {
                          color:
                            col.stats.one_day_change > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : toggleText === "Last 7 Days"
                      ? {
                          color:
                            col.stats.seven_day_change > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : toggleText === "Last 30 Days"
                      ? {
                          color:
                            col.stats.thirty_day_change > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : {}
                  }
                >
                  {toggleText === "Last 24 Hours"
                    ? (col.stats.one_day_change * 100).toFixed(2) + " %"
                    : toggleText === "Last 7 Days"
                    ? (col.stats.seven_day_change * 100).toFixed(2) + " %"
                    : toggleText === "Last 30 Days"
                    ? (col.stats.thirty_day_change * 100).toFixed(2) + " %"
                    : ""}
                </p>

                <p>
                  <FaEthereum className="eth" />
                  {col.stats.total_volume.toFixed(0)}
                </p>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Row
        id="rankButton"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Button className="rankingsButton" onClick={goToStats}>
          See More Stats
        </Button>
      </Row>
    </div>
  );
};

export default Table;
