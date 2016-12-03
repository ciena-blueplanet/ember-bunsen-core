import {expect} from 'chai'
import {describe, it} from 'mocha'
import date from 'bunsen-core/validator/custom-formats/date'

describe('Unit: validator/custom-formats/date', function () {
  it('returns false when value is undefined', function () {
    expect(date(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(date(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(date({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(date([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(date(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(date(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(date(Infinity)).to.equal(false)
  })

  it('returns true when value is in format MMMM DD YYYY', function () {
    expect(date('August 03 2015')).to.equal(true)
  })

  it('returns true when value is in format MMMM D YYYY', function () {
    expect(date('August 3 2015')).to.equal(true)
  })

  /* FIXME: this test passes in Chrome but fails in Firefox
  it('returns true when value is in format MMMM DD YY', function () {
    expect(date('August 03 15')).to.equal(true)
  })
  */

  /* FIXME: this test passes in Chrome but fails in Firefox
  it('returns true when value is in format MMMM D YY', function () {
    expect(date('August 3 15')).to.equal(true)
  })
  */

  it('returns true when value is in format MMM DD YYYY', function () {
    expect(date('Aug 03 2015')).to.equal(true)
  })

  it('returns true when value is in format MMM D YYYY', function () {
    expect(date('Aug 3 2015')).to.equal(true)
  })

  /* FIXME: this test passes in Chrome but fails in Firefox
  it('returns true when value is in format MMM DD YY', function () {
    expect(date('Aug 03 15')).to.equal(true)
  })
  */

  /* FIXME: this test passes in Chrome but fails in Firefox
  it('returns true when value is in format MMM D YY', function () {
    expect(date('Aug 3 15')).to.equal(true)
  })
  */

  it('returns true when value is in format MM DD YYYY', function () {
    expect(date('08 03 2015')).to.equal(true)
  })

  it('returns true when value is in format MM D YYYY', function () {
    expect(date('08 3 2015')).to.equal(true)
  })

  it('returns true when value is in format MM DD YY', function () {
    expect(date('08 03 15')).to.equal(true)
  })

  it('returns true when value is in format MM D YY', function () {
    expect(date('08 3 15')).to.equal(true)
  })

  it('returns true when value is in format M DD YYYY', function () {
    expect(date('8 03 2015')).to.equal(true)
  })

  it('returns true when value is in format M D YYYY', function () {
    expect(date('8 3 2015')).to.equal(true)
  })

  it('returns true when value is in format M DD YY', function () {
    expect(date('8 03 15')).to.equal(true)
  })

  it('returns true when value is in format M D YY', function () {
    expect(date('8 3 15')).to.equal(true)
  })

  it('returns true when value is in format MM/DD/YYYY', function () {
    expect(date('08/03/2015')).to.equal(true)
  })

  it('returns true when value is in format MM/D/YYYY', function () {
    expect(date('08/3/2015')).to.equal(true)
  })

  it('returns true when value is in format MM/DD/YY', function () {
    expect(date('08/03/15')).to.equal(true)
  })

  it('returns true when value is in format MM/D/YY', function () {
    expect(date('08/3/15')).to.equal(true)
  })

  it('returns true when value is in format M/DD/YYYY', function () {
    expect(date('8/03/2015')).to.equal(true)
  })

  it('returns true when value is in format M/D/YYYY', function () {
    expect(date('8/3/2015')).to.equal(true)
  })

  it('returns true when value is in format M/DD/YY', function () {
    expect(date('8/03/15')).to.equal(true)
  })

  it('returns true when value is in format M/D/YY', function () {
    expect(date('8/3/15')).to.equal(true)
  })
})
