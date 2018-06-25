/* eslint-env mocha */
const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })
  it('Returns the same string as given if its length is less than column size', () => {
    expect(wrap('save me', 10)).to.equal('save me')
  })
  it('Splits lines on the column number --does not handle spaces', () => {
    expect(wrap('01234567890123456789', 10)).to.equal('0123456789\n0123456789')
  })
  it('Splits a big string with no spaces on column number', () => {
    expect(
      wrap(
        '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
        10
      )
    ).to.equal(
      '0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789\n0123456789'
    )
  })
  it('Splits arbitrarily large words and handles spaces --does not start new line mid-word', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    )
  })
})
