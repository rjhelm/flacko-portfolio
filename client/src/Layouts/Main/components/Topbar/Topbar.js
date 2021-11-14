import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Toolbar,
    Hidden,
    List,
    ListItem,
    Typography,
    IconButton,
    
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
    root: {},
    flexGrow: {
        flexGrow: 1,
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbar: {
        maxWidth: theme.layout.contentWidth,
        width: '100%',
        margin: '0 auto',
        padding: theme.spacing(0, 2),
    },
    listItem: {
        cursor: 'pointer',
        paddingTop: 0,
        paddingBottom: 0,
    },
    listItemText: {
        flex: '0 0 auto',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
    },
    listItemButton: {
        whiteSpace: 'nowrap',
    },
    iconButton: {
        padding: 0,
        '&:hover': {
            background: 'transparent',
        },
    },
    logoContainer: {
        width: 140,
        height: 160,
        [theme.breakpoints.up('md')]: {
            width: 120,
            height: 112,
        },
    },
    logoImage: {
        width: 150,
        height: 120,
    },
}));

const Topbar = props => {
    const { onSidebarOpen, ...rest } = props;
    const classes = useStyles();

    return (
        <Toolbar disableGutters className={classes.toolbar}{...rest}>
            <div className={classes.logoContainer}>
                <a href="/" title="RyanJ_Dev">
                    <Image
                        className={classes.logoImage}
                        src="/assets/dev-logo.png"
                        alt="RyanJ_Dev"
                        lazy={false}
                    />
                </a>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
                <List className={classes.navigationContainer}>
                    <ListItem className={classes.listItem}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.listItemText}
                            component="a"
                            href="/home"
                        >
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.listItemText}
                            component="a"
                            href="/about"
                        >
                            About
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.listItemText}
                            component="a"
                            href="/portfolio"
                        >
                            Portfolio
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.listItemText}
                            component="a"
                            href="/Resume"
                        >
                            Resume
                        </Typography>
                    </ListItem>
                </List>
            </Hidden>
            <Hidden mdUp>
                <IconButton
                    className={classes.iconButton}
                    onClick={onSidebarOpen}
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
    );
};

Toolbar.propTypes = {
    onSidebarOpen: PropTypes.func,
}

export default Topbar;