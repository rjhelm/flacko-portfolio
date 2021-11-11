import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'
import hero from '../../assets/images/hero.jpg'
import Hero from './Hero'
import Particle from '../../helpers/Particle';

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Image src={hero} fluid />
                <Container className="home-content">
                    <Row>
                        <Bounce right clear>
                            <Col md={6} className="home-header">
                                <h1 className="heading">
                                    Full-Stack <strong className="highlight">Web Developer</strong>
                                </h1>
                                <h2 className="heading-name">
                                    <strong className="highlight">Ryan Helm</strong>
                                </h2>
                                <div>
                                    <p className="home-content">

                                    </p>
                                </div>
                            </Col>
                        </Bounce>
                        <Bounce left clear>
                            <Col md={6}>
                                
                            </Col>
                        </Bounce>
                    </Row>
                </Container>
                <Bounce bottom big>
                    <Hero />
                </Bounce>
            </Container>
        </section>
    );
}

export default Home;
