import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#5ccebb',
    },
  },
};

// Create and export the theme
export const theme = createTheme(themeOptions);


// TODO: play around with colors some more????!!
// https://mui.com/material-ui/customization/color/  colors here

// old colors
// #673ab7
// #ffc107
// #ef277f
// #ff5459 
// #ff8b31
// #bc24a1

// tried this purple might be too dark?
// #2a1e40
// #5ccebb