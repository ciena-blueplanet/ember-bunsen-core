import {expect} from 'chai'
import {describe, it} from 'mocha'
import bgpAs from 'bunsen-core/validator/custom-formats/bgp-as'

describe('Unit: validator/custom-formats/bgp-as', function () {
  it('returns false when value is undefined', function () {
    expect(bgpAs(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(bgpAs(null)).to.be.false
  })

  it('returns false when value is a string', function () {
    expect(bgpAs('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(bgpAs({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(bgpAs([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(bgpAs(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(bgpAs(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(bgpAs(Infinity)).to.be.false
  })

  it('returns false when value < 0', function () {
    expect(bgpAs(-1)).to.be.false
    expect(bgpAs('-1')).to.be.false
  })

  it('returns false when value = 0', function () {
    expect(bgpAs(0)).to.be.false
    expect(bgpAs('0')).to.be.false
  })

  it('returns true when 1 <= value <= 65534', function () {
    expect(bgpAs(1)).to.be.true
    expect(bgpAs('1')).to.be.true
    expect(bgpAs(65534)).to.be.true
    expect(bgpAs('65534')).to.be.true
  })

  it('returns false when value = 65535', function () {
    expect(bgpAs(65535)).to.be.false
    expect(bgpAs('65535')).to.be.false
  })

  it('returns true when 65536 <= value <= 4294967294', function () {
    expect(bgpAs(65536)).to.be.true
    expect(bgpAs('65536')).to.be.true
    expect(bgpAs(4294967294)).to.be.true
    expect(bgpAs('4294967294')).to.be.true
  })

  it('returns false when value = 4294967295', function () {
    expect(bgpAs(4294967295)).to.be.false
    expect(bgpAs('4294967295')).to.be.false
  })

  it('returns false when value > 4294967295', function () {
    expect(bgpAs(4294967296)).to.be.false
    expect(bgpAs('4294967296')).to.be.false
  })
})
