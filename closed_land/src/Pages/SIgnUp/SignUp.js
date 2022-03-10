import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import APE from "../images/ape.png";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Container } from "react-bootstrap";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./Verify/Verify";

const SignUp = () => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  function navSignIn() {
    navigate("/signin");
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setModalShow(true);
  }

  console.log(validated);

  return (
    <div>
      <Ethcall />
      {/* <Navbar /> */}
      <div className="main-container">
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  type="submit"
                  disabled={validated}
                  className="signup-button"
                >
                  SIGN UP
                </button>
              </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
