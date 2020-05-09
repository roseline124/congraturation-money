import { createMuiTheme } from '@material-ui/core'
import cyan from '@material-ui/core/colors/cyan'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      underlineHover: {
        textDecoration: 'none',
      },
    },
    MuiButton: {
      text: {
        textDecoration: 'none',
      },
      contained: {
        '&:hover': {
          backgroundColor: amber[300],
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Gothic A1',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: amber,
    secondary: cyan,
    info: grey,
  },
})

export default theme
