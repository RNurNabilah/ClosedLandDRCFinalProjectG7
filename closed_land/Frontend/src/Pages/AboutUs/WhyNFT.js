import React from "react";
import { Row } from "react-bootstrap";
import nft from "../../images/nft.png";

function WhyNFT() {
  return (
    <div>
      <Row className="nft">
        <div className="nft-logo" data-aos="fade-right">
          <img id="WNFT" src={nft} alt="nft" />

          <div className="whynft-header" data-aos="fade-down">
            <h2 className="whynft-name">Why NFT?</h2>
            <div className="rectangle6">.</div>
            <h5 className="whynft-describe">
              NFTs allow people to prove ownership of digital assets. Owners can
              also programme royalties for themselves into the metadata before
              selling on, to receive a percentage of future sales.
            </h5>
            <h5 className="whynft-describe">
              Unlike cryptocurrencies, which can be exchanged with one another,
              NFT is unique and cannot be exchanged with another item.
            </h5>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default WhyNFT;
