import {expect} from 'chai'
import {describe, it} from 'mocha'
import int32 from 'bunsen-core/validator/custom-formats/int32'

describe('Unit: validator/custom-formats/int', function () {
  it('returns false when value is undefined', function () {
    expect(int32(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(int32(null)).to.equal(false)
  })

  it('returns false when value is a non-numeric string', function () {
    expect(int32('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(int32({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(int32([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(int32(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(int32(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(int32(Infinity)).to.equal(false)
  })

  it('returns true when value is an integer', function () {
    expect(int32(0)).to.equal(true)
  })

  it('returns false when value < -2147483648', function () {
    expect(int32(-2147483649)).to.equal(false)
    expect(int32('-2147483649')).to.equal(false)
  })

  it('returns true when -2147483648 <= value <= 2147483647', function () {
    expect(int32(-2147483648)).to.equal(true)
    expect(int32('-2147483648')).to.equal(true)
    expect(int32(2147483647)).to.equal(true)
    expect(int32('2147483647')).to.equal(true)
  })

  it('returns false when value > 2147483647', function () {
    expect(int32(2147483648)).to.equal(false)
    expect(int32('2147483648')).to.equal(false)
  })
})
