import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#FFC107',
    },
  },
};

// Create and export the theme
export const theme = createTheme(themeOptions);