import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    maxWidth: 50,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title="My Stack"
            subtitle="I have a broad range of technology experience and I am always looking to improve on this foundation.
            I look to continue adding to this stack as I learn and grow as a developer."
            subtitle2=""
            align="left"
            label="About Me"
            disableGutter
          />
          <ol>
            <li>
              <strong>Front End:</strong> React, Angular, Vue, HTML, CSS, SASS,
            </li>
            <li>
              <strong>Back End:</strong> Node, Express, Python, Django, SQL,
            </li>
          </ol>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <CardBase withShadow liftUp>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
