import React from 'react';
import hero from '../assets/hero.jpg'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';

const Hero = () => {
    return (
        <Container fluid sx={{ 
            backgroundImage: 'url(' + hero + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         }}>
            <Container>
                <Typography variant="h1" sx={{ color: 'white', textAlign: 'center' }}>

                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>

                </Box>
            </Container>
        </Container>
    )
}

export default Hero;