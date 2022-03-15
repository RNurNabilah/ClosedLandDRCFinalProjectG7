import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import APE from "../images/ape.png";
import Ethcall from "../../Components/CombNav/Ethcall";
// import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Tooltip, Alert } from "react-bootstrap";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./Verify/Verify";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";
import { UserContext } from "../SignIn/SignIn";

const SignUp = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [vCode, setVCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertWrong, setAlertWrong] = useState(false);
  // const user = useContext(UserContext);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

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
    setSentEmail(true);
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

  function verifyEmail() {
    setIsLoading(true);
    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          new_account_virtual: 1,
          type: "trading",
          client_password: password,
          residence: "id",
          verification_code: vCode,
        })
      );
    };
    //Fired when a connection with WebSocket is opened.
    ws.onmessage = function (msg) {
      const data = JSON.parse(msg.data);
      console.log(data);
      if (!("error" in data) === false) {
        setIsLoading(false);
        setAlertWrong(true);
        ws.close();
      } else {
        setAlert(true);
        setIsLoading(false);
        setSentEmail(false);
        setVCode("");
        ws.close();
        setTimeout(() => {
          navSignIn();
        }, 3000);
      }
    };
  }

  console.log(user);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Go to your 'Manage Your Account Settings' in Deriv website or click the
      link below to create your api token!
    </Tooltip>
  );

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
            {sentEmail === false ? (
              <Form>
                <Form.Group className="email1" controlId="formBasicEmail">
                  <Form.Label> EMAIL</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    // onKeyDown={handleEnterSubmit}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
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
            ) : (
              <Form>
                <Form.Group className="usernames" controlId="vCode">
                  <Form.Label> Verification Code</Form.Label>
                  <Form.Control
                    type="textfield"
                    placeholder="Enter verification code"
                    onChange={(e) => setVCode(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="password" controlId="formBasicPassword">
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    password
                  ) ? null : password !== "" ? (
                    <Form.Text id="passNoMatch">
                      Min eight characters, one uppercase letter, one lowercase
                      letter, one number and one special character
                    </Form.Text>
                  ) : null}
                </Form.Group>
                <Form.Group
                  className="password2"
                  controlId="formBasicPassword2"
                >
                  <Form.Label> Re-enter Your Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter your password"
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                  />
                  {password !== password2 ? (
                    <Form.Text id="passNoMatch">
                      Passwords do not match.
                    </Form.Text>
                  ) : null}
                </Form.Group>
                <div className="signup-container">
                  <button
                    type="button"
                    onClick={verifyEmail}
                    className="signup-button"
                    disabled={password !== password2 || password === ""}
                  >
                    SIGN UP
                  </button>
                </div>
              </Form>
            )}
          </div>
        </div>
        <div className="alertSignUp">
          <Alert
            show={alert}
            variant="success"
            onClose={() => setAlert(false)}
            dismissible
          >
            <Alert.Heading>Email Verified!</Alert.Heading>
          </Alert>
        </div>
        <div className="alertSignUp">
          <Alert
            show={alertWrong}
            variant="danger"
            onClose={() => setAlertWrong(false)}
            dismissible
          >
            <Alert.Heading>Invalid verification code!</Alert.Heading>
          </Alert>
        </div>
        {/* <span style={{ color: "white" }}>{user["authorize"]["fullname"]}</span> */}
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
