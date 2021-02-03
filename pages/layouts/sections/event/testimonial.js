import React from 'react'
import Slider from "react-slick";
import {TestimonialData} from '../../../../database/layouts/event/database';
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: { arrows: false }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Testimonial = () => (
    <section className="event testimonial set-relative bg bg-img2 bg-about" id="testimonial">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2 className=" text-white">Отзывы и благословения</h2>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 margin-b">
                    <Slider className="owl-carousel owl-theme testimonial owl-loaded owl-drag" id="testimonial" {...settings}>
                        {TestimonialData.length > 0 ?
                            TestimonialData.map((item, index) =>
                                <div className="item p-t-30" key={`testimonial-${index}`}>
                                    <Col xl="10" xs="12" className="offset-xl-1">
                                        <Row>
                                            <Col sm="3">
                                                <div className=" testimonial-msg set-relative">
                                                    <img alt="" className="img-fluid" src={item.photo} />
                                                </div>
                                            </Col>
                                            <Col sm="9" className="px-lg-4">
                                                <div className="quotes set-relative m-b-30">
                                                    <img alt="" className="img-fluid set-abs left-quote" src="/assets/images/event/testimonial/i1.png" />
                                                    <div className="quote-text">
                                                        <h5>{item.details}</h5>
                                                    </div>
                                                    <img alt="" className="img-fluid set-abs right-quote" src="/assets/images/event/testimonial/i2.png" />
                                                </div>
                                                <div className="rating align-items-center">
                                                    <h5 className="name">{item.name} - <span> {item.role}</span></h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            ) :
                            'No Testimonial Found'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Testimonial;
