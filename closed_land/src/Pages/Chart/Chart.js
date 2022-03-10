import React from "react";
// import { Line } from 'react-chartjs-2';
// import { Container } from "react-bootstrap";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
// import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import Convert from "./converter";
import Tab from "./tab-chart";
import "./chart.css";
import LineChart from "./LineChart";

const Chart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="chartPage">
      <Ethcall />
      {/* <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
      <Convert />
      <Tab />
      {/* <LineChart /> */}
      <Footer />
    </div>
  );
};

export default Chart;
