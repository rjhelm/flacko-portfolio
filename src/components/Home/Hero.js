import React from "react";
import Image from 'react-bootstrap/Image';
import { Container } from "react-bootstrap/Container";
import hero from "../../assets/images/hero.png"
import { Col, Row } from "react-bootstrap";

const Hero = () => {
    return (
        <Container className="hero" id="home">
            <Row>
                <Col className="md=6 hero-text">
                    <h1 className="hero-header">
                    <strong className="highlight"></strong>
                    </h1>
                    <h2 className="hero-subheader">
                    <strong className="highlight"></strong>
                    </h2>
                    <div>
                        <p className="hero-content">
                            
                        </p>
                    </div>
                </Col>
                <Col className="md=4 hero-image">
                    <Image src={hero} fluid />
                </Col>
            </Row>
        </Container>
    );

}

export default Hero;
