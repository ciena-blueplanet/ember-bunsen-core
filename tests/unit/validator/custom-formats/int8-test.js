import {expect} from 'chai'
import {describe, it} from 'mocha'
import int8 from 'bunsen-core/validator/custom-formats/int8'

describe('Unit: validator/custom-formats/int8', function () {
  it('returns false when value is undefined', function () {
    expect(int8(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(int8(null)).to.equal(false)
  })

  it('returns false when value is a non-numeric string', function () {
    expect(int8('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(int8({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(int8([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(int8(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(int8(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(int8(Infinity)).to.equal(false)
  })

  it('returns false when value < -128', function () {
    expect(int8(-129)).to.equal(false)
    expect(int8('-129')).to.equal(false)
  })

  it('returns true when -128 <= value <= 127', function () {
    expect(int8(-128)).to.equal(true)
    expect(int8('-128')).to.equal(true)
    expect(int8(127)).to.equal(true)
    expect(int8('127')).to.equal(true)
  })

  it('returns false when value > 127', function () {
    expect(int8(128)).to.equal(false)
    expect(int8('128')).to.equal(false)
  })
})
