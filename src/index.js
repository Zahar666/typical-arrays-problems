
exports.min = function min (array) {
  let minValue = 0
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (minValue > array[i]) 
        minValue = array[i]
    }
    return minValue
  }
}

exports.max = function max (array) {
  let maxValue = 0
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (maxValue < array[i]) 
        maxValue = array[i]
    }
    return maxValue
  }
}

exports.avg = function avg (array) {
  let sum = 0
  let average = 0
  if (array === undefined || array.length == 0) {
    return 0
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    average = sum / array.length
    return average
  }
}
