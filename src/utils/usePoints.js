import React from 'react'
import api from '../api'

const PointsContext = React.createContext([null, () => {}])

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = React.useState({
    loading: true,
    error: false,
    points: null,
    getPointById: () => {},
    infectedNumber: null,
    curedNumber: null,
    deathsNumber: null,
  })

  React.useEffect(() => {
    try {
      const { data } = api.get('data.json')
      console.log('data: ', data);
      setPoints({
        loading: true,
        error: false,
        points: data,
        getPointById: () => {},
        infectedNumber: null,
        curedNumber: null,
        deathsNumber: null,
      })
    } catch (error) {
      setPoints({
        ...points,
        error: true,
      })
    }
  }, [])

  return (
    <PointsContext.Provider value={[points, setPoints]}>
      {children}
    </PointsContext.Provider>
  )
}


const usePoints = () => {
  const [points] = React.useContext(CurrentLocationContext)
  return points
}
export default usePoints
