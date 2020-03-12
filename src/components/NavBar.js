import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  Chip,
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
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))
  const counters = [
    {
      label: <Text id='locationInfo.infected' />,
      value: infectedNumber,
      color: 'primary',
    },
    {
      label: <Text id='locationInfo.deaths' />,
      value: deathsNumber,
      variant: 'outlined',
      color: '',
    },
    {
      label: <Text id='locationInfo.cured' />,
      value: curedNumber,
      color: 'secondary',
    },
  ]

  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Logo className={classes.logo} />
        <div className={classes.grow} />
        <Box textAlign='right'>
          <div>
            {counters.map((item, index) =>
              <React.Fragment key={index}>
                <Chip
                  icon={item.icon}
                  size={isPhone ? 'small' : 'medium'}
                  label={<>{item.label}: {item.value}</>}
                  color={item.color}
                  variant={item.variant}
                />{' '}
              </React.Fragment>
            )}
          </div>
          <Typography variant='caption'>
            {!isPhone && <><Text id='data' />: </>}
            {lastUpdate && formatDateTime(lastUpdate)}
          </Typography>
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
  toolbar: {
    paddingRight: 0,
    backgroundColor: theme.palette.grey[900],
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
