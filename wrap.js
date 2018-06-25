const wrap = function(str, col) {
  if (str.length <= col) {
    return str
  }
  //recursively split lines
  const indexOfLastSpace = str.lastIndexOf(' ', col)
  //loop until the endIndex of the line exceeds str.length
  let split
  let offset
  if (indexOfLastSpace > -1) {
    //if a space exists
    split = indexOfLastSpace
    offset = 1
  } else {
    split = col
    offset = 0
  }
  return (
    str.substring(0, split) + '\n' + wrap(str.substring(split + offset), col)
  )
}

module.exports = wrap
