import {expect} from 'chai'
import {describe, it} from 'mocha'
import customFormats from 'bunsen-core/validator/custom-formats'
import bgpAs from 'bunsen-core/validator/custom-formats/bgp-as'
import date from 'bunsen-core/validator/custom-formats/date'
import hexString from 'bunsen-core/validator/custom-formats/hex-string'
import int8 from 'bunsen-core/validator/custom-formats/int8'
import int16 from 'bunsen-core/validator/custom-formats/int16'
import int32 from 'bunsen-core/validator/custom-formats/int32'
import int64 from 'bunsen-core/validator/custom-formats/int64'
import ipv4Address from 'bunsen-core/validator/custom-formats/ipv4-address'
import ipv4Interface from 'bunsen-core/validator/custom-formats/ipv4-interface'
import ipv4Prefix from 'bunsen-core/validator/custom-formats/ipv4-prefix'
import netmask from 'bunsen-core/validator/custom-formats/netmask'
import portNumber from 'bunsen-core/validator/custom-formats/port-number'
import time from 'bunsen-core/validator/custom-formats/time'
import uint8 from 'bunsen-core/validator/custom-formats/uint8'
import uint16 from 'bunsen-core/validator/custom-formats/uint16'
import uint32 from 'bunsen-core/validator/custom-formats/uint32'
import url from 'bunsen-core/validator/custom-formats/url'
import vlanId from 'bunsen-core/validator/custom-formats/vlan-id'

describe('Unit: validator/custom-formats', function () {
  it('includes bgp-as format', function () {
    expect(customFormats['bgp-as']).to.equal(bgpAs)
  })

  it('includes date format', function () {
    expect(customFormats.date).to.equal(date)
  })

  it('includes hex-string format', function () {
    expect(customFormats['hex-string']).to.equal(hexString)
  })

  it('includes int8 format', function () {
    expect(customFormats.int8).to.equal(int8)
  })

  it('includes int16 format', function () {
    expect(customFormats.int16).to.equal(int16)
  })

  it('includes int32 format', function () {
    expect(customFormats.int32).to.equal(int32)
  })

  it('includes int64 format', function () {
    expect(customFormats.int64).to.equal(int64)
  })

  it('includes ipv4-address format', function () {
    expect(customFormats['ipv4-address']).to.equal(ipv4Address)
  })

  it('includes ipv4-interface format', function () {
    expect(customFormats['ipv4-interface']).to.equal(ipv4Interface)
  })

  it('includes ipv4-prefix format', function () {
    expect(customFormats['ipv4-prefix']).to.equal(ipv4Prefix)
  })

  it('includes netmask format', function () {
    expect(customFormats.netmask).to.equal(netmask)
  })

  it('includes port-number format', function () {
    expect(customFormats['port-number']).to.equal(portNumber)
  })

  it('includes time format', function () {
    expect(customFormats.time).to.equal(time)
  })

  it('includes uint8 format', function () {
    expect(customFormats.uint8).to.equal(uint8)
  })

  it('includes uint16 format', function () {
    expect(customFormats.uint16).to.equal(uint16)
  })

  it('includes uint32 format', function () {
    expect(customFormats.uint32).to.equal(uint32)
  })

  it('includes url format', function () {
    expect(customFormats.url).to.equal(url)
  })

  it('includes vlan-id format', function () {
    expect(customFormats['vlan-id']).to.equal(vlanId)
  })
})
