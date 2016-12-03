import {expect} from 'chai'
import {describe, it} from 'mocha'
import hexString from 'bunsen-core/validator/custom-formats/hex-string'

describe('Unit: validator/custom-formats/hex-string', function () {
  it('returns false when value is undefined', function () {
    expect(hexString(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(hexString(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(hexString({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(hexString([])).to.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(hexString(1)).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(hexString(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(hexString(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(hexString(Infinity)).to.equal(false)
  })

  it('returns false when value is not valid', function () {
    [
      'a',
      '1',
      'a1:',
      'a1:b',
      'g1'
    ]
      .forEach((value) => {
        expect(hexString(value)).to.equal(false)
      })
  })

  it('returns true when value is valid', function () {
    [
      'a1',
      'a1:b2',
      'f1'
    ]
      .forEach((value) => {
        expect(hexString(value)).to.equal(true)
      })
  })
})
