import React from 'react';
import { PropTypes } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, IconButton } from '@material-ui/core';
import { Image } from 'components/atom';
import { SectionHeader } from 'components/molecule';
import { GitHub } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {},
    image: {
        boxShadow: '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
        borderRadius: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            maxWidth: 500,
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
                spacing={4}
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
                        subtitle="I'm a full stack developer with a passion for building beautiful, intuitive, and user-friendly applications."
                        ctaGroup={[
                            <IconButton variant="contained" color="primary" size="large">
                                <GitHub />   GitHub
                            </IconButton>,
                            <Button variant="contained" color="primary" size="large">
                                Contact
                            </Button>,
                        ]}
                        align="left"
                        disableGutter
                        titleVariant="h3"
                    />
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
                        src={""}
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