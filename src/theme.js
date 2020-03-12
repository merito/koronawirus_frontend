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
      },
      outlined: {
        borderColor: 'white',
        color: 'white',
      },
      label: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
      },
      sizeSmall: {
        height: 32,
        marginTop: 4,
        marginBottom: 4,
      },
      labelSmall: {
        fontSize: '0.9rem',
      },
    },
  },
})

export default theme
