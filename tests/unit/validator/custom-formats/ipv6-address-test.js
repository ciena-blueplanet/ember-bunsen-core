import {expect} from 'chai'
import {describe, it} from 'mocha'
import ipv6Address from 'bunsen-core/validator/custom-formats/ipv6-address'

describe('validator/custom-formats/ipv6-address', function () {
  it('returns false when value is undefined', function () {
    expect(ipv6Address(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(ipv6Address(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(ipv6Address({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(ipv6Address([])).to.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(ipv6Address(1)).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(ipv6Address(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(ipv6Address(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(ipv6Address(Infinity)).to.equal(false)
  })

  it('returns false when value does not consist of eight groups', function () {
    expect(ipv6Address('0000')).to.equal(false)
    expect(ipv6Address('0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:0000')).to.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(ipv6Address('000g:0000:0000:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:000g:0000:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:000g:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:000g:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:000g:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:000g:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:000g:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:0000:000g')).to.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(ipv6Address('-0001:0000:0000:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:-0001:0000:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:-0001:0000:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:-0001:0000:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:-0001:0000:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:-0001:0000:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:-0001:0000')).to.equal(false)
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:0000:-0001')).to.equal(false)
  })

  it('returns true when valid IPv6 address', function () {
    expect(ipv6Address('0000:0000:0000:0000:0000:0000:0000:0000')).to.equal(true)
    expect(ipv6Address('2001:0db8:0000:0042:0000:8a2e:0370:7334')).to.equal(true)
  })
})
