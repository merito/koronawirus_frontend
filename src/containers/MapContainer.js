import React from 'react'
import Map from '../components/Map'
import usePoints from '../utils/usePoints'


const MapContainer = React.forwardRef((props, ref) => {
  const [initalPosition, setInitalPosition] = React.useState()
  const defaultPosition = [51.919231, 19.134422]
  const {
    loading,
    error,
    points,
  } = usePoints()

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
