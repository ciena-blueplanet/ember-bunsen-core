import macPrefix from 'bunsen-core/validator/custom-formats/mac-prefix'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('validator/custom-formats/mac-prefix', function () {
  it('returns false when value is undefined', function () {
    expect(macPrefix(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', function () {
    expect(macPrefix(null)).to.be.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(macPrefix({})).to.be.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(macPrefix([])).to.be.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(macPrefix(1)).to.be.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(macPrefix(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(macPrefix(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(macPrefix(Infinity)).to.be.equal(false)
  })

  it('returns false when MAC mask is missing', function () {
    expect(macPrefix('00:00:00:00:00:00')).to.be.equal(false)
  })

  it('returns false when mac address does not consist of six groups', function () {
    expect(macPrefix('00:00:00:00:00/0')).to.be.equal(false)
  })

  it('returns false when groups contain non-hex characters', function () {
    expect(macPrefix('0g:00:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:0g:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:0g:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:0g:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:0g:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:00:0g/0')).to.be.equal(false)
  })

  it('returns false when groups contain negative numbers', function () {
    expect(macPrefix('-00:00:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:-00:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:-00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:-00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:-00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:00:-00/0')).to.be.equal(false)
  })

  it('returns false when groups contain numbers > ff', function () {
    expect(macPrefix('1ff:00:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:1ff:00:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:1ff:00:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:1ff:00:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:1ff:00/0')).to.be.equal(false)
    expect(macPrefix('00:00:00:00:00:1ff/0')).to.be.equal(false)
  })

  it('returns false when invalid MAC prefix', function () {
    expect(macPrefix('ff:ff:ff:00:00:00/16')).to.be.equal(false)
    expect(macPrefix('f0:ff:ff:00:00:00/multicast')).to.be.equal(false)
  })

  it('returns true when valid MAC prefix', function () {
    expect(macPrefix('ff:ff:00:00:00:00/16')).to.be.equal(true)
    expect(macPrefix('ff:ff:ff:00:00:00/24')).to.be.equal(true)
    expect(macPrefix('ff:ff:ff:00:00:00/multicast')).to.be.equal(true)
  })
})
