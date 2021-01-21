import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const About = () => (
    <section className="event about bg bg-img bg-about">
        <Container id="about">
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
                            <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                data-tilt-speed="400" src="/assets/images/event/l3.jpg" />
                        </div>
                    </div>
                </Col>
                <Col xl="5" lg="7" md="6" className="offset-xl-1">
                    <div className="abouts center-text">
                        <div className="format">
                            <div className="format-small-text">
                                <h6 className="text-white borders-before text-uppercase"><span>Первая православная Веб-Студия</span></h6>
                            </div>
                            <div className="format-head-text">
                                <h3 className="about-font-header text-white">
                                    Web программирование и разработка сайтов
                                </h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">
                                    Разработка и сопровождение специализированных веб ресурсов, интернет сайтов, Сопровождение и дальнейшее обслуживание.
                                </p>
                                <p className="about-para">Создание интернет магазина, для продажи богословских книг, икон и другой церковной утвари. Также предоставить возможность пользователям оставить поминальную записку или заказать молебен, перечислить пожертвования по интернету.
                                </p>

                            </div>
                            <a className="btn btn-default " href="#">Узнать больше</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;
