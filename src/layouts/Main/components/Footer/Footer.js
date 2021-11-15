import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem } from '@material-ui/core';
import RedditIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 130,
    height: 70,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'primary',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <List disablePadding>
          <ListItem disableGutters className={classes.logoContainerItem}>
            <div className={classes.logoContainer}>
              <a href="/" title="RyanJ_Dev">
                <Image
                  className={classes.logoImage}
                  src="/images/dev-logo.jpg"
                  alt="thefront"
                  lazy={false}
                />
              </a>
            </div>
          </ListItem>
          <ListItem disableGutters>
            <IconButton className={classes.socialIcon}>
              <RedditIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <InstagramIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <LinkedIn className={classes.icon} />
            </IconButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
