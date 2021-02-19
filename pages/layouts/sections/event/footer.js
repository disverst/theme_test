import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <React.Fragment>
        <footer className="event contact set-relative bg bg-img3 bg-about p-b-0" id="contact">
            <Container className="p-b-100">
                <Row>
                    <Col md="6" className="offset-md-3">
                        <div className="title title3 only-title">
                            <div className="main-title">
                                <h2 className=" text-white">Контакты</h2>
                            </div>
                            <div className="sub-title">
                                <p className="text-white m-b-10">
                                    Если у Вас возникли дополнительные вопросы или Вы желаете начать разработку сайта или приложения, просим Вас связатся с нами любым удобным для Вас способом:
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl="5" md="6" className="offset-xl-1 p-r-0 map">
                        <div className="iframe-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1269.152822658577!2d30.46393905815873!3d50.49126899188096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1611574903620!5m2!1sru!2sua"> </iframe>
                        </div>
                    </Col>
                    <Col xl="5" md="6" className="p-l-0 set-z-index form-footer">
                        <div className="bg-white">
                            <ul>
                                <li className="p-t-20 p-b-15">
                                    <a className="contacts-phone" target="_blank" href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+123,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4909658,30.4612265,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cd92538eb30d:0xe833f16b60c7bc2!8m2!3d50.4909658!4d30.4634152">
                                        <i className="fa fa-home contacts-margin"></i>
                                        04073, г. Киев, ул. Кирилловская, 123
                                    </a>
                                </li>
                                <li className="p-t-20 p-b-15">
                                    <a className="contacts-phone" href="mailto:info@webdelnica.com">
                                        <i className="fa fa-envelope contacts-margin"></i>
                                        info@webdelnica.com
                                    </a>
                                </li>
                                <li className="p-t-20 p-b-15">
                                    <a className="contacts-phone" href="tel:+380683736815">
                                        <i className="fa fa-phone contacts-margin"></i>
                                        +380 068 373 68 15
                                    </a>
                                </li>
                                <li className="p-t-20 p-b-40">
                                    <a className="contacts-phone" href="https://telegram.me">
                                        <i className="fa fa-telegram contacts-margin"></i>
                                        +380 068 373 68 15
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img alt="" className="set-abs top-0 plane2" src="/assets/images/event/footer/2.png" />
            <img alt="" className="set-abs bottom-0 plane" src="/assets/images/event/footer/1.png" />
        </footer>
        <div className="event copyright flex">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <p className="copyright-text text-left text-white">© 2020 WebDelnica. Все права защищены </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </React.Fragment>
)


export default Footer;
