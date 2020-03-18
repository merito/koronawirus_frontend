import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './App.css'
import Layout from './components/Layout'
import LocationTab from './components/LocationTab'
import Info from './components/Info'
import Contributing from './components/Contributing'
import NavBarContainer from './containers/NavBarContainer'
import MapContainer from './containers/MapContainer'
import SelectedLocationContainer from './containers/SelectedLocationContainer'
import api from './api'



const App = ({ history, location: { pathname } }) => {
  const [cachedLocation, setCachedLocation] = React.useState()
  const isLocationTabOpen = location.pathname.startsWith('/location') || location.pathname.startsWith('/search')
  const editMode = pathname.endsWith('/edit') || pathname.endsWith('/new')
  const mapRef = React.useRef()

  const { data: { points } } = api.get('data.json')
  setPoints(points)

  React.useEffect(() => {
    if (cachedLocation) {
      const { location: { lat, lon }, infected } = cachedLocation
      mapRef.current.setActiveMarker({ coords: [lat, lon], count: infected })
    } else {
      mapRef.current.setActiveMarker(null)
    }
  }, [cachedLocation])

  return (
    <Layout appBar={<NavBarContainer
      points={points} />}>

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
        <Route exact path='/contributing' component={Contributing} />
      </Switch>

    </Layout>
  )
}

export default withRouter(App)
