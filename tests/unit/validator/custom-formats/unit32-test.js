import {expect} from 'chai'
import {describe, it} from 'mocha'
import uint32 from 'bunsen-core/validator/custom-formats/uint32'

describe('Unit: validator/custom-formats/unit32', function () {
  it('returns false when value is undefined', function () {
    expect(uint32(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(uint32(null)).to.be.false
  })

  it('returns false when value is a string', function () {
    expect(uint32('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(uint32({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(uint32([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(uint32(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(uint32(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(uint32(Infinity)).to.be.false
  })

  it('returns true when value is an integer', function () {
    expect(uint32(0)).to.be.true
  })

  it('returns false when value < 0', function () {
    expect(uint32(-1)).to.be.false
    expect(uint32('-1')).to.be.false
  })

  it('returns true when 0 <= value <= 4294967295', function () {
    expect(uint32(0)).to.be.true
    expect(uint32('0')).to.be.true
    expect(uint32(4294967295)).to.be.true
    expect(uint32('4294967295')).to.be.true
  })

  it('returns false when value > 4294967295', function () {
    expect(uint32(4294967296)).to.be.false
    expect(uint32('4294967296')).to.be.false
  })
})
