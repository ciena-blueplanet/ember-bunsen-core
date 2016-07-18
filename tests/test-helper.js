import resolver from './helpers/resolver'
import {setResolver} from 'ember-mocha'

const flag = chai.util.flag

// Taken from chai-subset
function compare (expected, actual) {
  if (typeof (actual) !== typeof (expected)) {
    return false
  }
  if (typeof (expected) !== 'object' || expected === null) {
    return expected === actual
  }
  if (!!expected && !actual) {
    return false
  }

  if (Array.isArray(expected)) {
    if (typeof (actual.length) !== 'number') {
      return false
    }
    var aa = Array.prototype.slice.call(actual)
    return expected.every(function (exp) {
      return aa.some(function (act) {
        return compare(exp, act)
      })
    })
  }

  if (expected instanceof Date && actual instanceof Date) {
    return expected.getTime() === actual.getTime()
  }

  return Object.keys(expected).every(function (key) {
    var eo = expected[key]
    var ao = actual[key]
    if (typeof (eo) === 'object' && eo !== null && ao !== null) {
      return compare(eo, ao)
    }
    return ao === eo
  })
}

// Taken from chai-subset
chai.Assertion.addMethod('containSubset', function (expected) {
  var actual = flag(this, 'object')
  var showDiff = chai.config.showDiff

  this.assert(
    compare(expected, actual),
    'expected #{act} to contain subset #{exp}',
    'expected #{act} to not contain subset #{exp}',
    expected,
    actual,
    showDiff
  )
})

// Taken from chai-subset
chai.assert.containSubset = function (val, exp, msg) {
  new chai.Assertion(val, msg).to.be.containSubset(exp)
}

setResolver(resolver)
