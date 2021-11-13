import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    List,
    ListItem,
    Typography,
    ListItemIcon,
    Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    root: {

    },
    listItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    listItemIcon: {
        minWidth: 'auto',
    },
    closeIcon: {
        justifyContent: 'flex-end',
        cursor: 'pointer',
    },
    divider: {
        width: "100",
    }
}));

const SidebarNav = props => {
    const { onClose, className, ...rest } = props;
    const classes = useStyles();

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            <ListItem className={classes.closeIcon} onClick={onClose}>
                <ListItemIcon className={classes.listItemIcon}><CloseIcon fontSize="small" /></ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Typography
                    variant="h6"
                    color="primary"
                    component="a"
                    href="/home"
                    className={classes.listItemLink}
                >
                    Home
                </Typography>
            </ListItem>\
            <ListItem className={classes.listItem}>
            <Typography
                    variant="h6"
                    color="primary"
                    component="a"
                    href=""
                    className={classes.listItemLink}
                >
                    Github
                </Typography>
            </ListItem>
        </List>
    );
};

SidebarNav.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func
};

export default SidebarNav;