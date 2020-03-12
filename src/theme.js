import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d00000',
    },
    secondary: {
      main: '#388e3c',
    },
  },
  layout: {
    locationTabWidth: 400,
    mobileMiniMapHeight: 240,
  },
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: 36,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: '#303030',
        marginBottom: 2,
      },
      outlined: {
        borderColor: 'white',
        color: 'white',
      },
    },
  },
})

export default theme
