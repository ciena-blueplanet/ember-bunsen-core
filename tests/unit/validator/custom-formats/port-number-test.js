import {expect} from 'chai'
import {describe, it} from 'mocha'
import portNumber from 'bunsen-core/validator/custom-formats/port-number'

describe('Unit: validator/custom-formats/port-number', function () {
  it('returns false when value is undefined', function () {
    expect(portNumber(undefined)).to.be.false
  })

  it('returns false when value is null', function () {
    expect(portNumber(null)).to.be.false
  })

  it('returns false when value is a string', function () {
    expect(portNumber('test')).to.be.false
  })

  it('returns false when value is an object', function () {
    expect(portNumber({})).to.be.false
  })

  it('returns false when value is an array', function () {
    expect(portNumber([])).to.be.false
  })

  it('returns false when value is a float', function () {
    expect(portNumber(0.5)).to.be.false
  })

  it('returns false when value is NaN', function () {
    expect(portNumber(NaN)).to.be.false
  })

  it('returns false when value is Infinity', function () {
    expect(portNumber(Infinity)).to.be.false
  })

  it('returns false when value < 0', function () {
    expect(portNumber(-1)).to.be.false
    expect(portNumber('-1')).to.be.false
  })

  it('returns false when value = 0', function () {
    expect(portNumber(0)).to.be.false
    expect(portNumber('0')).to.be.false
  })

  it('returns true when 1 <= value <= 65535', function () {
    expect(portNumber(1)).to.be.true
    expect(portNumber('1')).to.be.true
    expect(portNumber(65535)).to.be.true
    expect(portNumber('65535')).to.be.true
  })

  it('returns false when value > 65535', function () {
    expect(portNumber(65536)).to.be.false
    expect(portNumber('65536')).to.be.false
  })
})
