import React, { useEffect, useState } from "react";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { withTheme } from "styled-components";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";

chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
  Filler
);

const LineChart = () => {
  // const [ethTick, setEthTick] = useState([]);
  // const [chartData, setChartData] = useState([]);
  // const [time, setTime] = useState(0);
  // let arr = [];
  // let quotes = [];

  // useEffect(() => {
  //   ws.onopen = function (evt) {
  //     ws.send(JSON.stringify({ ticks: "frxXAUUSD" }));
  //   };

  //   ws.onmessage = function (msg) {
  //     let msgData = JSON.parse(msg.data);
  //     quotes.push(msgData.tick);
  //     setChartData(
  //       chartData.push({
  //         epoch: new Date(
  //           quotes[quotes.length - 1].epoch * 1000
  //         ).toLocaleTimeString(),
  //         price: quotes[quotes.length - 1].quote,
  //       })
  //     );
  //     setEthTick(chartData);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(ethTick);
  // }, [ethTick]);

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  const data = [];
  let quoteprice = []; //x-axis
  // let quotepoch = [];

  const [chartdata, setChartData] = useState([]);
  const [quoteEpoch, setQuoteEpoch] = useState([]);

  useEffect(() => {
    ws.onopen = function (evt) {
      ws.send(JSON.stringify({ ticks: "cryETHUSD" }));
    };
    //Fired when a connection with WebSocket is opened.
    ws.onmessage = function (evt) {
      const parsedData = JSON.parse(evt.data);
      const comObject = parsedData.tick;

      data.push(comObject);

      setQuoteEpoch(
        quoteEpoch.push({
          QuotePrice: data[data.length - 1].quote,
          Epoch: new Date(
            data[data.length - 1].epoch * 1000
          ).toLocaleTimeString(),
        })
      );
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    setChartData(quoteEpoch);
  }, [chartdata]);
  // console.log(chartdata[0]);

  let epoch = chartdata.map((data) => data.Epoch);
  let quote = chartdata.map((data) => data.QuotePrice);

  let dataChart = {
    labels: epoch,
    datasets: [
      {
        label: "ETH Price",
        data: quote,
        fill: true,
        lineTension: 0.2,
        backgroundColor: "rgb(203, 45, 111, 0.6)",
        borderColor: "rgb(203, 45, 111, 1)",
        pointRadius: 5,
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: "line",
            drawTime: "afterDraw",
            yScaleID: "yAxis",
            yMin: quote[quote.length - 1],
            yMax: quote[quote.length - 1],
            borderColor: "rgb(102, 252, 241)",
            borderWidth: 2,
            label: {
              content: quote[quote.length - 1],
              enabled: true,
              position: "right",
            },
          },
        },
      },
      legends: {
        labels: {
          font: {
            size: 20,
            color: "white",
          },
        },
      },
    },
    scales: {
      xAxis: {
        min: epoch[epoch.length - 10],
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgb(255, 255, 255, 0.2)",
        },
      },
      yAxis: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgb(255, 255, 255, 0.2)",
        },
      },
    },
    legend: {
      labels: {},
    },
  };

  return (
    <div className="liveChartPage">
      {/* {dataChart["labels"] === [] ? (
        <CarLoader style={{ zIndex: 100 }} />
      ) : null} */}

      {dataChart["labels"].length === 0 ? <CarLoader /> : null}
      <Line
        className="dataChart"
        data={dataChart}
        height={400}
        options={options}
      />
    </div>
  );
};

export default LineChart;
