import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "./LandingPage.css";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import Table from "./Table";
import Home from "./Home";
import News from "./News";
import Numbers from "./Numbers";
import Ethcall from "../../Components/CombNav/Ethcall";
import Typical from "react-typical";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [collections, setCollections] = useState([]);
  const [hide, setHide] = useState(false);
  const [timed, setTimed] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("print 1");
  };

  const steps = [
    "Hello 👋",
    1000,
    "Welcome to ClosedLand!",
    1000,
    "Buy.",
    500,
    "Sell.",
    500,
    "Trade.",
    500,
  ];

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 10000);
  }, []);

  // if (isLoading) {
  //   return (
  //     <Typical
  //       steps={steps}
  //       loop={1}
  //       wrapper="h1"
  //       className="loading"
  //       // onClick={setLoading(true)}
  //     />
  //   );
  // }

  return (
    <div>
      {/* <div className="loading">
        <video loop muted autoPlay controls="">
          <source
            src="https://www.youtube.com/watch?v=iutQJzAXiWo"
            type="video/mp4"
          />
         
        </video>
      </div> */}
      <div
        className="loading"
        onClick={() => setHide(true)}
        style={{
          opacity: hide ? 0 : 1,
          transition: "1.5s",
          visibility: hide ? "hidden" : "visible",
        }}
      >
        <Typical steps={steps} loop={1} wrapper="h1" className="loadingH1" />
      </div>
      {hide === true ? (
        <div className="landpage">
          <Ethcall />
          {/* <Navbar toggle={toggleSidebar} /> */}
          {/* <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
          <Home />
          <Numbers />
          <Table collections={collections} />
          <News />
          <Footer></Footer>
        </div>
      ) : null}
    </div>
  );
};

export default LandingPage;
