import React from 'react'
import { Typography } from '@material-ui/core'
import { formatDateTime } from '../utils/helpers'
import {
  getInfectedNumber,
  getCuredNumber,
  getDeathsNumber,
  getLastUpdate
 } from '../../data'



const BigNumber = ({ className, points }) => {
  const [bigNumberState, setBigNumberState] = React.useState(0);
  // const classes = useStyles()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBigNumberState(bigNumberState =>
        (bigNumberState < 2) ? bigNumberState += 1 : bigNumberState = 0
      )
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getBigNumber() {
    var states = {0: {'textId': 'locationInfo.infected', 'func': getInfectedNumber},
                  1: {'textId': 'locationInfo.cured', 'func': getCuredNumber},
                  2: {'textId': 'locationInfo.deaths', 'func': getDeathsNumber}}
    var textId = states[bigNumberState].textId
    var numberValue = states[bigNumberState].func(points)
    console.log(numberValue)
    return {'textId': textId, 'numberValue': numberValue}
  }

  return (
    <div>
    <Typography
      variant='h6'
    ><Text id={getBigNumber().textId} />: {getBigNumber().numberValue}</Typography>
    <Typography
      variant='body2'
    ><Text id='data' />: {formatDateTime(getLastUpdate(points))}</Typography>
    </div>
  )
}

export default BigNumber
