import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const StatsMobile = (props) => {
  let array = Object.entries(props).sort((b, a) => {
    if (a.stats.one_day_change > b.stats.one_day_change) return 1;
    if (a.stats.one_day_change < b.stats.one_day_change) return -1;
    return 0;
  });

  console.log(props);
  let collectionsStats = array[0][1];

  const [key, setKey] = useState(null);
  const [dropDownText, setDropDownText] = useState("24 Hour %");

  const [data, setData] = useState(collectionsStats);

  useEffect(() => {}, [data]);

  function sortStats(text) {
    switch (text) {
      case "24 Hour %":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.one_day_change > b.stats.one_day_change) return 1;
          if (a.stats.one_day_change < b.stats.one_day_change) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "7 Day %":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.seven_day_change > b.stats.seven_day_change) return 1;
          if (a.stats.seven_day_change < b.stats.seven_day_change) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Volume":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.total_volume > b.stats.total_volume) return 1;
          if (a.stats.total_volume < b.stats.total_volume) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Floor Price":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.floor_price > b.stats.floor_price) return 1;
          if (a.stats.floor_price < b.stats.floor_price) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Collection Name":
        setDropDownText(text);
        collectionsStats.sort((x, y) => {
          let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });
        setData(collectionsStats);
        break;

      case "Owners":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.num_owners > b.stats.num_owners) return 1;
          if (a.stats.num_owners < b.stats.num_owners) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Items":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.count > b.stats.count) return 1;
          if (a.stats.count < b.stats.count) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      default:
        break;
    }
  }
  return (
    <div className="statsPage">
      <Container className="statsTitle animate__animated animate__fadeIn animate__delay-s">
        <Row>
          <h1>STATS</h1>
        </Row>
        <Row>
          <h2>Top NFT Collections in ClosedLand</h2>
        </Row>
      </Container>
      <Row className="toggleStats animate__animated animate__fadeIn animate__delay-2s">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{dropDownText}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              24 Hour %
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              7 Day %
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              Volume
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              Floor Price
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              Collection Name
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              Owners
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => sortStats(e.target.textContent)}>
              Items
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row>
        <Container className="statsPageTable">
          {data.map((col, index) => {
            return (
              <Row
                key={index}
                className="statsTableRow gx-0 animate__animated animate__bounceIn animate__delay-2s"
              >
                <Col className="statsTableText " id="statsNumRow">
                  <Col id="sNum">
                    <h1>{index + 1}</h1>
                  </Col>
                  <Col className="statsRowImage">
                    <img
                      className="statsTableImage"
                      src={col.image_url}
                      alt=""
                    />
                  </Col>
                  <Col className="statsRowName">
                    <p id="statsName">{col.name}</p>
                    <Button
                      onClick={() =>
                        key === index ? setKey(null) : setKey(index)
                      }
                    >
                      + {key === index ? "Less" : "More"}
                    </Button>
                  </Col>
                </Col>
                <Col className="rowStatsPage">
                  <p
                    style={{
                      color:
                        col.stats.one_day_change > 0 ? "#A1FFB1" : "#7A0229",
                    }}
                  >
                    {(col.stats.one_day_change * 100).toFixed(2) + " %"}
                  </p>
                  <p id="total_volume">
                    <FaEthereum className="eth" />
                    {col.stats.total_volume.toFixed(0)}
                  </p>
                </Col>
                {index === key ? (
                  <Row className="moreStatsRow gx-0">
                    <Row className="statsRowLine gx-0"></Row>
                    <Row className="moreStats">
                      <Col>
                        <p className="moreStatsHeader">7d%</p>
                        <p
                          className="moreStatsNum"
                          style={{
                            color:
                              col.stats.seven_day_change > 0
                                ? "#A1FFB1"
                                : "#7A0229",
                          }}
                        >
                          {(col.stats.seven_day_change * 100).toFixed(2) + " %"}
                        </p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Floor Price</p>
                        <p className="moreStatsNum">
                          <FaEthereum className="eth" />
                          {col.stats.floor_price}
                        </p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Owners</p>
                        <p className="moreStatsNum">{col.stats.num_owners}</p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Items</p>
                        <p className="moreStatsNum">{col.stats.count}</p>
                      </Col>
                    </Row>
                  </Row>
                ) : null}
              </Row>
            );
          })}
        </Container>
      </Row>
    </div>
  );
};

export default StatsMobile;
