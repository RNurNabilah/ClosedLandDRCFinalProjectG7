import React from "react";
import Cards from "../../Components/Card";
import Footer from "../../Components/Footer/Footer";
import Ethcall from "../../Components/CombNav/Ethcall";
import Navbar from "../../Components/Navbar";
// import Sidebar from "../../Components/Sidebar";
import Collapsable from "../../Components/Collapsable";
import Collapsible from "react-collapsible";
import "./Collection.css";

const Collection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [number, setNumber] = React.useState(null);
  const [popup, setPopup] = React.useState(null);
  const [activate, setActivate] = React.useState(false);

  return (
    <div className="collectionPage">
      <Ethcall />
      {/* <Navbar toggle={toggleSidebar} /> */}
      {/* <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
      <div className="banner"></div>
      <div className="collectionPicContainer">
        <img
          className="collectionPic"
          src="https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s0"
          alt=""
        />
      </div>
      <div className="collectionNameContainer">
        <span className="collectionName">AZUKI</span>
        <span className="collectionCreator">Creator: Hello World</span>
        <div className="socialMediaContainer">
          <img
            className="socialMedia"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
          <img
            className="socialMedia"
            src="
            https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
          />
          <img
            className="socialMedia"
            src="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
            alt=""
          />
        </div>
      </div>
      <div className="itemInfoContainer">
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Items</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Owners</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Floor Price</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Highest Price</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Volume Traded</span>
        </div>
      </div>
      <div className="assetsAndAttributeContainer">
        <div className="attributeContainer">
          <span className="attributes">Attributes</span>
          <Collapsable
            key={1}
            function={() => {
              if (number === 1) {
                setNumber(null);
              } else {
                setNumber(1);
              }
            }}
            className="collapsible"
            name={"Background"}
            totalNumber={"6"}
          />
          {number === 1 ? (
            <div className="content">
              <div className="checkboxDropdownContainer">
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    className="check"
                    id="I1"
                    name="I1"
                    value={"Item 1"}
                  />
                  <label htmlFor="I1">Glowing</label>
                </div>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    className="check"
                    id="I2"
                    name="I2"
                    value={"Item 2"}
                  />
                  <label htmlFor="I2">Green</label>
                </div>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    className="check"
                    id="I3"
                    name="I3"
                    value={"Item 3"}
                  />
                  <label htmlFor="I3">Red</label>
                </div>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    className="check"
                    id="I4"
                    name="I4"
                    value={"Item 4"}
                  />
                  <label htmlFor="I4">Blue</label>
                </div>
              </div>
            </div>
          ) : null}

          <Collapsable
            function={() => {
              if (number === 2) {
                setNumber(null);
              } else {
                setNumber(2);
              }
            }}
            className="collapsible"
            name={"Eyes"}
            totalNumber={"9"}
          />
          {number === 2 ? (
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ) : null}
          <Collapsable
            function={() => {
              if (number === 3) {
                setNumber(null);
              } else {
                setNumber(3);
              }
            }}
            className="collapsible"
            name={"Hair"}
            totalNumber={"10"}
          />
          {number === 3 ? (
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ) : null}
        </div>
        <div className="assetsContainer">
          <input className="searchBar" placeholder="SEARCH" type="text" />
          <div className="cardAssets">
            <Cards
              // key={index}qw
              displayDetails={() => {
                if (popup != null) {
                  setPopup(null);
                } else {
                  setPopup("1");
                }
              }}
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />

            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
          </div>
          {popup === "1" ? (
            <div id="popup1" className="popupContainer" class="overlay">
              <div class="popup">
                <button class="close" href="#" onClick={() => setPopup(null)}>
                  &times;
                </button>
                <div className="displayImageWrapper">
                  <img
                    className="displayImage"
                    src="https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="ownersContainer">
                    <span className="itemName">Items Name</span>
                    <span className="itemOwnedBy">Owned by: </span>
                  </div>
                  <div className="attributeContainer">
                    <span className="itemName">Attributes:</span>
                  </div>
                  <div className="cardAttributesContainer">
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                    <div className="cardAttributes">
                      <div className="cardTitle">
                        <span>Attributes 1</span>
                      </div>
                      <div className="cardContent">
                        <span>Color Hat</span>
                        <span className="rarity">10.00%</span>
                      </div>
                    </div>
                  </div>
                  <div className="priceInfoContainer">
                    <div className="favContainer">
                      <button
                        className="favButton"
                        onClick={() => {
                          if (activate === false) setActivate(true);
                          else {
                            setActivate(false);
                          }
                        }}
                      >
                        {activate === false ? (
                          <i class="fa fa-heart-o"></i>
                        ) : (
                          <i class="fa fa-heart"></i>
                        )}
                      </button>
                    </div>
                    <div className="totalPriceContainer">
                      <span>150</span>
                      <img
                        className="ethereumImg"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png?20161015085252"
                        alt=""
                      />
                    </div>
                    <div className="buyButtonContainer">
                      <button className="buyButton">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
