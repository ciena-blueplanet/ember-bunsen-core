import {expect} from 'chai'
import {describe, it} from 'mocha'

import {
  actions,
  changeUtils,
  dereference,
  generateView,
  normalizeView,
  reducer,
  utils,
  validateModel,
  validateView,
  viewV1ToV2
} from 'bunsen-core'

describe('bunsen-core', function () {
  it('exports dereference', function () {
    expect(typeof dereference).to.equal('object')
  })

  it('exports actions', function () {
    expect(typeof actions).to.equal('object')
  })

  it('exports changeUtils', function () {
    expect(typeof changeUtils).to.equal('object')
  })

  it('exports generateView', function () {
    expect(typeof generateView).to.equal('function')
  })

  it('exports normalizeView', function () {
    expect(typeof normalizeView).to.equal('function')
  })

  it('exports reducer', function () {
    expect(typeof reducer).to.equal('function')
  })

  it('exports utils', function () {
    expect(typeof utils).to.equal('object')
  })

  it('exports viewV1ToV2', function () {
    expect(typeof viewV1ToV2).to.equal('function')
  })

  it('exports validateModel', function () {
    expect(typeof validateModel).to.equal('function')
  })

  it('exports validateView', function () {
    expect(typeof validateView).to.equal('function')
  })
})
