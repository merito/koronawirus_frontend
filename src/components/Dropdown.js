import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const Dropdown = ({ children, items, anchorOrigin }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        color='inherit'
        aria-haspopup='true'
        size={isPhone ? 'small' : 'medium'}
        onClick={handleClick}
      >{children}</Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
      >
        {items.map((item, index) => item.url
          ? <MenuItem
            component={Link}
            to={item.url}
            key={index}
            onClick={() => handleClose()}
            divider={item.divider}
          >{item.label}</MenuItem>
          : <MenuItem key={index} onClick={() => {
            item.callback()
            handleClose()
          }}>{item.label}</MenuItem>
        )}
      </Menu>
    </div>
  )
}

Dropdown.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
}

export default Dropdown
