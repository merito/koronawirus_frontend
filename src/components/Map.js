import React from 'react'
import {
  Map as MapComponent,
  Marker,
  TileLayer,
  ZoomControl,
  ScaleControl,
} from 'react-leaflet'
import Control from 'react-leaflet-control'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Icon, DivIcon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
import NetlifyBadge from './NetlifyBadge'
import FacebookShare from './FacebookShare'


const Map = React.forwardRef(({
  updateCoordinates,
  ...props
}, ref) => {
  const [activeMarker, setActiveMarker] = React.useState()
  const [previousBounds, setPreviousBounds] = React.useState()
  const mapRef = React.useRef()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isPhone = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()

  React.useEffect(() => {
    if (activeMarker) {
      mapRef.current.leafletElement.panTo(activeMarker.coords)
    }
  }, [activeMarker])

  React.useEffect(() => {
    if (props.center && !activeMarker) {
      mapRef.current.leafletElement.flyTo(props.center)
    }
  }, [props.center])

  React.useEffect(() => {
    if (isMobile) {
      mapRef.current.leafletElement.invalidateSize()
    }
  }, [props.isLocationTabOpen, isMobile])

  // Handle refs.
  React.useImperativeHandle(ref, () => ({
    setActiveMarker(marker) {
      setActiveMarker(marker)
    },
    loadMapMarkers() {
      loadMapMarkers()
    },
  }))

  const loadMapMarkers = async () => {
    const bounds = await mapRef.current.leafletElement.getBounds()
    // Check whether viewport really changed to prevent a multiple calls for the
    // same data.
    if (JSON.stringify(bounds) !== JSON.stringify(previousBounds)) {
      setPreviousBounds(bounds)
    }
  }

  const calculateIconSize = count => {
    const calculated = (1.1 + Math.sqrt((0.02 * count))) * 16
    const maxSize = 70
    return calculated < maxSize ? calculated : maxSize
  }

  const activeIconSize = activeMarker ? calculateIconSize(activeMarker.count) : null

  return (
    <MapComponent
      ref={mapRef}
      className={classes.root}
      style={props.isLocationTabOpen && isMobile
        ? isPhone
          ? { height: theme.layout.mobileMiniMapHeight }
          : { marginLeft: theme.layout.locationTabWidth }
        : {}
      }
      center={props.center}
      zoom={props.zoom}
      minZoom={5}
      maxZoom={18}
      maxBounds={[[-90, -180], [90, 180]]}
      zoomControl={false}
      onMoveEnd={() => loadMapMarkers()}
      onClick={e => {
        if (props.isLocationTabOpen) {
          props.closeTab()
        }
        setActiveMarker(false)
      }}
    >
      <TileLayer
        url='https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}'
        attribution={`<a href="https://www.netlify.com" target="_blank">This site is powered by Netlify</a> &copy; <a href="https://www.seznam.cz" target="_blank" rel="noopener">Seznam.cz, a.s.</a>, &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>, &copy; NASA`}
      />
      <MarkerClusterGroup
        showCoverageOnHover={false}
        maxClusterRadius={40}
        disableClusteringAtZoom={8}
        spiderfyOnMaxZoom={false}
        iconCreateFunction={cluster => {
          const count = cluster.getAllChildMarkers().reduce((total, marker) => marker.options.count + total, 0)
          const iconSize = calculateIconSize(count)
          return new DivIcon({
            html: count,
            className: 'woodboard-cluster',
            iconSize: [iconSize, iconSize],
          })
        }}
      >
        {props.points && props.points.map(item => {
          const { location: { lat, lon }, type, infected } = item
          const iconSize = calculateIconSize(infected)
          return <Marker
            key={item.id}
            count={infected}
            icon={new DivIcon({
              html: `<div class='marker-count'>${infected}</div>`,
              className: `${classes.marker} ${type.toLowerCase()}`,
              iconSize: [iconSize, iconSize],
              iconAnchor: [iconSize / 2, iconSize],
            })}
            position={[lat, lon]}
            onClick={() => {
              props.openLocationTab(item)
              setActiveMarker({ coords: [lat, lon] })
            }}
          />
        })}
      </MarkerClusterGroup>
      {activeMarker &&
        <Marker
          icon={new Icon({
            iconUrl: '/location-icons/point.svg',
            iconSize: [activeIconSize, activeIconSize],
            iconAnchor: [activeIconSize / 2, activeIconSize],
          })}
          zIndexOffset={1000}
          position={activeMarker.coords}
          draggable={props.editMode}
        />
      }
      {props.currentLocation &&
        <Marker
          icon={new Icon({
            iconUrl: '/location-icons/current.svg',
            iconSize: [24, 24],
            iconAnchor: [0, 0],
          })}
          zIndexOffset={1100}
          position={props.currentLocation}
        />
      }
      <Control position='topright'>
        <FacebookShare />
      </Control>
      {(!props.isLocationTabOpen || !isPhone) &&
        <>
          <ZoomControl position='topright' />
        </>
      }
      <Control position='bottomright'>
        <NetlifyBadge />
      </Control>
      <ScaleControl position='bottomright' imperial={false} />
    </MapComponent>
  )
})

Map.defaultProps = {
  zoom: 6,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .leaflet-marker-icon': {
      filter: 'drop-shadow(0 0 1px rgb(0,0,0))',
    },
    '& .woodboard-cluster': {
      backgroundColor: 'transparent',
      backgroundImage: 'url(/location-icons/cluster.svg)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: '#ffffff',
      filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5))',
      fontSize: 'medium',
    },
  },
  marker: {
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    paddingBottom: '50%',
    fontWeight: 'bold',
    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5))',
    fontSize: 'medium',
    color: '#ffffff',
    '& .marker-count': {
      marginBottom: '14%',
    },
    '&.active': {
      backgroundImage: 'url(/location-icons/active.svg)',
    },
    '&.restrictions': {
      backgroundImage: 'url(/location-icons/restrictions.svg)',
    },
    '&.cured': {
      backgroundImage: 'url(/location-icons/cured.svg)',
    },
  },
  popup: {
    marginBottom: 50,
    '& .leaflet-popup-content-wrapper': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '& .leaflet-popup-content': {
      margin: 0,
      borderRadius: 0,
      border: 'none',
    },
  },
  customControl: {
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&[disabled]': {
      pointerEvents: 'none',
      opacity: 0.67,
    },
  },
  customControlIcon: {
    fontSize: 18,
  },
}))

export default Map
