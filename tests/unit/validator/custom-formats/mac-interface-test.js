import {expect} from 'chai'
import {describe, it} from 'mocha'
import macInterface from 'bunsen-core/validator/custom-formats/mac-interface'

describe('validator/custom-formats/mac-prefix', function () {
  it('returns false when value is undefined', function () {
    expect(macInterface(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', function () {
    expect(macInterface(null)).to.be.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(macInterface({})).to.be.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(macInterface([])).to.be.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(macInterface(1)).to.be.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(macInterface(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(macInterface(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(macInterface(Infinity)).to.be.equal(false)
  })

  it('returns false when MAC mask is missing', function () {
    expect(macInterface('00:00:00:00:00:00')).to.be.equal(false)
  })

  it('returns false when mac address does not consist of six groups', function () {
    expect(macInterface('00:00:00:00:00/0')).to.be.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(macInterface('0g:00:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:0g:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:0g:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:0g:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:0g:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:00:0g/0')).to.be.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(macInterface('-00:00:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:-00:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:-00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:-00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:-00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:00:-00/0')).to.be.equal(false)
  })

  it('returns false when groups contain numbers > ff', function () {
    expect(macInterface('1ff:00:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:1ff:00:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:1ff:00:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:1ff:00:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:1ff:00/0')).to.be.equal(false)
    expect(macInterface('00:00:00:00:00:1ff/0')).to.be.equal(false)
  })

  it('returns false when invalid MAC prefix', () => {
    expect(macInterface('ff:ff:00:00:00:00/16')).to.be.equal(false)
    expect(macInterface('f0:ff:00:00:00:00/multicast')).to.be.equal(false)
  })

  it('returns true when valid MAC prefix', () => {
    expect(macInterface('ff:ff:ff:00:00:00/16')).to.be.equal(true)
    expect(macInterface('ff:ff:ff:00:00:01/24')).to.be.equal(true)
    expect(macInterface('ff:ff:ff:00:00:01/multicast')).to.be.equal(true)
  })
})
