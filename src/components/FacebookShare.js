import React from 'react'
import { FacebookIcon } from 'react-share'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const FacebookShare = () => {
  const classes = useStyles()
  return (
    <Tooltip title='Udostępnij na Facebooku' placement='left'>
      <a
        href={'https://www.facebook.com/sharer/sharer.php?u='.concat(document.URL)}
        target='_blank'
      >
        <FacebookIcon size={'30'} className={classes.icon} />
      </a>
    </Tooltip>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'block',
    boxShadow: '0 1px 5px rgba(0,0,0,.65)',
    width: 51,
    height: 51,
  },
}))

export default FacebookShare
