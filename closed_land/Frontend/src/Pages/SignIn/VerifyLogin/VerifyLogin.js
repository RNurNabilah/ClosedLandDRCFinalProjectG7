import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./VerifyLogin.css";
import Incorrect from "../../../Components/Animations/Incorrect/Incorrect";

const VerifyLogin = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="verifyModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          API Token is invalid.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Incorrect />
        </div>
        <p>Please re-enter your api token.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerifyLogin;
