import {expect} from 'chai'
import {describe, it} from 'mocha'
import ipv6Prefix from 'bunsen-core/validator/custom-formats/ipv6-prefix'

describe('validator/custom-formats/ipv6-prefix', function () {
  it('returns false when value is undefined', function () {
    expect(ipv6Prefix(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', function () {
    expect(ipv6Prefix(null)).to.be.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(ipv6Prefix({})).to.be.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(ipv6Prefix([])).to.be.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(ipv6Prefix(1)).to.be.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(ipv6Prefix(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(ipv6Prefix(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(ipv6Prefix(Infinity)).to.be.equal(false)
  })

  it('returns false when network mask is missing', function () {
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:0000:0000')).to.be.equal(false)
  })

  it('returns false when value does not consist of eight groups', function () {
    expect(ipv6Prefix('0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(ipv6Prefix('000g:0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:000g:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:000g:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:000g:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:000g:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:000g:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:000g:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:0000:000g/0')).to.be.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(ipv6Prefix('-0001:0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:-0001:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:-0001:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:-0001:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:-0001:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:-0001:0000:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:-0001:0000/0')).to.be.equal(false)
    expect(ipv6Prefix('0000:0000:0000:0000:0000:0000:0000:-0001/0')).to.be.equal(false)
  })

  it('returns false when invalid IPv6 prefix', function () {
    expect(ipv6Prefix('12AB:0:0:CD3/60')).to.be.equal(false)
    expect(ipv6Prefix('12AB::CD30/60')).to.be.equal(false)
    expect(ipv6Prefix('12AB::CD3/60')).to.be.equal(false)
  })

  it('returns true when valid IPv6 prefix', function () {
    expect(ipv6Prefix('12AB:0000:0000:CD30:0000:0000:0000:0000/60')).to.be.equal(true)
    expect(ipv6Prefix('12AB::CD30:0:0:0:0/60')).to.be.equal(true)
    expect(ipv6Prefix('12AB:0:0:CD30::/60')).to.be.equal(true)
    expect(ipv6Prefix('::/0')).to.be.equal(true)
  })
})
