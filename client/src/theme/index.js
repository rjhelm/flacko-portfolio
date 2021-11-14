import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import typography from './typography';
import palette from './palette';

const theme = responsiveFontSizes(
    createTheme({
        typography,
        palette,
        layout: {
            contentwidth: 1140,
        },
        Typography: {
            fontFamily: 'Leto',
        },
        zIndex: {
            appBar: 1200,
            drawer: 1100,
        },
        overrides: {
            MuiButton: {
                containedSecondary: {
                    color: 'black',
                },
            },
        },
    }),
);

export default theme;