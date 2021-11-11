import React from "react";
import { Container } from "react-bootstrap/Container";
import { Col, Row, Card, CardGroup } from "react-bootstrap";

const Hero = () => {
    return (
        <Container className="hero-section">
            <Row>
                <Col className="hero-content">
                    <CardGroup className="hero-card">
                        <Card>
                            <Card.Img variant="top" />
                            <Card.Body>
                                <Card.Title>
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );

}

export default Hero;
