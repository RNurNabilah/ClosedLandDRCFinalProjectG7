import React, { useState, useEffect } from "react";
import "./Profile.css";
import CoverProfile from "../images/headerProfile.jpg";
import ProfileImage from "../images/profilePicture.jpg";
import EthLogo from "../images/Ethereum.png";
import Footer from "../../Components/Footer/Footer";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
// import Sidebar from "../../Components/Sidebar";
import Card from "../../Components/Card";
import {
  Container,
  Tab,
  Tabs,
  Row,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import picture1 from "../images/profile-1.png";
import {
  IoSearchSharp,
  IoStar,
  IoFileTrayFull,
  IoBarChart,
} from "react-icons/io5";
import MetaMask from "../../Components/MetaMask/MetaMask";

const testData = [
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: "1 ETH",
    scoreRating: 5,
  },
];

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [sort, setSort] = useState("four");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function fourByFour() {}

  return (
    <div>
      <Ethcall />
      {/* <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
      <div className="container-main">
        <div className="header-img">
          <img className="profile-header" src={CoverProfile} alt="jpg" />
        </div>
        <div className="section-2">
          <div className="first-two">
            <div className="profile-name">
              <div className="myprofile">My Profile</div>
              <div className="profileImg">
                <img className="profile-img" src={ProfileImage} alt="jpg" />
              </div>
              {/* <img className="profile-img" src={ProfileImage} alt="jpg" /> */}
              <div className="username-date">
                <h2>CoolGuyz$$$</h2>
                <h2>12th June 2020</h2>
              </div>
            </div>

            <div className="my-wallet">
              {/* <div className="mywallet"> My Wallet</div>
              <Container className="wallet-balance">
                <img className="eth-wallet" src={EthLogo} alt="png" />
                <div className="balance-number">23</div>
              </Container> */}
              <MetaMask></MetaMask>
              {/* <Button className="wallet-reload">Connect Wallet</Button> */}
            </div>
          </div>
          <div className="profileContainer">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="tabs-container mb-3"
            >
              <Tab
                eventKey="favorited"
                title={
                  <span>
                    <IoStar />
                    Favourited
                  </span>
                }
              >
                <Container>
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </Container>
              </Tab>
              <Tab
                eventKey="collected"
                title={
                  <span>
                    <IoFileTrayFull /> Collected
                  </span>
                }
              >
                <Container>
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </Container>
              </Tab>
              <Tab
                eventKey="watchlist"
                title={
                  <span>
                    <IoBarChart /> Watchlist
                  </span>
                }
              >
                <Container>
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </Container>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="section-3">
          <InputGroup className="search-mb-3">
            <InputGroup.Text id="basic-addon1">
              <IoSearchSharp />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Container className="filter-button">
            <div>
              <button className="profile-filter">Price</button>
            </div>
            <div>
              <button className="profile-filter">Price</button>
            </div>
            <div>
              <button className="profile-filter">Price</button>
            </div>
            <div>
              <button className="profile-filter">Price</button>
            </div>
          </Container>
          <div className="profile-display">
            <button
              type="button"
              className="sizing1-profile"
              onClick={() => setSort("four")}
            >
              4 x 4
            </button>
            <button
              type="button"
              className="sizing2-profile"
              onClick={() => setSort("eight")}
            >
              8 x 8
            </button>
          </div>
        </div>
        {sort === "four" ? (
          <div className="section-4-four">
            {testData.map((nft, index) => {
              return (
                <Card
                  key={index}
                  ID={nft["ID"]}
                  collection={nft["collection"]}
                  collectionName={nft["collectionName"]}
                  imageSource={nft["imageSource"]}
                  collectionPrice={nft["collectionPrice"]}
                  scoreRating={nft["scoreRating"]}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
