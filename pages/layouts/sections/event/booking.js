import React from 'react'
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'
const Booking = () => {
     return (
    <section className="event booking set-relative" id="register">
        <div className="circle">
        </div>
        <Container id="booking">
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2><span>Закажи</span> Свой сайт</h2>
                        </div>
                        <div className="sub-title">
                            <p>
                                Сделайте заказ <span>в этом месяце,</span> и получите
                                скидку <span>на разработку </span> и поддержку <span> сайта, </span>
                                что позволит значительно сэкономить бюджет вашего прихода.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <Form className="form-inline m-b-50">
                        <Col>
                            <FormGroup>
                                <input placeholder="first name" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <input placeholder="last name" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <input placeholder="email" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <input placeholder="mobile" type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <input placeholder="company name" type="text" />
                            </FormGroup>
                        </Col>
                    </Form>

                    <div className="text-center">
                        <a className="btn btn-default primary-btn m-0-auto" href="#">заказать</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)}


export default Booking;
