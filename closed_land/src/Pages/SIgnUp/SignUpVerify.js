import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import APE from "../images/ape.png";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Container } from "react-bootstrap";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./Verify/Verify";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";

const SignUpVerify = () => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [vCode, setVCode] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  function verifyEmail() {
    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          new_account_virtual: 1,
          type: "trading",
          client_password: "C0rrect_p4ssword",
          residence: "id",
          verification_code: vCode,
        })
      );
    };
    //Fired when a connection with WebSocket is opened.
    ws.onmessage = function (msg) {
      const data = JSON.parse(msg.data);
      console.log(data);
      setValidated(true);
      setModalShow(true);
      setIsLoading(false);
    };
  }

  function navSignIn() {
    navigate("/signin");
  }

  function handleSubmit() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsLoading(true);
      verifyEmail();
    } else {
      console.log("lol");
    }
  }

  function handleModal() {
    setModalShow(false);
    setValidated(false);
    // setEmail("");
    let frm = document.getElementById("formBasicEmail");
    frm.value = "";
    ws.close();
  }

  function handleEnterSubmit(event) {
    if (event.keyCode === 13) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setIsLoading(true);
        sendEmail();
      } else {
        console.log("lol");
      }
    }
  }

  return (
    <div>
      <Ethcall />
      {/* <Navbar /> */}

      <div className="main-container">
        {isLoading ? (
          <div className="loadingSignUp">
            <CarLoader></CarLoader>
          </div>
        ) : null}
        <h1 className="title animate__animated animate__fadeIn">SIGN UP</h1>
        <div className="sub-container">
          <div className="rectangle1 animate__animated animate__slideInLeft">
            <img className="nft2" src={APE} alt="png" />
          </div>
          <div className="rectangle2 animate__animated animate__slideInRight">
            <div className="outer-button">
              <button className="button-signin" onClick={navSignIn}>
                SIGN IN
              </button>
              <button className="button-signup" disabled>
                SIGN UP
              </button>
            </div>
            <Form>
              <Form.Group className="usernames" controlId="vCode">
                <Form.Label> Verification Code</Form.Label>
                <Form.Control
                  type="textfield"
                  placeholder="Enter verification code"
                />
              </Form.Group>
              <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label> Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="password2" controlId="formBasicPassword2">
                <Form.Label> Re-enter Your Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter your password"
                />
              </Form.Group>
              <div className="signup-container">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="signup-button"
                >
                  SIGN UP
                </button>
              </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={handleModal}
                props={email}
              />
            </Form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUpVerify;
