import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Cards from "../Card";
import React from "react";
import "./Collection.css";
import PropTypes from "prop-types";

const CollectionLaptop = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [popup, setPopup] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(true);
  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };
  const [itemSelect, setItemSelect] = React.useState("All Item");
  const [firstItem, setFirstItem] = React.useState("Single Item");
  const [secondItem, setSecondItem] = React.useState("Bundles");

  const [priceSelect, setPriceSelect] = React.useState("Low to High");
  const [itemDropDown, setItemDropDown] = React.useState(false);
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
        rel="stylesheet"
        integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="laptopCollection">
        <div className="laptopBanner"></div>
        <div className="laptopCollectionPicContainer">
          <img
            className="laptopCollectionPic"
            src="https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s0"
            alt=""
          />
        </div>
        <div className="laptopCollectionNameContainer">
          <h1 className="laptopCollectionName">AZUKI</h1>
          <span className="laptopCollectionCreator">Creator: Hello World</span>
        </div>
        <div className="laptopSocialMediaContainer">
          <img
            className="laptopSocialMedia"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
          <img
            className="laptopSocialMedia"
            src="
            https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
          />
          <img
            className="laptopSocialMedia"
            src="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
            alt=""
          />
        </div>
        <div className="laptopItemInfoContainer">
          <div className="laptopEachItemContainer" id="im">
            <span className="laptopItemNumbers">XXX</span>
            <span className="laptopItemType">Items</span>
          </div>
          <div className="laptopEachItemContainer" id="on">
            <span className="laptopItemNumbers">XXX</span>
            <span className="laptopItemType">Owners</span>
          </div>
          <div className="laptopEachItemContainer" id="fp">
            <span className="laptopItemNumbers">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                alt=""
                style={{ width: "24%" }}
              />
              XXX
            </span>
            <span className="laptopItemType">Floor Price</span>
          </div>
          <div className="laptopEachItemContainer" id="hp">
            <span className="laptopItemNumbers">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                alt=""
                style={{ width: "24%" }}
              />
              XXX
            </span>
            <span className="laptopItemType">Highest Price</span>
          </div>
          <div className="laptopEachItemContainer" id="vt">
            <span className="laptopItemNumbers">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                alt=""
                style={{ width: "24%" }}
              />
              XXX
            </span>
            <span className="laptopItemType">Volume Traded</span>
          </div>
        </div>
      </div>
      {openFilter === true ? (
        <div className="laptopAssetsnAttributesContainer">
          <div className="laptopAttributesContainer">
            <button className="laptopFilter" onClick={toggleFilter}>
              <div className="buttonContainer">
                <i class="fa fa-filter" aria-hidden="true"></i>
                Filter
              </div>
              <div>
                <i
                  class="fa fa-arrow-left"
                  style={{ marginRight: "10px" }}
                  aria-hidden="true"
                ></i>
              </div>
            </button>
          </div>
          <div className="laptopAssetsContainer">
            <div className="laptopCardAssets">
              <input
                className="laptopSearchBar"
                placeholder="SEARCH"
                type="text"
              />
              <div className="laptopDropDownContainer">
                <div className="laptopItemsDropDown">
                  <div
                    className="laptopItemsDropDownBtn"
                    onClick={() => {
                      setItemDropDown(!itemDropDown);
                    }}
                  >
                    {itemSelect}
                    <i
                      class="fa fa-sort-down"
                      style={{ marginBottom: "7px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {itemDropDown === true ? (
                    <div id="myDropdown" class="dropdown-content">
                      <a
                        href="#"
                        onClick={() => {
                          setItemSelect(firstItem);
                          setFirstItem(itemSelect);
                          setItemDropDown(!itemDropDown);
                        }}
                      >
                        {firstItem}
                      </a>
                      <a
                        href="#"
                        onClick={() => {
                          setItemSelect(secondItem);
                          setSecondItem(itemSelect);
                          setItemDropDown(!itemDropDown);
                        }}
                      >
                        {secondItem}
                      </a>
                    </div>
                  ) : null}
                </div>
                <div className="laptopPriceDropDown">
                  <div className="laptopPriceDropDownBtn">
                    {priceSelect}
                    <i
                      class="fa fa-sort-down"
                      style={{ marginBottom: "7px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="laptopChangeSizeContainer">
                  <div className="laptopSmallSize">
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                  </div>
                  <div className="laptopBigSize" onClick={() => {}}>
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <Cards
                // key={index}qw
                displayDetails={() => {
                  setPopup(!popup);
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
                displayDetails={() => {
                  setPopup(!popup);
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
                displayDetails={() => {
                  setPopup(!popup);
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
                displayDetails={() => {
                  setPopup(!popup);
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
                displayDetails={() => {
                  setPopup(!popup);
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
            </div>
          </div>
        </div>
      ) : (
        <div className="laptopAssetsnAttributesContainerOff">
          <div className="laptopAttributesContainerOff">
            <button className="laptopFilterOff" onClick={toggleFilter}>
              <div className="buttonContainerOff">
                <i
                  class="fa fa-arrow-right"
                  style={{ marginRight: "10px" }}
                  aria-hidden="true"
                ></i>
              </div>
            </button>
          </div>
          <div className="laptopAssetsContainerOff">
            <span>hi</span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CollectionLaptop;
