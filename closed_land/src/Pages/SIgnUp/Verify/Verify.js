import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Verify.css";
import EmailAnim from "../../../Components/EmailAnim/EmailAnim";

const Verify = (props) => {
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
          Check your email!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <EmailAnim />
        </div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Verify;
