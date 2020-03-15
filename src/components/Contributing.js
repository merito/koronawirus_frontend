import React from 'react'
import Modal from './Modal'
import { Typography } from '@material-ui/core'
import Text from './Text'


const Info = () =>
  <Modal>
    <Typography
      variant='h3'
      gutterBottom
    ><Text id='contributing' /></Typography>
    <a href="https://github.com/merito/koronawirus_frontend/blob/master/CONTRIBUTING.md" target="_blank">Github</a>
  </Modal>

export default Info
