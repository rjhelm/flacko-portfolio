import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors, Divider } from "@material-ui/core";
import { Section } from 'components/organisms'
import {
    Hero,
    Hub,
    Projects
} from "./components"

import { integrations } from "./data"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%",
    },
    pagePaddingTop: {
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(5),
        },
    },
    sectionPaddingTop: {
        paddingTop: 0,
    },
    shape: {
        background: theme.palette.alternate.main,
        borderBottomRightRadius: "50%",
        borderBottom: `1px solid ${colors.grey[200]}`,
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.shape}>
                <Section className={classes.pagePaddingTop}>
                    <Hero />
                </Section>
                <Divider />
                <Section className={classes.sectionNoPaddingTop}>
                    <Hub />
                </Section>
                <Divider />
                <Section>
                    <Projects data={integrations} />
                </Section>
                <Divider />
            </div>
        </div>
    );
};

export default Home;