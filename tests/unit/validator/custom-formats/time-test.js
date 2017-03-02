import time from 'bunsen-core/validator/custom-formats/time'
import {expect} from 'chai'
import {describe, it} from 'mocha'

describe('Unit: validator/custom-formats/time', function () {
  it('returns false when value is undefined', function () {
    expect(time(undefined)).to.equal(false)
  })

  it('returns false when value is null', function () {
    expect(time(null)).to.equal(false)
  })

  it('returns false when value is an object', function () {
    expect(time({})).to.equal(false)
  })

  it('returns false when value is an array', function () {
    expect(time([])).to.equal(false)
  })

  it('returns false when value is a float', function () {
    expect(time(0.5)).to.equal(false)
  })

  it('returns false when value is NaN', function () {
    expect(time(NaN)).to.equal(false)
  })

  it('returns false when value is Infinity', function () {
    expect(time(Infinity)).to.equal(false)
  })

  it('returns true when value is format hh:mm:ss', function () {
    expect(time('04:01:05')).to.equal(true)
  })

  it('returns true when value is format hh:mm', function () {
    expect(time('04:01')).to.equal(true)
  })

  it('returns true when value is format hh', function () {
    expect(time('04')).to.equal(true)
  })

  it('returns true when value is format h:mm:ss', function () {
    expect(time('4:01:05')).to.equal(true)
  })

  it('returns true when value is format h:mm', function () {
    expect(time('4:01')).to.equal(true)
  })

  it('returns true when value is format h', function () {
    expect(time('4')).to.equal(true)
  })

  it('returns true when value is format hh:m:ss', function () {
    expect(time('04:1:05')).to.equal(true)
  })

  it('returns true when value is format hh:m', function () {
    expect(time('04:1')).to.equal(true)
  })

  it('returns true when value is format h:m:ss', function () {
    expect(time('4:1:05')).to.equal(true)
  })

  it('returns true when value is format h:m', function () {
    expect(time('4:1')).to.equal(true)
  })

  it('returns true when value is format hh:mm:s', function () {
    expect(time('04:01:5')).to.equal(true)
  })

  it('returns true when value is format hh:m:s', function () {
    expect(time('04:1:5')).to.equal(true)
  })

  it('returns true when value is format h:mm:s', function () {
    expect(time('4:01:5')).to.equal(true)
  })

  it('returns true when value is format h:m:s', function () {
    expect(time('4:1:5')).to.equal(true)
  })

  it('returns true when value is format hh:mm:ss a', function () {
    expect(time('04:01:05 am')).to.equal(true)
    expect(time('04:01:05 AM')).to.equal(true)
    expect(time('04:01:05 a.m.')).to.equal(true)
    expect(time('04:01:05 A.M.')).to.equal(true)
    expect(time('04:01:05 pm')).to.equal(true)
    expect(time('04:01:05 PM')).to.equal(true)
    expect(time('04:01:05 p.m.')).to.equal(true)
    expect(time('04:01:05 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh:mm a', function () {
    expect(time('04:01 am')).to.equal(true)
    expect(time('04:01 AM')).to.equal(true)
    expect(time('04:01 a.m.')).to.equal(true)
    expect(time('04:01 A.M.')).to.equal(true)
    expect(time('04:01 pm')).to.equal(true)
    expect(time('04:01 PM')).to.equal(true)
    expect(time('04:01 p.m.')).to.equal(true)
    expect(time('04:01 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh a', function () {
    expect(time('04 am')).to.equal(true)
    expect(time('04 AM')).to.equal(true)
    expect(time('04 a.m.')).to.equal(true)
    expect(time('04 A.M.')).to.equal(true)
    expect(time('04 pm')).to.equal(true)
    expect(time('04 PM')).to.equal(true)
    expect(time('04 p.m.')).to.equal(true)
    expect(time('04 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:mm:ss a', function () {
    expect(time('4:01:05 am')).to.equal(true)
    expect(time('4:01:05 AM')).to.equal(true)
    expect(time('4:01:05 a.m.')).to.equal(true)
    expect(time('4:01:05 A.M.')).to.equal(true)
    expect(time('4:01:05 pm')).to.equal(true)
    expect(time('4:01:05 PM')).to.equal(true)
    expect(time('4:01:05 p.m.')).to.equal(true)
    expect(time('4:01:05 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:mm a', function () {
    expect(time('4:01 am')).to.equal(true)
    expect(time('4:01 AM')).to.equal(true)
    expect(time('4:01 a.m.')).to.equal(true)
    expect(time('4:01 A.M.')).to.equal(true)
    expect(time('4:01 pm')).to.equal(true)
    expect(time('4:01 PM')).to.equal(true)
    expect(time('4:01 p.m.')).to.equal(true)
    expect(time('4:01 P.M.')).to.equal(true)
  })

  it('returns true when value is format h a', function () {
    expect(time('4 am')).to.equal(true)
    expect(time('4 AM')).to.equal(true)
    expect(time('4 a.m.')).to.equal(true)
    expect(time('4 A.M.')).to.equal(true)
    expect(time('4 pm')).to.equal(true)
    expect(time('4 PM')).to.equal(true)
    expect(time('4 p.m.')).to.equal(true)
    expect(time('4 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh:m:ss a', function () {
    expect(time('04:1:05 am')).to.equal(true)
    expect(time('04:1:05 AM')).to.equal(true)
    expect(time('04:1:05 a.m.')).to.equal(true)
    expect(time('04:1:05 A.M.')).to.equal(true)
    expect(time('04:1:05 pm')).to.equal(true)
    expect(time('04:1:05 PM')).to.equal(true)
    expect(time('04:1:05 p.m.')).to.equal(true)
    expect(time('04:1:05 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh:m a', function () {
    expect(time('04:1 am')).to.equal(true)
    expect(time('04:1 AM')).to.equal(true)
    expect(time('04:1 a.m.')).to.equal(true)
    expect(time('04:1 A.M.')).to.equal(true)
    expect(time('04:1 pm')).to.equal(true)
    expect(time('04:1 PM')).to.equal(true)
    expect(time('04:1 p.m.')).to.equal(true)
    expect(time('04:1 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:m:ss a', function () {
    expect(time('4:1:05 am')).to.equal(true)
    expect(time('4:1:05 AM')).to.equal(true)
    expect(time('4:1:05 a.m.')).to.equal(true)
    expect(time('4:1:05 A.M.')).to.equal(true)
    expect(time('4:1:05 pm')).to.equal(true)
    expect(time('4:1:05 PM')).to.equal(true)
    expect(time('4:1:05 p.m.')).to.equal(true)
    expect(time('4:1:05 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:m a', function () {
    expect(time('4:1 am')).to.equal(true)
    expect(time('4:1 AM')).to.equal(true)
    expect(time('4:1 a.m.')).to.equal(true)
    expect(time('4:1 A.M.')).to.equal(true)
    expect(time('4:1 pm')).to.equal(true)
    expect(time('4:1 PM')).to.equal(true)
    expect(time('4:1 p.m.')).to.equal(true)
    expect(time('4:1 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh:mm:s a', function () {
    expect(time('04:01:5 am')).to.equal(true)
    expect(time('04:01:5 AM')).to.equal(true)
    expect(time('04:01:5 a.m.')).to.equal(true)
    expect(time('04:01:5 A.M.')).to.equal(true)
    expect(time('04:01:5 pm')).to.equal(true)
    expect(time('04:01:5 PM')).to.equal(true)
    expect(time('04:01:5 p.m.')).to.equal(true)
    expect(time('04:01:5 P.M.')).to.equal(true)
  })

  it('returns true when value is format hh:m:s a', function () {
    expect(time('04:1:5 am')).to.equal(true)
    expect(time('04:1:5 AM')).to.equal(true)
    expect(time('04:1:5 a.m.')).to.equal(true)
    expect(time('04:1:5 A.M.')).to.equal(true)
    expect(time('04:1:5 pm')).to.equal(true)
    expect(time('04:1:5 PM')).to.equal(true)
    expect(time('04:1:5 p.m.')).to.equal(true)
    expect(time('04:1:5 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:mm:s a', function () {
    expect(time('4:01:5 am')).to.equal(true)
    expect(time('4:01:5 AM')).to.equal(true)
    expect(time('4:01:5 a.m.')).to.equal(true)
    expect(time('4:01:5 A.M.')).to.equal(true)
    expect(time('4:01:5 pm')).to.equal(true)
    expect(time('4:01:5 PM')).to.equal(true)
    expect(time('4:01:5 p.m.')).to.equal(true)
    expect(time('4:01:5 P.M.')).to.equal(true)
  })

  it('returns true when value is format h:m:s a', function () {
    expect(time('4:1:5 am')).to.equal(true)
    expect(time('4:1:5 AM')).to.equal(true)
    expect(time('4:1:5 a.m.')).to.equal(true)
    expect(time('4:1:5 A.M.')).to.equal(true)
    expect(time('4:1:5 pm')).to.equal(true)
    expect(time('4:1:5 PM')).to.equal(true)
    expect(time('4:1:5 p.m.')).to.equal(true)
    expect(time('4:1:5 P.M.')).to.equal(true)
  })
})
