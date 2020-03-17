import api from './api'


var { points } = api.get('data.json')

export function getAllPoints() {
  return points
}

// export function getLastUpdate() {
//   const timestamps = points.map(point => Number(point.last_modified_timestamp))
//   return String(Math.max(...timestamps, 1583530394))
// }

export function getPointById(id) {
  var index;
  for (index in points) {
    if (points[index].id == id.toString()){
      return points[index]
    }
  }
 }

export function getInfectedNumber() {
   var index, sum=0;
   for (index in points) {
     sum += points[index].infected
   }
   return sum;
}

export function getCuredNumber() {
   var index, sum=0;
   for (index in points) {
     sum += points[index].cured
   }
   return sum;
}

export function getDeathsNumber() {
   var index, sum=0;
   for (index in points) {
     sum += points[index].deaths
   }
   return sum;
}
