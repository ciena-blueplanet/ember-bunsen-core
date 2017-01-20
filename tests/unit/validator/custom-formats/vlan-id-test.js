import vlanId from 'bunsen-core/validator/custom-formats/vlan-id'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/vlan-id', function () {
  it('returns false when value is undefined', function () {
    expect(vlanId(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(vlanId(null)).to.equal(false)
  })

  it('returns false when value is a string', function () {
    expect(vlanId('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(vlanId({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(vlanId([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(vlanId(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(vlanId(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(vlanId(Infinity)).to.equal(false)
  })

  it('returns false when value < 0', function () {
    expect(vlanId(-1)).to.equal(false)
    expect(vlanId('-1')).to.equal(false)
  })

  it('returns false when value = 0', function () {
    expect(vlanId(0)).to.equal(false)
    expect(vlanId('0')).to.equal(false)
  })

  it('returns true when 1 <= value <= 4094', function () {
    expect(vlanId(1)).to.equal(true)
    expect(vlanId('1')).to.equal(true)
    expect(vlanId(4094)).to.equal(true)
    expect(vlanId('4094')).to.equal(true)
  })

  it('returns false when value > 4094', function () {
    expect(vlanId(4095)).to.equal(false)
    expect(vlanId('4095')).to.equal(false)
  })
})
