/* eslint-env mocha */
const { expect } = require('chai')
const twoSum = require('./twoSum')

describe('Two-sum', () => {
  it('returns an array', () => {
    const arr = [1, 2, 3]
    const target = 2
    expect(Array.isArray(twoSum(arr, target))).to.equal(true)
  })
  it('returns an empty array if target is not inside the array', () => {
    const arr = [1, 2, 3]
    const target = 8
    expect(Array.isArray(twoSum(arr, target))).to.equal(true)
    expect(twoSum(arr, target).length).to.equal(0)
  })
  it('returns an array with the two indices of the unique values that sum to equal the target', () => {
    const arr = [7, 1, 3, 4, 0]
    const target = 5
    expect(twoSum(arr, target)).to.deep.equal([1, 3])
  })
})
