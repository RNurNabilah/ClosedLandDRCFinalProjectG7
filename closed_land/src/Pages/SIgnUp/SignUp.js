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

const SignUp = () => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

  function sendEmail() {
    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          verify_email: email,
          type: "account_opening",
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
      sendEmail();
    } else {
      console.log("lol");
    }
  }

  function handleModal() {
    setModalShow(false);
    setValidated(false);
    setEmail("");
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
              {/* <Form.Group className="usernames" controlId="formBasicUsername">
                <Form.Label> Username</Form.Label>
                <Form.Control
                  type="textfield"
                  placeholder="Enter your username"
                />
              </Form.Group> */}

              <Form.Group className="email1" controlId="formBasicEmail">
                <Form.Label> EMAIL</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleEnterSubmit}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>

              {/* <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label> Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group className="password2" controlId="formBasicPassword2">
                <Form.Label> Re-enter Your Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter your password"
                />
              </Form.Group> */}
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

export default SignUp;

{
  /* <div className="form-username1">
                        <p className='usernames'>USERNAME</p>
                        <input type="text" placeholder="Enter your username" />
                       </div>
                        <div className="form-email1">
                          <div className='email'>EMAIL</div>
                          <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-pass1">
                          <div className='password'>PASSWORD</div>
                          <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-pass2">
                          <div className='password2'>RE-ENTER YOUR PASSWORD</div>
                          <input type="password" placeholder="Re-enter your password" />
                        </div> */
}
