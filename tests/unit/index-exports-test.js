import {expect} from 'chai'
import {describe, it} from 'mocha'

import {
  dereference,
  utils,
  validator
} from 'bunsen-core'

describe('bunsen-core', function () {
  it('exports dereference', function () {
    expect(typeof dereference).to.equal('object')
  })

  it('exports utils', function () {
    expect(typeof utils).to.equal('object')
  })

  it('exports validator', function () {
    expect(typeof validator).to.equal('function')
  })
})
