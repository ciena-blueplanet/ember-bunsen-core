import {expect} from 'chai'
import {it} from 'mocha'

import {validator} from 'bunsen-core'

it('exports validator', function () {
  expect(typeof validator).to.equal('object')
})
