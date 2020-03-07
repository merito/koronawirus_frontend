import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Button,
  ButtonGroup,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Dropzone from 'react-dropzone'
import Loader from './Loader'
import { roundLatLng, formatDate } from '../utils/helpers'
import locationTypes from '../utils/locationTypes'
import Text from './Text'


const LocationInfo = ({
  selectedLocation,
}) => {
  const classes = useStyles()
  const [imagesLoading, setImagesLoading] = React.useState()
  const updatedAt = selectedLocation.last_modified_timestamp || selectedLocation.created_timestamp
  const type = locationTypes[selectedLocation.type]
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography
          variant='h5'
        >{selectedLocation.name}</Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          gutterBottom
        >
          {type && <Text id={type} />}
        </Typography>

        <Typography
          variant='body1'
          gutterBottom
        ><strong><Text id='locationInfo.infected' />:</strong> {selectedLocation.infected}</Typography>

        <Typography
          variant='body1'
          gutterBottom
        ><strong><Text id='locationInfo.deaths' />:</strong> {selectedLocation.deaths}</Typography>

        <Typography
          variant='body1'
          gutterBottom
        ><strong><Text id='locationInfo.cured' />:</strong> {selectedLocation.cured}</Typography>

        {selectedLocation.description &&
          <Typography
            variant='body1'
            gutterBottom
          ><strong><Text id='locationInfo.description' />:</strong> {selectedLocation.description}</Typography>}

          {selectedLocation.source &&
            <Typography
              variant='body1'
              gutterBottom
            ><strong><Text id='locationInfo.source' />:</strong> {selectedLocation.source}</Typography>}


      </div>

      <div className={classes.footer}>
        {updatedAt &&
          <Typography
            component='div'
            variant='caption'
            align='right'
            color='textSecondary'
          ><Text id='locationInfo.lastUpdate' />: {formatDate(updatedAt)}</Typography>
        }
      </div>
    </div>
  )
}


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[1],
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: theme.spacing(2),
  },
}))

export default LocationInfo
