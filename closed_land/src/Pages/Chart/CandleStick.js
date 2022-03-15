import React, { useEffect } from "react";
import Chart from "@qognicafinance/react-lightweight-charts";
import useState from "react-usestateref";
import { Tabs, Tab } from "react-bootstrap";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";
import { FaBullseye } from "react-icons/fa";

const CandleStick = () => {
  const arr = [];
  let quoteprice = []; //x-axis
  // let quotepoch = [];
  let currTime = 0;
  let currohlc;

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  const [history, setHistory, refRealHistory] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [timeFrame, setTimeFrame] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    alignLabels: true,
    timeScale: {
      // rightOffset: 12,
      // barSpacing: 3,
      // fixLeftEdge: true,
      // // lockVisibleTimeRangeOnResize: true,
      // rightBarStaysOnScroll: true,
      // borderVisible: false,
      // borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: true,
    },
    layout: {
      textColor: "#F2EAD0",
      fontSize: 12,
      fontFamily: "monospace",
    },
    localization: {
      dateFormat: "dd/MM/yyyy",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          ticks_history: "R_50",
          adjust_start_time: 1,
          count: 5000,
          end: "latest",
          start: 1,
          style: "candles",
          subscribe: 1,
          granularity: timeFrame,
        })
      );
    };

    //Fired when a connection with WebSocket is opened.
    ws.onmessage = function (msg) {
      let data = JSON.parse(msg.data);
      console.log(data);
      if (data.candles) {
        arr.push(data.candles.slice(0, -1));
        setHistory(
          arr[0].map((e) => {
            return {
              time: e.epoch,
              open: e.open,
              high: e.high,
              low: e.low,
              close: e.close,
            };
          })
        );

        currTime = data.candles[data.candles.length - 1].epoch;
      } else {
        if (currTime === data.ohlc.open_time) {
          currohlc = {
            time: data.ohlc.epoch,
            open: data.ohlc.open,
            high: data.ohlc.high,
            low: data.ohlc.low,
            close: data.ohlc.close,
          };

          let cArr = refRealHistory.current.concat(
            chartData.splice(-1, 1, currohlc)
          );

          setChartData(cArr);
        } else {
          refRealHistory.current.push(currohlc);
          currTime = data.ohlc.open_time;
        }
      }

      setIsLoading(false);
    };

    return () => {
      ws.close();
    };
  }, [timeFrame]);

  //   console.log(timeFrame);

  //   console.log(chartData);
  return (
    <div className="candleStickChart">
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={timeFrame}
        className="main-bar"
        onSelect={(k) => setTimeFrame(k)}
      >
        <Tab eventKey={60} title="1M" />
        <Tab eventKey={300} title="5M" />
        <Tab eventKey={900} title="15M" />
        <Tab eventKey={1800} title="30M" />
        <Tab eventKey={3600} title="1H" />
        <Tab eventKey={7200} title="2H" />
        <Tab eventKey={14400} title="4H" />
        <Tab eventKey={28800} title="8H" />
        <Tab eventKey={86400} title="24H" />
        {/* <div className='title'>Date Range </div> */}
      </Tabs>

      <div className="innerCandle">
        {/* {console.log(chartData)} */}
        {chartData.length === 0 || isLoading === true ? <CarLoader /> : null}
        <Chart
          options={options}
          candlestickSeries={[
            {
              data: chartData,
              options: {
                borderVisible: false,
                wickVisible: true,
                borderColor: "#000000",
                // wickColor: "#000000",
                // upColor: "#14a098",
                downColor: "#A52A2A",
                wickDownColor: "#A52A2A",
              },
            },
          ]}
          autoWidth
          height={400}
          darkTheme
        ></Chart>
      </div>
    </div>
  );
};

export default CandleStick;
