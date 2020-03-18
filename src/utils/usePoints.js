import React from 'react'
import api from '../api'
import {
  getPointById,
  getInfectedNumber,
  getCuredNumber,
  getDeathsNumber,
} from './dataProcessing'

const PointsContext = React.createContext([null, () => {}])

export const PointsProvider = ({ children }) => {
  const [data, setData] = React.useState({
    loading: true,
    error: false,
    points: [],
    getPointById: () => {},
    infectedNumber: null,
    curedNumber: null,
    deathsNumber: null,
  })

  React.useEffect(() => {
    const handleAsync = async () => {
      try {
        const { data: { points } } = await api.get('data.json')
        setData({
          loading: false,
          error: false,
          points,
          getPointById: id => getPointById(points, id),
          infectedNumber: getInfectedNumber(points),
          curedNumber: getCuredNumber(points),
          deathsNumber: getDeathsNumber(points),
        })
      } catch (error) {
        setData({
          ...data,
          error: true,
        })
      }
    }
    handleAsync()
  }, [])

  return (
    <PointsContext.Provider value={[data, setData]}>
      {children}
    </PointsContext.Provider>
  )
}


const usePoints = () => {
  const [data] = React.useContext(PointsContext)
  return data
}

export default usePoints
