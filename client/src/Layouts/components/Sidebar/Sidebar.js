import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Drawer } from "@material-ui/core";

import { SidebarNav } from "./SidebarNav";

const useStyles = makeStyles(theme => ({
    drawer: {
        width: "100%",
        maxWidth: 400,
    },
    root: {
        height: "100%",
        padding: theme.spacing(1),
    },
    nav: {
        marginBottom: theme.spacing(1),
    },
}));

const Sidebar = props => {
    const { open, variant, onClose, className, ...rest } = props;
    const classes = useStyles();

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
        <div {...rest} className={clsx(classes.root, className)}>
            <SidebarNav className={classes.nav} />
        </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired,
};

export default Sidebar;