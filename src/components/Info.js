import React from 'react'
import Modal from './Modal'
import {
  Typography
} from '@material-ui/core'
import Text from './Text'


const Info = () =>
  <Modal>
  <Typography
    variant='body2'
    gutterBottom
  ><Text id='infoPage.title' /></Typography>
    <Typography
      variant='body1'
      gutterBottom
    ><Text id='infoPage.content' /></Typography>
  </Modal>

export default Info
