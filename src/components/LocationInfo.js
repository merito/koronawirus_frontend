import React from 'react'
import {
  Typography,
  Box,
  Tooltip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatDate } from '../utils/helpers'
import locationTypes from '../utils/locationTypes'
import Text from './Text'


const LocationInfo = ({
  selectedLocation,
}) => {
  const classes = useStyles()
  const updatedAt = selectedLocation.last_modified_timestamp || selectedLocation.created_timestamp
  const type = locationTypes[selectedLocation.type]

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography
          variant='h5'
        >Województwo {selectedLocation.name}</Typography>
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

        {/* <Typography
          variant='body1'
          gutterBottom
        ><strong><Text id='locationInfo.cured' />:</strong> {selectedLocation.cured}</Typography> */}

        {selectedLocation.description &&
          <Typography
            variant='body1'
            gutterBottom
          ><strong><Text id='locationInfo.description' />:</strong> {selectedLocation.description}</Typography>}

        {selectedLocation.source &&
          <>
            <Typography variant='body1' gutterBottom>
              <strong><Text id='locationInfo.source' />:</strong>
            </Typography>
            {selectedLocation.source.map((item, i) =>
              <Typography gutterBottom key={i}>
                <Box overflow='hidden' whiteSpace='normal'>
                  [{i + 1}] <a href={item} target='_blank'>{item}</a>
                </Box>
              </Typography>
            )}
          </>
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
