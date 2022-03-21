import React, { useEffect } from "react";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";

const Ethcall = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // console.log("print 1");
  };
  // let toggleSidebar = props.toggleSidebar;
  const [ethTick, setEthTick] = React.useState(0);

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  useEffect(() => {
    ws.onopen = function (evt) {
      ws.send(JSON.stringify({ ticks: "cryETHUSD" }));
    };

    ws.onmessage = function (msg) {
      var data = JSON.parse(msg.data);
      // console.log(data);
      setEthTick(data.tick.quote.toFixed(2));
      // console.log("Ethereum Price: $" + ethTick);
      // console.log("Ticks update: %o", data);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <Navbar ethTick={ethTick} toggle={toggleSidebar} />
      <Sidebar
        ethTick={ethTick}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Ethcall;
