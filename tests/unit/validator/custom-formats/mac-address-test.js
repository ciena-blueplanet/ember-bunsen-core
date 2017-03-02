import macAddress from 'bunsen-core/validator/custom-formats/mac-address'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('validator/custom-formats/mac-address', function () {
  it('returns false when value is undefined', function () {
    expect(macAddress(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', function () {
    expect(macAddress(null)).to.be.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(macAddress({})).to.be.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(macAddress([])).to.be.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(macAddress(1)).to.be.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(macAddress(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(macAddress(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(macAddress(Infinity)).to.be.equal(false)
  })

  it('returns false when value does not consist of six groups', function () {
    expect(macAddress('00')).to.be.equal(false)
    expect(macAddress('00:00')).to.be.equal(false)
    expect(macAddress('00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00:00')).to.be.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(macAddress('0g:00:00:00:00:00')).to.be.equal(false)
    expect(macAddress('00:0g:00:00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:0g:00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:0g:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00:0g:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00:00:0g')).to.be.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(macAddress('-01:00:00:00:00:00')).to.be.equal(false)
    expect(macAddress('00:-01:00:00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:-01:00:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:-01:00:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00:-01:00')).to.be.equal(false)
    expect(macAddress('00:00:00:00:00:-01')).to.be.equal(false)
  })

  it('returns true when valid MAC address', function () {
    expect(macAddress('00:00:00:00:00:00')).to.be.equal(true)
    expect(macAddress('01:b8:00:42:00:2e')).to.be.equal(true)
  })
})
