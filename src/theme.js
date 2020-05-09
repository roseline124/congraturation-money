import { createMuiTheme } from '@material-ui/core'
import lightBlue from '@material-ui/core/colors/lightBlue'
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
        fontWeight: 'bold',
        backgroundColor: '#eee',
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
    secondary: lightBlue,
    info: grey,
  },
})

export default theme
