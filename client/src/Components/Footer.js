import * as React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright @ "}
            <Link color="inherit" href="https://github.com/rjhelm">
                RyanJ_Dev
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Footer = (props) => {
    const { description, title } = props;
    return (
        <Box component="footer" sx={{ bgColor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    comment='p'
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer;