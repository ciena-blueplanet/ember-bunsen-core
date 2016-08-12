import {expect} from 'chai'
import {describe, it} from 'mocha'
import vlanId from 'bunsen-core/validator/custom-formats/vlan-id'

describe('Unit: validator/custom-formats/vlan-id', function () {
  it('returns false when value is undefined', function () {
    expect(vlanId(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(vlanId(null)).to.be.false
  })

  it('returns false when value is a string', function () {
    expect(vlanId('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(vlanId({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(vlanId([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(vlanId(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(vlanId(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(vlanId(Infinity)).to.be.false
  })

  it('returns false when value < 0', function () {
    expect(vlanId(-1)).to.be.false
    expect(vlanId('-1')).to.be.false
  })

  it('returns false when value = 0', function () {
    expect(vlanId(0)).to.be.false
    expect(vlanId('0')).to.be.false
  })

  it('returns true when 1 <= value <= 4094', function () {
    expect(vlanId(1)).to.be.true
    expect(vlanId('1')).to.be.true
    expect(vlanId(4094)).to.be.true
    expect(vlanId('4094')).to.be.true
  })

  it('returns false when value > 4094', function () {
    expect(vlanId(4095)).to.be.false
    expect(vlanId('4095')).to.be.false
  })
})
