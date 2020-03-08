import { format, fromUnixTime } from 'date-fns'
import locationTypes from './locationTypes'


export const roundLatLng = (number) => {
  return Math.round(number * 100000) / 100000
}

export const formatDate = timestamp => {
  const dateString = fromUnixTime(timestamp)
  return format(new Date(dateString), 'dd.MM.yyyy')
}

export const formatDateTime = timestamp => {
  const dateString = fromUnixTime(timestamp)
  return format(new Date(dateString), 'dd.MM.yyyy HH:MM')
}

export function getIconUrl(type) {
  // Fallback to HUT icon, if invalid icon type is set.
  const iconName = Object.keys(locationTypes).includes(type)
    ? type
    : 'CABIN'

  return '/location-icons/' + iconName.toLowerCase() + '.svg'
}
