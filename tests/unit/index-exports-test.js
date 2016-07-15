import {expect} from 'chai'
import {it} from 'mocha'

import {
  dereference,
  utils,
  validator
} from 'bunsen-core'

it('exports dereference', function () {
  expect(typeof dereference).to.equal('object')
})

it('exports utils', function () {
  expect(typeof utils).to.equal('object')
})

it('exports validator', function () {
  expect(typeof validator).to.equal('object')
})
