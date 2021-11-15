import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Divider, Grid } from '@material-ui/core';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  featureCheck: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const ProjectCard = props => {
  const {
    title,
    desc,
    projectImage,
    cta,
    link,
    className,
    titleProps,
    descProps,
    linkProps,
    featureTitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase
      className={clsx('project-card', classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container spacing={2} className="project-card__wrapper">
        <Grid item xs={12} className="project-card__headline">
          <Typography
            variant="h5"
            gutterBottom
            className="project-card__title"
            {...titleProps}
          >
            {title}
          </Typography>
          {desc && (
            <Typography
              variant="desc1"
              color="textSecondary"
              className="project-card__link"
              {...descProps}
            >
              {desc}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} className="project-card__divider-container">
          <Divider className="project-card__divider" />
        </Grid>
          <Grid item xs={12} className="project-card__image-wrapper">
              <Image
                src={projectImage}
                alt=""
                width=""
                height=""
                aos="fade-up"
              />
          </Grid>
        <Grid item xs={12} className="project-card__cta-wrapper">
          {cta}
        </Grid>
        {link && (
          <Grid
            item
            xs={12}
            className="project-card__link-wrapper"
          >
            <Typography
              variant="a"
              component="p"
              align="center"
              className="project-card__link"
              {...linkProps}
            >
              <Button variant="contained" color="primary" href={link}>{link}</Button>
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardBase>
  );
};

ProjectCard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {},
};

ProjectCard.propTypes = {
  /**
   *  External classes
   */
  className: PropTypes.string,
  /**
   * Title of the pricing card
   */
  title: PropTypes.string.isRequired,
  /**
   *  Subtitle of the pricing card
   */
  subtitle: PropTypes.string,
  /**
   * The pricing component of the pricing card
   */
  priceComponent: PropTypes.node.isRequired,
  /**
   * The features check component of the pricing card
   */
  featureCheckComponent: PropTypes.node,
  /**
   * Features array of the pricing card
   */
  features: PropTypes.array,
  /**
   *  CTA button of the pricing card
   */
  cta: PropTypes.node.isRequired,
  /**
   * Diclaimer of the pricing card
   */
  disclaimer: PropTypes.string,
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object,
  /**
   * Additional props to pass to the disclaimer Typography component
   */
  disclaimerProps: PropTypes.object,
  /**
   * Additional props to pass to the feature title Typography component
   */
  featureTitleProps: PropTypes.object,
};

export default ProjectCard;
