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
} from "chart.js";
import { Line } from "react-chartjs-2";

chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // const [ethTick, setEthTick] = useState([]);
  // const [chartData, setChartData] = useState([]);
  // const [time, setTime] = useState(0);
  // let arr = [];
  // let quotes = [];

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

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
        fill: false,
        fillcolor: "rgba(75,192,192,0.1)",
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        // borderCapStyle: "butt",
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: "miter",
        // pointBorderColor: "rgba(75,192,192,1)",
        // pointBackgroundColor: "#fff",
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: "rgba(75,192,192,1)",
        // pointHoverBorderColor: "rgba(220,220,220,1)",
        // pointHoverBorderWidth: 2,
        // pointRadius: 1,
        // pointHitRadius: 10,
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        min: epoch[epoch.length - 10],
      },
    },
    legend: {
      labels: {
        fontSize: 100,
      },
    },
  };

  return (
    <div>
      <Line data={dataChart} height={400} options={options} />
    </div>
  );
};

export default LineChart;
