import int16 from 'bunsen-core/validator/custom-formats/int16'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/int16', function () {
  it('returns false when value is undefined', function () {
    expect(int16(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(int16(null)).to.equal(false)
  })

  it('returns false when value is a non-numeric string', function () {
    expect(int16('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(int16({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(int16([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(int16(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(int16(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(int16(Infinity)).to.equal(false)
  })

  it('returns false when value < -32768', function () {
    expect(int16(-32769)).to.equal(false)
    expect(int16('-32769')).to.equal(false)
  })

  it('returns true when -32768 <= value <= 32767', function () {
    expect(int16(-32768)).to.equal(true)
    expect(int16('-32768')).to.equal(true)
    expect(int16(32767)).to.equal(true)
    expect(int16('32767')).to.equal(true)
  })

  it('returns false when value > 32767', function () {
    expect(int16(32768)).to.equal(false)
    expect(int16('32768')).to.equal(false)
  })
})
