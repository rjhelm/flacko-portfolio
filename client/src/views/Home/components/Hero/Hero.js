import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, IconButton, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { GitHub } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {},
    image: {
        boxShadow: '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
        borderRadius: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
    },
}));

const Hero = props => {
    const { className, ...rest } = props;
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid
                container
                justify="space-between"
                spacing={2}
                direction={isMd ? 'row' : 'column-reverse'}
            >




                <Grid
                    item
                    container
                    alignItems="center"
                    xs={12}
                    md={6}
                    data-aos="fade-up"
                >
                    <SectionHeader
                        title={
                            <span>
                                Ryan Helm
                                <br />
                                <Typography component="span" variant="inherit" color="primary">
                                    Full Stack Developer
                                </Typography>
                            </span>
                        }
                        subtitle=""
                        ctaGroup={[
                            <IconButton variant="contained" color="black" size="lg">
                                <a href="https://github.com/rjhelm" target="_blank" rel="noopener noreferrer">
                                    <GitHub />   GitHub
                                </a>
                            </IconButton>,
                            <Button variant="contained" color="primary" size="lg">
                                Contact
                            </Button>,
                        ]}
                        align="left"
                        disableGutter
                        titleVariant="h3"
                    />
                    <Avatar
                        circle
                        maxWidth={isMd ? '100%' : 'none'}
                        maxHeight={isMd ? '100%' : 'none'}

                    >
                        <Image
                            alt="Ryan"
                            src="/assets/ryanjdev.png"
                            width="120"
                            height="120"
                        />
                    </Avatar>

                </Grid>
                <Grid
                    item
                    container
                    justify="flex-start"
                    xs={12}
                    md={6}
                    data-aos="fade-up"
                >
                    <Image
                        src="/assets/hero.jpg"
                        alt="Hero Image"
                        className={classes.image}
                        data-aos="flip left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

Hero.propTypes = {
    /* 
        * external classes
    */
    className: PropTypes.string,
};

export default Hero;