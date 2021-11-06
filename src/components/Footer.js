import React from "react";
import Container from "react-bootstrap/Container";
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaRedditSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<Container fluid>
				<Row>
					<Col xs={6} md={4}>
						<img 
                            src=""
                            alt=""
                            width="40"
                            height="40"
                        />
					</Col>
					<Col xs={6} md={4}>
						<strong>RyanJ_Dev</strong>
					</Col>
					<Col xs={6} md={4}>
                    <li className="social-icons">
                        <ul>
                        <a href="https://twitter.com/ryan_j_dev">
                                <FaTwitterSquare />
                            </a>
                        </ul>
                        <ul>
                        <a href="https://www.linkedin.com/in/ryjhelm/">
                                <FaLinkedin />
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.instagram.com/ryan_j_dev/">
                                <FaInstagramSquare />
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.reddit.com/user/ryanjdev">
                                <FaRedditSquare />
                            </a>
                        </ul>
                    </li>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;