import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        <div className='' style={{marginTop:'200px'}} id='aboutme' >
            <h1 className='text-center my-5'>So, who am I?</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col  lg="3" md={6}>
                        <h4 className='mt-  fs-5 about-me-h4 about-me-text'>
                          Lets Have a Talk
                        </h4>  
                    </Col>
                    <Col  lg="5" md={6}>
                        <p className='about-me-p'>
                        Hi, I'm SANJAY.M, A Web Designer/Developer with an Bachelors degree in Computer Science and 6 months full-stack web developer with a passion for creating beautiful and functional websites.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AboutMe
