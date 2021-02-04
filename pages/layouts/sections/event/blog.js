import React from 'react'
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
import {BlogData} from '../../../../database/layouts/event/database';

var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1440,
            settings: { slidesToShow: 2 }
        }
    ]
};

const Blog = () => (
    <section className="event blog set-relative" id="news">
        <div className="circle"></div>
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2><span>Новости</span> и проекты</h2>
                        </div>
                        <div className="sub-title">
                            <p>
                                Последние новости православной Веб-Студи WebDelnica, а также проекты в которых мы участвуем
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme" {...settings}>
                        {BlogData.length > 0?
                            BlogData.map((item, index) =>
                            <div className="item" key={`blog-${index}`}>
                                <div className="img-container">
                                    <img alt="" className="img-fluid" src={item.photo} />
                                    <div className="overlay"></div>
                                    <div className="blog-info set-abs">
                                        <div className="center-text flex m-b-20">
                                            <i className="fa fa-calendar-o m-r-5 "></i>
                                            <h6 className="font-blog">
                                                {item.date}
                                            </h6>
                                        </div>
                                        <h4 className="blog-text">
                                            {item.title}
                                        </h4>
                                        <p className="small-font">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ):
                        'No Records Found !!'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Blog;
