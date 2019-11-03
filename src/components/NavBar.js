import React from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDropDown } from '@material-ui/icons'
import Form from 'react-standalone-form'
import { strings } from '../lang/strings.js'
import Dropdown from './Dropdown'
import SearchInput from './SearchInput'


const NavBar = ({ user, logout, loginWithRedirect, onSearch }) => {
  const classes = useStyles()
  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>Wiating</Typography>
        <Form
          fields={['phrase']}
          callbackOnChange={fields => onSearch(fields.phrase)}
        >
          <SearchInput
            name='phrase'
            placeholder='Szukaj'
            noBottomGutter
          />
        </Form>
        <div className={classes.grow} />
        {user
          ? <Dropdown items={[
            { label: strings.auth.logout, onClick: () => logout() },
          ]}>
            <Avatar alt={user.name} src={user.picture}
            >{!user.picture && `${user.given_name.charAt(0)}${user.family_name.charAt(0)}`}</Avatar>
            <Typography className={classes.name}>{user.name && user.name}</Typography>
            <ArrowDropDown />
          </Dropdown>
          : <Button
            color='inherit'
            onClick={() => loginWithRedirect({})}
          >{strings.auth.login}</Button>
        }
      </Toolbar>
    </AppBar>
  )
}


const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  searchWrapper: {
    flexGrow: 1,
  },
  search: {
    maxWidth: 240,
  },
  name: {
    marginLeft: theme.spacing(1),
    textTransform: 'none',
  },
  grow: {
    flexGrow: 1,
  },
}))

export default NavBar