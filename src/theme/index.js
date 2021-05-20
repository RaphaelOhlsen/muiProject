import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const black = '#000';
const gray = '#BFBFBF';
const hover = 'rgb(100 255 218 / 29%)';

export default createMuiTheme({
  palette: {
    common: {
      white: white,
      black: black,
      gray: gray,
      hover: hover,
    },
    primary: {
      main: '#1B1F38',
    },
    secondary: {
      main: '#252A48',
    },
    tertiary: {
      main: '#313862',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.4rem',
      color: white,
      lineHeight: 1.5,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: white,
        fontSize: '1rem',
      },
    },
  },
});
