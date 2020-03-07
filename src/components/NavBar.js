import React from 'react'
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDropDown, Menu } from '@material-ui/icons'
import Form from 'react-standalone-form'
import Dropdown from './Dropdown'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Text from './Text'
import Loader from './Loader'


const NavBar = ({
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
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  search: {
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
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
