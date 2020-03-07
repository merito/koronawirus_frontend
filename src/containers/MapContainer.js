import React from 'react'
import { useSnackbar } from 'notistack'
import api, { CancelToken, isCancel } from '../api'
import { useCurrentLocation } from '../utils/CurrentLocationProvider'
import Map from '../components/Map'
import Text from '../components/Text'
import { points } from '../../data'

let cancelRequest


const MapContainer = React.forwardRef((props, ref) => {
  const [initalPosition, setInitalPosition] = React.useState()
  const { enqueueSnackbar } = useSnackbar()
  const { location, loading, error } = useCurrentLocation()
  const defaultPosition = [51.919231, 19.134422]

  const mapRef = React.useRef()

  React.useImperativeHandle(ref, () => ({
    setActiveMarker(coords) {
      mapRef.current.setActiveMarker(coords)
    },
  }))

  React.useEffect(() => {
    // Check whether stored position is available asychronously from recognized
    // location, because location recognition may take undefined amount of time.
    setInitalPosition({ center: defaultPosition })
  }, [])

  React.useEffect(() => {
    // If user location was recognized and initial position is not a default one,
    // set user location as an initial position.
    if (!loading && !error && JSON.stringify(initalPosition.center) === JSON.stringify(defaultPosition) && location) {
      setInitalPosition({ center: location })
    }
  }, [loading])

  return (
    <Map
      points={points}
      currentLocation={location}
      center={initalPosition && initalPosition.center}
      zoom={initalPosition && initalPosition.zoom}
      {...props}
      ref={mapRef}
    />
  )
})

export default MapContainer
