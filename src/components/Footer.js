import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaRedditSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3><strong>RyanJ_Dev</strong></h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://twitter.com/ryan_j_dev">
                                <FaTwitterSquare />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/ryjhelm/">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com/ryan_j_dev/">
                                <FaInstagramSquare />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.reddit.com/user/ryanjdev">
                                <FaRedditSquare />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

    );
};

export default Footer;