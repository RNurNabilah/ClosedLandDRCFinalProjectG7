import React from "react";
import "./Footer.css";
import logo from "../../images/Artboard.svg";
import contactlogo from "../../images/contactus.png";
import twitter from "../../images/twittericon.png";
import discord from "../../images/discordicon.png";
import instagram from "../../images/igicon.png";
import youtube from "../../images/youtubeicon.png";
import email from "../../images/emailicon.png";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  // Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faInstagram,
  faYoutube,
  faRocketchat,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <Row className="email-inputgroup">
        <InputGroup>
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" id="button-addon2">
            {/* <span
                class=" glyphicon glyphicon-arrow-right"
                aria-hidden="true"
              ></span> */}
            Send
          </Button>
        </InputGroup>
        <div className="alltorow-container">
          <div className="left-container">
            <div className="iconandname">
              <img id="ilogo" src={logo} alt="logo" />
              <h2 className="footer-text">ClosedLand</h2>
            </div>
            <div className="fd">
              <h5 id="footer-describe">
                NFT platform provider which gives aesthetes and digital art
                creators a one-stop centre to do what they want.
              </h5>
            </div>
          </div>
          <div className="middle-container">
            <Row className="contact-us">
              <Col>
                <h3 className="cu">
                  <img
                    className="contact-logo"
                    src={contactlogo}
                    alt="contact"
                  />
                  Contact Us
                </h3>
              </Col>
              <h5 className="footer-contact-number">(+60) 12-3456789</h5>
            </Row>
          </div>
          <div className="right-container">
            <h3 className="footer-socmed">Our Social Media</h3>
            <div className="socmed-icon">
              <a href="https://twitter.com/ClosedLand_22" className="twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  // rel="noopener noreferrer"
                  target="_blank"
                />
              </a>
              {/* src={twitter}
              // alt="twitter" target="_blank" rel="noopener noreferrer" //
              aria-label="Twitter" */}
              {/* <img className="discord" src={discord} alt="discord" /> */}
              <a href="https://discord.com/channels/@me" className="discord">
                <FontAwesomeIcon icon={faDiscord} size="2x" target="_blank" />
              </a>
              {/* <img className="instagram" src={instagram} alt="instagram" /> */}
              <a
                href="https://www.instagram.com/closedland_22/"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" target="_blank" />
              </a>
              {/* <img className="youtube" src={youtube} alt="youtube" /> */}
              <a href="https://www.youtube.com//" className="youtube">
                <FontAwesomeIcon icon={faYoutube} size="2x" target="_blank" />
              </a>
              {/* <img className="email" src={email} alt="email" /> */}
              <a
                href="https://rocketchat.besquare.com.my/group/DRC_GROUP_TEAM_7"
                className="rocketchat"
              >
                <FontAwesomeIcon
                  icon={faRocketchat}
                  size="2x"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </Row>

      <div className="footer-trademark">
        <p className="footer-copyright">
          {" "}
          &copy;{new Date().getFullYear()} ClosedLand
        </p>
      </div>
    </div>
  );
};

export default Footer;
