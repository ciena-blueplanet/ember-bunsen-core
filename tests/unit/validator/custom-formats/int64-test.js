import int64 from 'bunsen-core/validator/custom-formats/int64'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/int64', function () {
  it('returns false when value is undefined', function () {
    expect(int64(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(int64(null)).to.equal(false)
  })

  it('returns false when value is a non-numeric string', function () {
    expect(int64('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(int64({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(int64([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(int64(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(int64(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(int64(Infinity)).to.equal(false)
  })

  it('returns true when value is an integer', function () {
    expect(int64(0)).to.equal(true)
  })
})
