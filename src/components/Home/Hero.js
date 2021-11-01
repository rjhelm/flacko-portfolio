import React from "react";
import Image from 'react-bootstrap/Image';
import { Container } from "react-bootstrap/Container";
import hero from "../../assets/images/hero.png"

const Hero = () => {
    return (
        <Container className="hero" >
            <div className="md=6 hero-text">
                
            </div>
            <div className="md=4 hero-image">
                <Image src={hero} fluid />
            </div>
        </Container>
    );

}

export default Hero;
