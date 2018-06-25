const twoSum = function(arr, target) {
  const sorted = arr.sort()
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let sum = sorted[start] + sorted[end]
    if (sum === target) {
      return [start, end]
    } else if (sum < target) {
      start++
    } else {
      end--
    }
  }
  return []
}

module.exports = twoSum
