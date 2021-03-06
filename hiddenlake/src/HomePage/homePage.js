import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import AptImages from '../ApartmentFiles/aptImages'
import ContactForm from './contactForm'

import './homePage.css'
import InteriorExteriorImages from './interiorExteriorImgs'




import IntroVideo from './introVideo'

const HomePage = () => {


    return (
       <Container fluid>
           <Row>
               <Col>
                    <IntroVideo />
               </Col>
            </Row>
            
            <Row xs='2' style={{marginTop :'2em'}}>
                <Col id="colSlogan">
                    <h1 id="aptSlogan">RELAXATION STARTS HERE</h1>
                </Col>
                <Col id="colDesc">
                    <p id="aptDescription">Here at the hidden lake apartments, we garuntee that you will find your paradise. You will instantly be swept
                        away by our breathtaking views that over look hidden lake. Having your home feel like a getaway is something
                        we pride ourselves on. Whether it is our friendly concierge, amazing views, waterside activites, etc. We garuntee
                        that you will be nothing less than satisfied in your new home!
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <AptImages />
                </Col>
            </Row>

            <Row>
                <Col>
                    <InteriorExteriorImages />
                </Col>
            </Row>

            <Row xs='1' md='2' style={{marginTop : '2em'}}>
                <Col id="colForm">
                    <ContactForm />
                </Col>
                <Col id="aptInfo">
                    <Row>
                        <Col>
                            <h3 style={{textAlign : 'center'}}>Business Hours / Contact Information </h3>
                        </Col>
                    </Row>
                    <Row style={{marginTop : '4em'}}>
                        <Col>
                            <ul>
                                <li>Monday - Friday: 8:00am to 5:00pm</li>
                                <li>Saturday: 10:00am to 3:00pm</li>
                                <li>Closed on Sundays</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Email: hiddenLakeApts@hla.com</li>
                                <li>Phone: 555-555-5555</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
       </Container>
    )
}

export default HomePage