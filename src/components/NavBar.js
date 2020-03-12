import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import Dropdown from './Dropdown'
import Logo from './Logo'
import Text from './Text'
import { formatDateTime } from '../utils/helpers'


const NavBar = ({
  links,
  language,
  languages,
  setLanguage,
  infectedNumber,
  deathsNumber,
  curedNumber,
  lastUpdate,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar>
        <Logo className={classes.logo} />
        <div className={classes.grow} />
        <Box textAlign='right'>
          <Typography variant={isPhone ? 'subtitle2' : 'h6'}>
            <Text id='locationInfo.infected' />: {infectedNumber}{' '}
            <Text id='locationInfo.deaths' />: {deathsNumber}{' '}
            <Text id='locationInfo.cured' />: {curedNumber}
          </Typography>
          <Typography
            variant='caption'
          ><Text id='data' />: {lastUpdate && formatDateTime(lastUpdate)}</Typography>
        </Box>
        <Dropdown
          items={languages.map(lang => ({
            label: lang.toUpperCase(),
            callback: () => setLanguage(lang),
          }))}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >{language ? language.toUpperCase() : ''}</Dropdown>

        <Dropdown items={links}>
          <Menu />
        </Dropdown>

      </Toolbar>
    </AppBar>
  )
}


const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  name: {
    marginLeft: theme.spacing(1),
    textTransform: 'none',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}))

export default NavBar
