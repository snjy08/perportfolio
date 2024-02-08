import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Banner() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div id='banner' className='my-5' data-aos="fade-up">
      <Container>
        <Row className=' px-lg-5 px-md-0'>
          <Col className='my-5 ps-5' md={6}>
            <h2 className='mt-5 mb-3 text-warning first-heading fs-1'><span className='fs-5 text-danger fw-bold'>Hello i'm,</span><br></br>SANJAY M</h2>
            <h5 className='text-primary sec-heading my-4'>I'm a <span>MEA(R)N Stack Developer</span></h5>
            <div className="banner-button mt-5">
              
              <a class="btn btn-outline-success cv-button" onClick={handleShow}>CV </a>
            </div>

          </Col>
          
        </Row>
        <Modal lg show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>CV</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}

export default Banner