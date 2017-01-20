import ipv6Interface from 'bunsen-core/validator/custom-formats/ipv6-interface'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('validator/custom-formats/IPv6-interface', function () {
  it('returns false when value is undefined', function () {
    expect(ipv6Interface(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', function () {
    expect(ipv6Interface(null)).to.be.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(ipv6Interface({})).to.be.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(ipv6Interface([])).to.be.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(ipv6Interface(1)).to.be.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(ipv6Interface(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(ipv6Interface(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(ipv6Interface(Infinity)).to.be.equal(false)
  })

  it('returns false when network mask is missing', function () {
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:0000:0000')).to.be.equal(false)
  })

  it('returns false when value does not consist of eight groups', function () {
    expect(ipv6Interface('0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(ipv6Interface('000g:0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:000g:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:000g:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:000g:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:000g:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:000g:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:000g:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:0000:000g/0')).to.be.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(ipv6Interface('-0001:0000:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:-0001:0000:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:-0001:0000:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:-0001:0000:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:-0001:0000:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:-0001:0000:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:-0001:0000/0')).to.be.equal(false)
    expect(ipv6Interface('0000:0000:0000:0000:0000:0000:0000:-0001/0')).to.be.equal(false)
  })

  it('returns false when invalid IPv6 interface', function () {
    expect(ipv6Interface('12AB:0:0:CD3/60')).to.be.equal(false)
    expect(ipv6Interface('fe80::6a05:caff:fe05:f789/128')).to.be.equal(false)
  })

  it('returns true when valid IPv6 interface', function () {
    expect(ipv6Interface('1080:0:0:0:8:800:200C:417A/32')).to.be.equal(true)
    expect(ipv6Interface('12AB::CD30/60')).to.be.equal(true)
    expect(ipv6Interface('12AB::CD3/60')).to.be.equal(true)
    expect(ipv6Interface('12AB:0:0:CD30:123:4567:89AB:CDEF/60')).to.be.equal(true)
    expect(ipv6Interface('fe80::6a05:caff:fe05:f789/64')).to.be.equal(true)
    expect(ipv6Interface('FEDC:BA98:7654:3210:FEDC:BA98:7654:3210/68')).to.be.equal(true)
  })
})
