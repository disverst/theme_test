import React, { useState } from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap'

const Header = props => {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav className="justify-content-between">
                            <a href="/">
                                <img alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                            </a>
                            <a className="contacts-phone text-white d-lg-none" href="tel:+380683736815">
                                <i className="fa fa-phone contacts-margin"></i>
                                +380 068 373 68 15
                            </a>
                            <div className="responsive-btn">
                                <a className="toggle-nav" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
