import React from 'react'
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDropDown, Menu } from '@material-ui/icons'
import Form from 'react-standalone-form'
import Dropdown from './Dropdown'
import Logo from './Logo'
import Text from './Text'
import Loader from './Loader'
import {
  getInfectedNumber,
  getDeathsNumber,
  getLastUpdate
 } from '../../data'
 import { formatDateTime } from '../utils/helpers'


const NavBar = ({
  points,
  links,
  language,
  languages,
  setLanguage,
}) => {
  const classes = useStyles()

  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar>
        <Logo className={classes.logo} />
        <div className={classes.grow} />
        <div><Typography
          variant='h6'
        ><Text id='locationInfo.infected' />: {getInfectedNumber(points)} <Text id='locationInfo.deaths' />: {getDeathsNumber(points)}</Typography>
        <Typography
          variant='body2'
        ><Text id='data' />: {formatDateTime(getLastUpdate(points))}</Typography>
        </div>
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

          <Dropdown items={[
            ...links,
          ]}>
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
    marginRight: theme.spacing(2)
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
