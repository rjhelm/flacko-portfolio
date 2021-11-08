import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import hero from '../../assets/images/hero.jpg'
import Hero from './Hero'

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-section">
                    <Row>
                        <Col className="md=6 home-text">
                            <h1 className="home-header">
                                <strong className="highlight"></strong>
                            </h1>
                            <h2 className="home-subheader">
                                <strong className="highlight"></strong>
                            </h2>
                            <div>
                                <p className="home-content">

                                </p>
                            </div>
                        </Col>
                        <Col className="md=4 home-image">
                            <Image src={hero} fluid />
                        </Col>
                    </Row>
                </Container>
                <Fade bottom>
                    <Hero />
                </Fade>
            </Container>
        </section>
    )
}

export default Home
