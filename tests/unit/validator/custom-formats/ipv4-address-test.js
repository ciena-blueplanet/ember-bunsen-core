import {expect} from 'chai'
import {describe, it} from 'mocha'
import ipv4Address from 'bunsen-core/validator/custom-formats/ipv4-address'

describe('Unit: validator/custom-formats/ipv4-address', function () {
  it('returns false when value is undefined', function () {
    expect(ipv4Address(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(ipv4Address(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(ipv4Address({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(ipv4Address([])).to.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(ipv4Address(1)).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(ipv4Address(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(ipv4Address(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(ipv4Address(Infinity)).to.equal(false)
  })

  it('returns false when value does not consist of four octets', function () {
    expect(ipv4Address('100.101.102')).to.equal(false)
  })

  it('returns false when octets contain non-numeric characters', function () {
    expect(ipv4Address('100a.101.102.103')).to.equal(false)
    expect(ipv4Address('100.101a.102.103')).to.equal(false)
    expect(ipv4Address('100.101.102a.103')).to.equal(false)
    expect(ipv4Address('100.101.102.103a')).to.equal(false)
  })

  it('returns false when octets contain negative numbers', function () {
    expect(ipv4Address('-100.101.102.103')).to.equal(false)
    expect(ipv4Address('100.-101.102.103')).to.equal(false)
    expect(ipv4Address('100.101.-102.103')).to.equal(false)
    expect(ipv4Address('100.101.102.-103')).to.equal(false)
  })

  it('returns false when octets contain numbers > 255', function () {
    expect(ipv4Address('256.101.102.103')).to.equal(false)
    expect(ipv4Address('100.256.102.103')).to.equal(false)
    expect(ipv4Address('100.101.256.103')).to.equal(false)
    expect(ipv4Address('100.101.102.256')).to.equal(false)
  })

  it('returns true when valid IPv4 address', function () {
    expect(ipv4Address('0.0.0.0')).to.equal(true)
    expect(ipv4Address('127.0.0.1')).to.equal(true)
    expect(ipv4Address('255.255.255.255')).to.equal(true)
  })
})
