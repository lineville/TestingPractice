// const longestCommonPrefix = function(arr) {
//   let index = 0
//   while (index <)
//   return ''
// }

const shortestString = arr => {
  return arr.reduce((shortest, str) => {
    if (str.length < shortest.length) {
      shortest = str
    }
  }, arr[0])
}

module.exports = {
  // longestCommonPrefix,
  shortestString,
}
