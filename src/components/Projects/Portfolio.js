import React from 'react';
import { Container } from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Portfolio = () => {
    return (
        <section>
            <Container className="project-section" id="projects">
                <h1><strong className="headline">My Portfilio</strong></h1>
                <Carousel className="project-carousel">
                    <Carousel.Item className="project-display">
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="project name"
                        />
                        <Carousel.Caption className="project-text">
                            <h3 className="project-title">Project Title</h3>
                            <p className="project-details">Description and link</p>
                            <Button href="" variant="primary" target="_blank">
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="project-display">
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="project name"
                        />
                        <Carousel.Caption className="project-text">
                            <h3 className="project-title">Project Title</h3>
                            <p className="project-details">Description and link</p>
                            <Button href="" variant="primary" target="_blank">
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="project-display">
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="project name"
                        />
                        <Carousel.Caption className="project-text">
                            <h3 className="project-title">Project Title</h3>
                            <p className="project-details">Description and link</p>
                            <Button href="" variant="primary" target="_blank">
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="project-display">
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="project name"
                        />
                        <Carousel.Caption className="project-text">
                            <h3 className="project-title">Project Title</h3>
                            <p className="project-details">Description and link</p>
                            <Button href="" variant="primary" target="_blank">
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default Portfolio;