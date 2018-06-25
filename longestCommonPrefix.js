// const longestCommonPrefix = function(arr) {
//   let index = 0
//   while (index <)
//   return ''
// }

const shortestString = function(arr) {
  let shortest = arr[0]
  arr.forEach(str => {
    if (str.length < shortest.length) {
      shortest = str
    }
  })
  return shortest
}

module.exports = {
  // longestCommonPrefix,
  shortestString,
}
