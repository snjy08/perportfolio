import * as React from 'react';

import Card from 'react-bootstrap/Card';
import IT from '../Assets/portfolio.png'
import Health from '../Assets/health.png'
import Travel from '../Assets/travel.png'
import Bank from '../Assets/Bank.png'
import BMI from '../Assets/BMI.png'
import Budget from '../Assets/budget.png'
import Discount from '../Assets/employeedetails.png'
import Movie from '../Assets/Movie.png'
import Resto from '../Assets/restaurant.png'
import Doctor from '../Assets/Doctor.png'
import Contact from '../Assets/Contact.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container  } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function CenteredTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className="projects" id='projects' style={{marginTop:'100px',marginBottom:'100px'}} data-aos="fade-down" data-aos-once='true'>
            <h1 className='text-center my-5'>Projects</h1>
            
                       <Row className='projects'>
                        <Col>
                        <MDBCarousel showIndicators showControls fade style={{color:"black"}}>
                
                <MDBCarouselItem itemId={1}>
                
                  <h5 className='text-center' style={{color:"black"}}> Html & CSS</h5>
                <Row className="d-flex justify-content-center d-block w-100 p-5 ml-5 m-5 mr-5 ">
                  
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                                  <Card style={{ width: '18rem' }} className='custom-class img'  >
                                                      <Card.Img variant="top" src={IT} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Bill Gates Porfolio</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Health} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Health Website</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Travel} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title><h6 className='text-center '> Travel Blog</h6></Card.Title>
                                                         
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                          </Row>
                                          <br /><br /><br /><br />
                  
                </MDBCarouselItem>
          
                <MDBCarouselItem itemId={2}>
                <h5 className='text-center' style={{color:"black"}}> Javascript</h5>
                <Row className="d-flex justify-content-center d-block w-100 p-5 ml-5 m-5 mr-5">
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Bank} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center'> Bank Site</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={BMI} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> BMI Calculator</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Budget} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title><h6 className='text-center '> Budget Calculator</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                          </Row>
                                          <Row className="d-flex justify-content-center" >
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Discount} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Discount Calcuator</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Movie} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Movie Search</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                          </Row>
          <br /><br /><br /><br />
          
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId={3}>
          <h5 className='text-center' style={{color:"black"}}>React</h5>
                <Row className="d-flex justify-content-center d-block w-100 p-5 ml-5 m-5 mr-5">
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Resto} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Restaurant App</h6></Card.Title>
                                                         
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Doctor} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title> <h6 className='text-center '> Doctor App</h6></Card.Title>
                                                          
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                              <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                                  <Card style={{ width: '18rem' }} className='custom-class'>
                                                      <Card.Img variant="top" src={Contact} style={{ backgroundSize: 'cover' }} />
                                                      <Card.Body>
                                                          <Card.Title><h6 className='text-center '> Contact App</h6></Card.Title>
            
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                          </Row>
                                          <br /><br /><br /><br />
                  
                </MDBCarouselItem>
              </MDBCarousel>
                        </Col>
                       </Row>
          
                        
        </div >
    );

    }