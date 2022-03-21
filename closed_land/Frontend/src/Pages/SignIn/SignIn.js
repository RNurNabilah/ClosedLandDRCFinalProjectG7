import React, { useState, useEffect, createContext, useContext } from "react";
import "./SignInStyle.css";
import NFT from "../images/nft.png";
import Ethcall from "../../Components/CombNav/Ethcall";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";
import { Alert } from "react-bootstrap";
import { Button, Form, Tooltip, OverlayTrigger } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import VerifyLogin from "./VerifyLogin/VerifyLogin";
import { RiQuestionFill, RiQuestionLine } from "react-icons/ri";
import CarRoad from "../../Components/Animations/CarRoad/CarRoad";

export const UserContext = createContext();

const SignIn = () => {
  const signInLink =
    "https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&date_first_contact=2022-01-28&signup_device=desktop&utm_source=null&platform=";
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();
  const currUser = useContext(UserContext);

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  function login() {
    setIsLoading(true);

    if (token.length !== 0) {
      ws.onopen = function (evt) {
        ws.send(
          JSON.stringify({
            authorize: token,
          })
        );
      };
      //Fired when a connection with WebSocket is opened.
      ws.onmessage = function (msg) {
        const data = JSON.parse(msg.data);
        // console.log(data);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
        console.log(user);
        if (!("error" in data) === false) {
          setIsLoading(false);
          setShowModal(true);
        } else {
          setIsLoading(false);
          setAlert(true);
          let frm = document.getElementById("formBasicToken");
          frm.value = "";
        }
      };
    }
  }

  function handleModal() {
    setShowModal(false);
    let frm = document.getElementById("formBasicToken");
    frm.value = "";
    ws.close();
  }

  let navigate = useNavigate();

  function navSignUp() {
    navigate("/signup");
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Go to your 'Manage Your Account Settings' in Deriv website or click the
      link below to create your api token!
    </Tooltip>
  );

  return (
    <div>
      <Ethcall />
      <div className="main-container">
        {isLoading ? (
          <div className="loadingSignUp">
            <CarLoader></CarLoader>
          </div>
        ) : null}
        <h1 className="title animate__animated animate__fadeIn">SIGN IN</h1>
        <div className="signin-container">
          <div className="rectangle1 animate__animated animate__slideInLeft">
            <img className="nft-image" src={NFT} alt="png" />
          </div>
          <div className="rectangle2 animate__animated animate__slideInRight">
            <div className="buttons">
              <button type="button" className="small_signin" disabled>
                SIGN IN
              </button>
              <button
                type="button"
                className="small_signup"
                onClick={navSignUp}
              >
                SIGN UP
              </button>
            </div>
            {currUser ? (
              <div className="loggedIn">
                <CarRoad></CarRoad>
                <h1>You are logged in already.</h1>
              </div>
            ) : (
              <Form>
                <Form.Group
                  className="signInUsername mb-3"
                  controlId="formBasicToken"
                >
                  <Form.Label>
                    API TOKEN{" "}
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button className="questionSignIn">
                        {" "}
                        <RiQuestionFill />
                      </Button>
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter API Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                  <Form.Text className="signInText">
                    We'll never share your information with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="forgot-password">
                  <a
                    href="https://app.deriv.com/account/api-token"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Create an API Token
                  </a>
                </div>
                <div className="login-button-container">
                  <button
                    type="button"
                    className="login-button"
                    onClick={login}
                    disabled={token === ""}
                  >
                    LOGIN
                  </button>
                </div>
              </Form>
            )}

            <VerifyLogin show={showModal} onHide={handleModal} />
          </div>
        </div>
        <div className="alertSignIn">
          <Alert
            show={alert}
            variant="success"
            onClose={() => setAlert(false)}
            dismissible
          >
            {currUser ? (
              <Alert.Heading>
                Welcome {currUser["authorize"]["fullname"]}!
              </Alert.Heading>
            ) : null}
          </Alert>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
