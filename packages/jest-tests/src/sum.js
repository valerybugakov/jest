// test
const lol = require('./lol')
// const index = require('./index')
// const rimraf = require('rimraf')
const rn = require('react-native')

function func(a, b) {
  console.log(lol)
  return a + b
}

// console.log(lol(1, 2))

const sum = {
  number: 1,
  func,
  lol,
  rn,
  // index,
}

module.exports = sum
