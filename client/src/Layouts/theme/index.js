import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import palette from './palette';

const theme = responsiveFontSizes(
    createMuiTheme({
        palette,
        layout: {
            contentwidth: 1140,
        },
        typography: {
            fontFamily: 'Leto',
        },
        zIndex: {
            appBar: 1200,
            drawer: 1100,
        },
        overrides: {
            MuiButton: {
                containedSecondary: {
                    color: 'white',
                },
            },
        },
    }),
);

export default theme;