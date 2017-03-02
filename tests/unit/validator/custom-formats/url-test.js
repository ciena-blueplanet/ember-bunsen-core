import url from 'bunsen-core/validator/custom-formats/url'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/hex-string', function () {
  it('returns false when value is undefined', function () {
    expect(url(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(url(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(url({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(url([])).to.equal(false)
  })

  it('returns false when value is an integer', function () {
    expect(url(1)).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(url(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(url(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(url(Infinity)).to.equal(false)
  })

  it('returns false when value is not valid', function () {
    [
      'a',
      '1'
    ]
      .forEach((value) => {
        expect(url(value)).to.equal(false)
      })
  })

  it('returns true when value is valid', function () {
    [
      'https://domain.com',
      'https://subdomain.domain.com',
      'https://www.domain.com',
      'https://www.subdomain.domain.com'
    ]
      .forEach((value) => {
        expect(url(value)).to.equal(true)
      })
  })
})
