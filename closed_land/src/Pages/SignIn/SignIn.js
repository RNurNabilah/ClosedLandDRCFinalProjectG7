import React, { useState } from "react";
import "./SignInStyle.css";
import NFT from "../images/nft.png";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
// import Sidebar from "../../Components/Sidebar";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const signInLink =
    "https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&date_first_contact=2022-01-28&signup_device=desktop&utm_source=null&platform=";
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  setTimeout(() => {
    let myIFrame = document.getElementById("myFrame");
    let emailInput = myIFrame.contentWindow.document.getElementById("txtEmail");
    emailInput.value = email;
  }, 1000);

  const submitButton = () => {
    console.log(email);
    console.log(password);
  };

  let navigate = useNavigate();

  function navSignUp() {
    navigate("/signup");
  }

  return (
    <div>
      <Ethcall />
      {/* <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
      <div className="main-container">
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
            <Form>
              <Form.Group
                className="signInUsername mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>USERNAME</Form.Label>
                <Form.Control
                  placeholder="Username"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="signInPassword mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="forgot-password">
                <a href="https://deriv.com/reset-password/" target="_blank">
                  Forgot Password?
                </a>
              </div>
              <div className="login-button-container">
                <button className="login-button"> LOGIN</button>
              </div>
            </Form>
          </div>
          {/* <iframe src={signInLink} id="myFrame" title="myFrame"></iframe> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
