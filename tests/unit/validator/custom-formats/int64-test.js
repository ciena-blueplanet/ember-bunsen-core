import {expect} from 'chai'
import {describe, it} from 'mocha'
import int64 from 'bunsen-core/validator/custom-formats/int64'

describe('Unit: validator/custom-formats/int64', function () {
  it('returns false when value is undefined', function () {
    expect(int64(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(int64(null)).to.be.false
  })

  it('returns false when value is a non-numeric string', function () {
    expect(int64('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(int64({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(int64([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(int64(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(int64(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(int64(Infinity)).to.be.false
  })

  it('returns true when value is an integer', function () {
    expect(int64(0)).to.be.true
  })
})
