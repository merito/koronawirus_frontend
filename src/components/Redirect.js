import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'

const Redirect = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        src='/logo-app.png'
        srcSet='/logo-app@2x.png 2x'
        title='Koronawirus w Polsce'
        alt='Koronawirus w Polsce'
      />
      <img
        src='/logo-app-typo.png'
        srcSet='/logo-app-typo@2x.png 2x'
        className={classes.typo}
      />
      <Typography
        variant='h5'
        className={classes.heading}
      >Mapa przeniesiona pod nowy adres, kliknij poniżej</Typography>
      <Link href="https://koronamap.pl">
      <Typography
        variant='h4'
        className={classes.subheading}
      >https://koronamap.pl/</Typography></Link>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
  },
  heading: {
    marginBottom: theme.spacing(4),
    color: 'white',
  },
  subheading: {
    color: 'white',
    textDecoration: 'underline'
  },
}))

export default Redirect
