import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const About = () => (
    <section className="event about bg bg-img bg-about" id="about">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3 only-title">
                        <div className="main-title">
                            <h2 className=" text-white">О нас</h2>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className="offset-lg-1">
                    <div className="text-right">
                        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
                            <img alt="" className="img-fluid" src="/assets/images/event/l3.jpg" />
                        </div>
                    </div>
                </Col>
                <Col xl="6" lg="7" md="6" className="offset-xl-1">
                    <div className="abouts center-text">
                        <div className="format">
                            <div className="format-sub-text">
                                <p className="about-para">
                                    Киевская студия WebDelnica, предоставляет комплексные IT услуги для православных поместных автокефальных и автономных церквей. Узконаправленность нашей деятельности позволяет нам предоставлять максимально качественный продукт в короткие сроки и точно реализовать, все Ваши пожелания и требования к сайту.
                                </p>
                                <p className="about-para">
                                    Мы создаем как небольшие одностраничные сайты визитки, для небольшого количества посетителей, так и высоконагруженные, многостраничные и сложные веб порталы для широкого круга людей.
                                </p>
                                <p className="about-para">
                                    WebDelnica организовывает и участвует в благотворительных IT проектах. С 2020 года действует благотворительная акция: "Всем приходам УПЦ бесплатный сайт визитка", создается современный аналог электронного Часослова. Мы всегда готовы откликнутся на Ваше предложение и поучаствовать в благотворительном проекте.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;
