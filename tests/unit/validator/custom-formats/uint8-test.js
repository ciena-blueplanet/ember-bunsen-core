import {expect} from 'chai'
import {describe, it} from 'mocha'
import uint8 from 'bunsen-core/validator/custom-formats/uint8'

describe('Unit: validator/custom-formats/uint8', function () {
  it('returns false when value is undefined', function () {
    expect(uint8(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(uint8(null)).to.be.false
  })

  it('returns false when value is a string', function () {
    expect(uint8('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(uint8({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(uint8([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(uint8(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(uint8(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(uint8(Infinity)).to.be.false
  })

  it('returns false when value = -1', function () {
    expect(uint8(-1)).to.be.false
    expect(uint8('-1')).to.be.false
  })

  it('returns true when 0 <= value <= 255', function () {
    expect(uint8(0)).to.be.true
    expect(uint8('0')).to.be.true
    expect(uint8(255)).to.be.true
    expect(uint8('255')).to.be.true
  })

  it('returns false when value > 255', function () {
    expect(uint8(256)).to.be.false
    expect(uint8('256')).to.be.false
  })
})
