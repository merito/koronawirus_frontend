import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import LocationInfo from '../components/LocationInfo'
import Loader from '../components/Loader'
import Text from '../components/Text'
import usePoints from '../utils/usePoints'


const SelectedLocationContainer = ({
  cachedLocation,
  setCachedLocation,
  match,
}) => {
  const { params: { id } } = match
  const { enqueueSnackbar } = useSnackbar()
  const {
    loading,
    error,
    getPointById,
  } = usePoints()
  const [location, setLocation] = React.useState()

  // Use cached location data if avaliable, otherwise load data from endpoint.
  React.useEffect(() => {
    if (cachedLocation) {
      setLocation(cachedLocation)
    } else if (!loading) {
      const handleAsync = async () => {
        try {
          const data = getPointById(id)
          setLocation(data)
          setCachedLocation(data)
        } catch (error) {
          setError(true)
          enqueueSnackbar(<Text id='connectionProblem.location' />, { variant: 'error' })
        }
        setLoading(false)
      }
      handleAsync()
    }
  }, [cachedLocation, loading])

  // Update the component if cached location changes.
  React.useEffect(() => {
    setLocation(cachedLocation)
  }, [cachedLocation])


  return (
    loading || !location
      ? <Loader dark big />
      : error
        ? <div>Error!</div>
        : <>
          <LocationInfo selectedLocation={location} />
        </>
  )
}

export default withRouter(SelectedLocationContainer)
