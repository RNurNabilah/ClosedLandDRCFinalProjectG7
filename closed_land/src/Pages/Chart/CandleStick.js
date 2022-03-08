import React, { useEffect } from "react";
import Chart from "@qognicafinance/react-lightweight-charts";
import useState from "react-usestateref";
import { Tabs, Tab } from "react-bootstrap";
import CarLoader from "../../Components/CarLoading/CarLoader";

const CandleStick = () => {
  const arr = [];
  let quoteprice = []; //x-axis
  // let quotepoch = [];
  let currTime = 0;
  let currohlc;

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  const [history, setHistory, refRealHistory] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("1M");
  const [series, setSeries] = useState([
    {
      data: [
        {
          time: "2018-10-19",
          open: 180.34,
          high: 180.99,
          low: 178.57,
          close: 179.85,
        },
        {
          time: "2018-10-22",
          open: 180.82,
          high: 181.4,
          low: 177.56,
          close: 178.75,
        },
        {
          time: "2018-10-23",
          open: 175.77,
          high: 179.49,
          low: 175.44,
          close: 178.53,
        },
        {
          time: "2018-10-24",
          open: 178.58,
          high: 182.37,
          low: 176.31,
          close: 176.97,
        },
        {
          time: "2018-10-25",
          open: 177.52,
          high: 180.5,
          low: 176.83,
          close: 179.07,
        },
        {
          time: "2018-10-26",
          open: 176.88,
          high: 177.34,
          low: 170.91,
          close: 172.23,
        },
        {
          time: "2018-10-29",
          open: 173.74,
          high: 175.99,
          low: 170.95,
          close: 173.2,
        },
        {
          time: "2018-10-30",
          open: 173.16,
          high: 176.43,
          low: 172.64,
          close: 176.24,
        },
        {
          time: "2018-10-31",
          open: 177.98,
          high: 178.85,
          low: 175.59,
          close: 175.88,
        },
        {
          time: "2018-11-01",
          open: 176.84,
          high: 180.86,
          low: 175.9,
          close: 180.46,
        },
        {
          time: "2018-11-02",
          open: 182.47,
          high: 183.01,
          low: 177.39,
          close: 179.93,
        },
        {
          time: "2018-11-05",
          open: 181.02,
          high: 182.41,
          low: 179.3,
          close: 182.19,
        },
      ],
    },
  ]);
  const [options, setOptions] = useState({
    options: {
      alignLabels: true,
      timeScale: {
        rightOffset: 12,
        barSpacing: 3,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        borderColor: "#fff000",
        visible: true,
        timeVisible: true,
        secondsVisible: false,
      },
      upColor: "red",
      downColor: "blue",
    },
  });

  useEffect(() => {
    ws.onopen = function (evt) {
      switch (timeFrame) {
        case "1M":
          setChartData([]);
          console.log(timeFrame);
          ws.send(
            JSON.stringify({
              ticks_history: "R_50",
              adjust_start_time: 1,
              count: 1000,
              end: "latest",
              start: 1,
              style: "candles",
              subscribe: 1,
            })
          );
          break;
        case "5M":
          setChartData([]);
          console.log(timeFrame);
          ws.send(
            JSON.stringify({
              ticks_history: "R_50",
              adjust_start_time: 1,
              count: 1000,
              end: "latest",
              start: 1,
              style: "candles",
              subscribe: 1,
              granularity: 300,
            })
          );
          break;
        default:
          setChartData([]);
          ws.send(
            JSON.stringify({
              ticks_history: "R_50",
              adjust_start_time: 1,
              count: 1000,
              end: "latest",
              start: 1,
              style: "candles",
              subscribe: 1,
            })
          );
          break;
      }
    };

    //Fired when a connection with WebSocket is opened.
    ws.onmessage = function (msg) {
      let data = JSON.parse(msg.data);
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
    };
    return () => {
      ws.close();
    };
  }, []);

  //   console.log(chartData);
  return (
    <div className="candleStickChart">
      <Tabs id="uncontrolled-tab-example" className="main-bar">
        <Tab
          eventKey="1M"
          title="1M"
          id="tabCS"
          onClick={() => setTimeFrame("1M")}
        />
        <Tab eventKey="5M" title="5M" />
        <Tab eventKey="15M" title="15M" />
        <Tab eventKey="30M" title="30M" />
        <Tab eventKey="1H" title="1H" />
        <Tab eventKey="2H" title="2H" />
        <Tab eventKey="4H" title="4H" />
        <Tab eventKey="8H" title="8H" />
        <Tab eventKey="24H" title="24H" />
        {/* <div className='title'>Date Range </div> */}
      </Tabs>

      <div className="innerCandle">
        {/* {console.log(chartData)} */}
        {chartData.length === 0 ? <CarLoader /> : null}
        <Chart
          options={options}
          candlestickSeries={
            chartData === []
              ? console.log(series)
              : [
                  {
                    data: chartData,
                  },
                ]
          }
          autoWidth
          height={400}
          darkTheme
        ></Chart>
      </div>
    </div>
  );
};

export default CandleStick;
