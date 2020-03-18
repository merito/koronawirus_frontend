export function getPointById(points, id) {
  var index
  for (index in points) {
    if (points[index].id == id.toString()) {
      return points[index]
    }
  }
}

export function getInfectedNumber(points) {
  var index; var sum = 0
  for (index in points) {
    sum += points[index].infected
  }
  return sum
}

export function getCuredNumber(points) {
  var index; var sum = 0
  for (index in points) {
    sum += points[index].cured
  }
  return sum
}

export function getDeathsNumber(points) {
  var index; var sum = 0
  for (index in points) {
    sum += points[index].deaths
  }
  return sum
}
