import {expect} from 'chai'
import {describe, it} from 'mocha'
import ipAddress from 'bunsen-core/validator/custom-formats/ip-address'

describe('validator/custom-formats/ip-address', function () {
  describe('IPv4', function () {
    it('returns false when value is undefined', function () {
      expect(ipAddress(undefined)).to.be.false
    })

    it('returns false when value is null', function () {
      expect(ipAddress(null)).to.be.false
    })

    it('returns false when value is an object', function () {
      expect(ipAddress({})).to.be.false
    })

    it('returns false when value is an array', function () {
      expect(ipAddress([])).to.be.false
    })

    it('returns false when value is an integer', function () {
      expect(ipAddress(1)).to.be.false
    })

    it('returns false when value is a float', function () {
      expect(ipAddress(0.5)).to.be.false
    })

    it('returns false when value is NaN', function () {
      expect(ipAddress(NaN)).to.be.false
    })

    it('returns false when value is Infinity', function () {
      expect(ipAddress(Infinity)).to.be.false
    })

    it('returns false when value does not consist of four octets', function () {
      expect(ipAddress('100.101.102')).to.be.false
    })

    it('returns false when octets contain non-numeric characters', function () {
      expect(ipAddress('100a.101.102.103')).to.be.false
      expect(ipAddress('100.101a.102.103')).to.be.false
      expect(ipAddress('100.101.102a.103')).to.be.false
      expect(ipAddress('100.101.102.103a')).to.be.false
    })

    it('returns false when octets contain negative numbers', function () {
      expect(ipAddress('-100.101.102.103')).to.be.false
      expect(ipAddress('100.-101.102.103')).to.be.false
      expect(ipAddress('100.101.-102.103')).to.be.false
      expect(ipAddress('100.101.102.-103')).to.be.false
    })

    it('returns false when octets contain numbers > 255', function () {
      expect(ipAddress('256.101.102.103')).to.be.false
      expect(ipAddress('100.256.102.103')).to.be.false
      expect(ipAddress('100.101.256.103')).to.be.false
      expect(ipAddress('100.101.102.256')).to.be.false
    })

    it('returns true when valid IPv4 address', function () {
      expect(ipAddress('0.0.0.0')).to.be.true
      expect(ipAddress('127.0.0.1')).to.be.true
      expect(ipAddress('255.255.255.255')).to.be.true
    })
  })

  describe('IPv6', function () {
    it('returns false when value is undefined', function () {
      expect(ipAddress(undefined)).to.be.false
    })

    it('returns false when value is null', function () {
      expect(ipAddress(null)).to.be.false
    })

    it('returns false when value is an object', function () {
      expect(ipAddress({})).to.be.false
    })

    it('returns false when value is an array', function () {
      expect(ipAddress([])).to.be.false
    })

    it('returns false when value is an integer', function () {
      expect(ipAddress(1)).to.be.false
    })

    it('returns false when value is a float', function () {
      expect(ipAddress(0.5)).to.be.false
    })

    it('returns false when value is NaN', function () {
      expect(ipAddress(NaN)).to.be.false
    })

    it('returns false when value is Infinity', function () {
      expect(ipAddress(Infinity)).to.be.false
    })

    it('returns false when value does not consist of eight groups', function () {
      expect(ipAddress('0000')).to.be.false
      expect(ipAddress('0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000:0000')).to.be.false
    })

    it('returns false when groups contain non-hex characters', function () {
      expect(ipAddress('000g:0000:0000:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:000g:0000:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:000g:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:000g:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:000g:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:000g:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000:000g:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000:0000:000g')).to.be.false
    })

    it('returns false when groups contain negative numbers', function () {
      expect(ipAddress('-0001:0000:0000:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:-0001:0000:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:-0001:0000:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:-0001:0000:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:-0001:0000:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:-0001:0000:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000:-0001:0000')).to.be.false
      expect(ipAddress('0000:0000:0000:0000:0000:0000:0000:-0001')).to.be.false
    })

    it('returns true when valid IPv6 address', function () {
      expect(ipAddress('0000:0000:0000:0000:0000:0000:0000:0000')).to.be.true
      expect(ipAddress('2001:0db8:0000:0042:0000:8a2e:0370:7334')).to.be.true
    })
  })
})
