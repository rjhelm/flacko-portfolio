import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    layout: {
      contentWidth: 1140,
    },
    typography: {
      fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        containedSecondary: {
          color: 'white',
        },
      },
    },
  }),
);

export default theme;
