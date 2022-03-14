import React from "react";
import { Button } from "react-bootstrap";
import { useMetaMask } from "metamask-react";
import "./MetaMask.css";

const MetaMask = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <div className="metaMaskDiv">
        Synchronisation with MetaMask ongoing...
      </div>
    );

  if (status === "unavailable")
    return <div className="metaMaskDiv">MetaMask not available :(</div>;

  if (status === "notConnected")
    return (
      <Button className="wallet-reload" onClick={connect}>
        Connect to MetaMask
      </Button>
    );

  if (status === "connecting")
    return <div className="metaMaskDiv">Connecting...</div>;

  if (status === "connected")
    return (
      <div className="metaMaskDiv">
        Connected account <div className="metaMaskData">{account}</div> on chain
        ID <div className="metaMaskData">{chainId}</div>
      </div>
    );

  return null;
};

export default MetaMask;
