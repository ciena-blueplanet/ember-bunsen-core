import portNumber from 'bunsen-core/validator/custom-formats/port-number'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/port-number', function () {
  it('returns false when value is undefined', function () {
    expect(portNumber(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(portNumber(null)).to.equal(false)
  })

  it('returns false when value is a string', function () {
    expect(portNumber('test')).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(portNumber({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(portNumber([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(portNumber(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(portNumber(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(portNumber(Infinity)).to.equal(false)
  })

  it('returns false when value < 0', function () {
    expect(portNumber(-1)).to.equal(false)
    expect(portNumber('-1')).to.equal(false)
  })

  it('returns false when value = 0', function () {
    expect(portNumber(0)).to.equal(false)
    expect(portNumber('0')).to.equal(false)
  })

  it('returns true when 1 <= value <= 65535', function () {
    expect(portNumber(1)).to.equal(true)
    expect(portNumber('1')).to.equal(true)
    expect(portNumber(65535)).to.equal(true)
    expect(portNumber('65535')).to.equal(true)
  })

  it('returns false when value > 65535', function () {
    expect(portNumber(65536)).to.equal(false)
    expect(portNumber('65536')).to.equal(false)
  })
})
