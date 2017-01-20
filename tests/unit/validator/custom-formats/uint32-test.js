import uint32 from 'bunsen-core/validator/custom-formats/uint32'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/uint32', function () {
  it('returns false when value is undefined', function () {
    expect(uint32(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(uint32(null)).to.equal(false)
  })

  it('returns false when value is a string', function () {
    expect(uint32('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(uint32({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(uint32([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(uint32(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(uint32(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(uint32(Infinity)).to.equal(false)
  })

  it('returns true when value is an integer', function () {
    expect(uint32(0)).to.equal(true)
  })

  it('returns false when value < 0', function () {
    expect(uint32(-1)).to.equal(false)
    expect(uint32('-1')).to.equal(false)
  })

  it('returns true when 0 <= value <= 4294967295', function () {
    expect(uint32(0)).to.equal(true)
    expect(uint32('0')).to.equal(true)
    expect(uint32(4294967295)).to.equal(true)
    expect(uint32('4294967295')).to.equal(true)
  })

  it('returns false when value > 4294967295', function () {
    expect(uint32(4294967296)).to.equal(false)
    expect(uint32('4294967296')).to.equal(false)
  })
})
