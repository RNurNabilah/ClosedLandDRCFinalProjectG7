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
    collectionName: "hi",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 30,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "i",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 2,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "z",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 12,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "d",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 10,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "c",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 2,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 1,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 3,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "b",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 19,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: "a",
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 4,
    scoreRating: 5,
  },
  {
    ID: 1,
    collection: "Hello Word",
    collectionName: 5,
    imageSource:
      "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png",
    collectionPrice: 8,
    scoreRating: 5,
  },
];

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState("four");
  const [tab, setTab] = useState("favorited");

  let profileData = testData.sort((x, y) => {
    let a = x.collectionName.toString().toUpperCase(),
      b = y.collectionName.toString().toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  const [data, setData] = useState(profileData);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function sortCards(text) {
    let arr;
    switch (text) {
      case "name":
        arr = [...profileData].sort((x, y) => {
          let a = x.collectionName.toString().toUpperCase(),
            b = y.collectionName.toString().toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });
        setData(arr);
        break;
      case "price":
        arr = [...profileData].sort((b, a) => {
          if (a.collectionPrice > b.collectionPrice) return 1;
          if (a.collectionPrice < b.collectionPrice) return -1;
          return 0;
        });
        setData(arr);
        break;
      default:
        break;
    }
  }

  useEffect(() => {}, [data]);

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
              id="uncontrolled-tab-example"
              className="tabs-container mb-3"
              activeKey={tab}
              onSelect={(k) => setTab(k)}
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
                <div className="tabsScroll">
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </div>
              </Tab>
              <Tab
                eventKey="collected"
                title={
                  <span>
                    <IoFileTrayFull /> Collected
                  </span>
                }
              >
                <div className="tabsScroll">
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </div>
              </Tab>
              <Tab
                eventKey="watchlist"
                title={
                  <span>
                    <IoBarChart /> Watchlist
                  </span>
                }
              >
                <div className="tabsScroll">
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                  <img className="fav-nft" src={picture1} alt="png" />
                </div>
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
              <button
                type="button"
                className="profile-filter"
                onClick={() => sortCards("name")}
              >
                Name
              </button>
            </div>
            <div>
              <button
                type="button"
                className="profile-filter"
                onClick={() => sortCards("price")}
              >
                Price
              </button>
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
        <div className="section-4-four">
          {data.map((nft, index) => {
            return (
              <Card
                key={index}
                ID={nft.ID}
                collection={nft.collection}
                collectionName={nft.collectionName}
                imageSource={nft.imageSource}
                collectionPrice={nft.collectionPrice}
                scoreRating={nft.scoreRating}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
