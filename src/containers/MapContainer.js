import React from 'react'
import { useSnackbar } from 'notistack'
import api, { CancelToken, isCancel } from '../api'
import Map from '../components/Map'
import Text from '../components/Text'
import { points } from '../../data'

let cancelRequest


const MapContainer = React.forwardRef((props, ref) => {
  const [initalPosition, setInitalPosition] = React.useState()
  const { enqueueSnackbar } = useSnackbar()
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


  return (
    <Map
      points={points}
      center={initalPosition && initalPosition.center}
      zoom={initalPosition && initalPosition.zoom}
      {...props}
      ref={mapRef}
    />
  )
})

export default MapContainer
