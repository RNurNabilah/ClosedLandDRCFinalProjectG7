import Tabs from "react-bootstrap/Tabs";
import { Button } from "react-bootstrap";
// import {Line} from 'react-chartjs-2';
import LineChart from "./LineChart";
import React, { useState } from "react";
import CandleStick from "./CandleStick";

function Tab() {
  const [chart, setChart] = useState("line");

  return (
    <div>
      <div className="top-tab">
        <Button
          id="lineButton"
          onClick={() => setChart("line")}
          disabled={chart === "line" ? true : false}
        >
          Line Chart
        </Button>
        <Button
          id="candleButton"
          onClick={() => setChart("candle")}
          disabled={chart === "candle" ? true : false}
        >
          Candle Stick
        </Button>
      </div>
      {chart === "line" ? <LineChart /> : <CandleStick />}
    </div>
  );
}

export default Tab;
