import React from 'react';
import { FeatureData } from '../../../../database/layouts/modern/database'
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas1 service" id="feature">
        <div className="about-chat">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">Н</span>аши<span className="theme-color"> С</span>ервисы
                                </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">
                                    Первая православная Веб-Студия предостовляет комплексные IT услуги
                                </p>
                            </div>
                        </div>
                    </Col>
                    {
                        FeatureData.map((item, i) => {
                            return (
                                <Col lg="4" md="6"  className="service-container" key={i}>
                                    <div className="chat-box">
                                        <div className="feature-content">
                                            <h4 className="service-heading">
                                                {item.heading}
                                                <span className="theme-color">
                                                    {item.layout}
                                                </span>
                                            </h4>
                                            <hr />
                                            <p>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    </section>
)
export default Feature;
