import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './App.css'
import Layout from './components/Layout'
import ContentWrapper from './components/ContentWrapper'
import LocationTab from './components/LocationTab'
import Info from './components/Info'
import NavBarContainer from './containers/NavBarContainer'
import MapContainer from './containers/MapContainer'
import SelectedLocationContainer from './containers/SelectedLocationContainer'
import { points } from '../data'


const App = ({ history, location: { pathname } }) => {
  const [cachedLocation, setCachedLocation] = React.useState()
  const isLocationTabOpen = location.pathname.startsWith('/location') || location.pathname.startsWith('/search')
  const editMode = pathname.endsWith('/edit') || pathname.endsWith('/new')
  const mapRef = React.useRef()

  React.useEffect(() => {
    if (cachedLocation) {
      const { lat, lon } = cachedLocation.location
      mapRef.current.setActiveMarker([lat, lon])
    } else {
      mapRef.current.setActiveMarker(null)
    }
  }, [cachedLocation])

  return (
    <Layout appBar={
      <NavBarContainer
      points={points}/>
    }>

      <LocationTab
        closeLocationTab={() => {
          setCachedLocation(null)
          history.push('/')
        }}
        refreshMap={async () => {
          await mapRef.current.loadMapMarkers()
        }}
        isLocationTabOpen={isLocationTabOpen}
      >
        <Switch>

          <Route exact path='/location/:id'>
            <SelectedLocationContainer
              points={points}
              cachedLocation={cachedLocation}
              setCachedLocation={setCachedLocation}
            />
          </Route>

        </Switch>
      </LocationTab>

      <MapContainer
        points={points}
        openLocationTab={point => {
          setCachedLocation(point)
          history.push(`/location/${point.id}`)
        }}
        closeTab={() => history.push('/')}
        updateCoordinates={({ lat, lng: lon }) => {
          setCachedLocation({ ...cachedLocation, location: { lon, lat } })
        }}
        ref={mapRef}
        isLocationTabOpen={isLocationTabOpen}
        editMode={editMode}
      />

      <Switch>
        <Route exact path='/info' component={Info} />
      </Switch>

    </Layout>
  )
}

export default withRouter(App)
