import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E6E6E6',
      main: '#E6E6E6',
      dark: '#A1A3A5',
      contrastText: '#13171B',
    },
    text: {
      primary: '#E6E6E6',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#E6E6E6',
        '&$focused': {
          color: '#E6E6E6',
        },
        fontWeight: 500,
      },
    },
    MuiInput: {
      underline: {
        color: '#E6E6E6',
        '&::after, &::before': {
          borderBottom: '2px solid #E6E6E6',
        },
        borderColor: '#E6E6E6',
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'lowercase',
        width: '100%',
        border: '2px solid #E6E6E6',
        borderRadius: 0,
        fontSize: '1.15rem',
        fontWeight: 600,
      },
      textPrimary: {
        '&:hover': {
          backgroundColor: '#E6E6E6',
          color: '#13171B',
        },
      },
    },
  },
});
