/* eslint-env mocha */
const { expect } = require('chai')
const { longestCommonPrefix } = require('./longestCommonPrefix')
const { shortestString } = require('./longestCommonPrefix')

describe('Longest Common Prefix', () => {
  it('returns a string', () => {
    expect(typeof longestCommonPrefix(['a', 'b', 'c'])).to.equal('string')
  })
  it('returns an empty string when there is no common prefix', () => {
    expect(longestCommonPrefix(['a', 'b', 'c'])).to.equal('')
  })
  it('returns the longest common prefix of the array of words', () => {
    expect(longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.equal('foo')
  })
})

describe('Shortest String', () => {
  it.only('returns the shortest string in an array of strings', () => {
    expect(shortestString(['foobar', 'foo', 'foolish'])).to.equal('foo')
  })
})
