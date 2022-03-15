import React from "react";
import "./Footer.css";
import logo from "../../images/Artboard.svg";
import contactlogo from "../../images/contactus.png";
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

const initialFormData = Object.freeze({
  message: "",
});

const Footer = (props) => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an error.", err));
  };
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for connecting.`);
    const templateId = "template_edogtjl";
    const serviceID = "service_f0a5iyg";
    sendFeedback(serviceID, templateId, { message: formData.query });

    console.log(formData);
  };

  return (
    <div className="main-footer">
      <Row className="email-inputgroup">
        <InputGroup>
          <FormControl
            onChange={handleChange}
            name="message"
            // value={email}
            placeholder="Email"
            // aria-label="Email"
            aria-describedby="basic-addon2"
            // pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            required
            // <h4> Please enter valid email </h4>
          />
          <Button
            onClick={handleSubmit}
            disabled={!sendFeedback}
            type="submit"
            id="button-addon2"
          >
            Send
          </Button>
        </InputGroup>
        <div className="alltorow-container">
          <div className="left-container">
            <div className="iconandname">
              <img id="ilogo" src={logo} alt="logo" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <h2 className="footer-text">ClosedLand</h2>
              </Link>
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
              <a
                href="https://twitter.com/ClosedLand_22"
                className="twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              {/* src={twitter}
              // alt="twitter" target="_blank" rel="noopener noreferrer" //
              aria-label="Twitter" */}
              {/* <img className="discord" src={discord} alt="discord" /> */}
              <a
                href="https://discord.com/channels/@me"
                className="discord"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              {/* <img className="instagram" src={instagram} alt="instagram" /> */}
              <a
                href="https://www.instagram.com/closedland_22/"
                className="instagram"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              {/* <img className="youtube" src={youtube} alt="youtube" /> */}
              <a
                // href="https://www.youtube.com//"
                className="youtube"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              {/* <img className="email" src={email} alt="email" /> */}
              <a
                href="https://rocketchat.besquare.com.my/group/DRC_GROUP_TEAM_7"
                className="rocketchat"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faRocketchat} size="2x" />
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
