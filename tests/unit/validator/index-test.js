import {expect} from 'chai'
import _ from 'lodash'
import {it} from 'ember-mocha'
import {beforeEach, describe} from 'mocha'
import validate from 'bunsen-core/validator'
// import viewSchema from 'bunsen-core/validator/view-schema'
// import readmeContents from '!!raw!../../../README.md'
import missingReqAttrs from './fixtures/invalid/missing-required-attributes'
import invalidTypeVersion from './fixtures/invalid/invalid-type-version'
import simpleFormConfig from './fixtures/simple-form'
import simpleFormModel from './fixtures/simple-form-model'
import badCells from './fixtures/invalid/bad-cells'
import multipleCells from './fixtures/multiple-cells'
import transforms from './fixtures/transforms'

describe('Unit: validator', function () {
  let result

  // TODO: get test working
  /* describe('README.md view schema', function () {
    let readmeSchema
    beforeEach(function () {
      const lines = readmeContents.split('\n')
      let startIndex = lines.indexOf('<!-- BEGIN view-schema.json -->') + 1
      let endIndex = lines.indexOf('<!-- END view-schema.json -->')
      const trimmedLines = lines.slice(startIndex, endIndex)
      startIndex = trimmedLines.indexOf('```json') + 1
      endIndex = trimmedLines.indexOf('```')
      const jsonLines = trimmedLines.slice(startIndex, endIndex)

      readmeSchema = JSON.parse(jsonLines.join('\n'))
    })

    it('matches the schema used by the code', function () {
      expect(readmeSchema).deep.equal(viewSchema)
    })
  }) */

  describe('.validate()', function () {
    describe('when valid', function () {
      beforeEach(function () {
        result = validate(simpleFormConfig, simpleFormModel)
      })

      it('validates', function () {
        expect(result).to.eql({
          errors: [],
          warnings: []
        })
      })
    })

    describe('when required attributes are missing', function () {
      beforeEach(function () {
        result = validate(missingReqAttrs, simpleFormModel)
      })

      it('reports missing "version"', function () {
        expect(result.errors).to.containSubset([{
          message: 'Field is required.',
          path: '#/version'
        }])
      })

      it('reports missing "type"', function () {
        expect(result.errors).to.containSubset([{
          message: 'Field is required.',
          path: '#/type'
        }])
      })

      it('reports missing "cells"', function () {
        expect(result.errors).to.containSubset([{
          message: 'Field is required.',
          path: '#/cells'
        }])
      })
    })

    describe('when version and type are invalid', function () {
      beforeEach(function () {
        result = validate(invalidTypeVersion, simpleFormModel)
      })

      it('gives error message for invalid "version"', function () {
        expect(result.errors).to.containSubset([{
          path: '#/version',
          message: 'No enum match for: 0.1'
        }])
      })

      it('gives error message for invalid "type"', function () {
        expect(result.errors).to.containSubset([{
          path: '#/type',
          message: 'No enum match for: my-custom-type'
        }])
      })
    })

    it('does not complain when multiple root cells', function () {
      const def = _.cloneDeep(multipleCells)
      result = validate(def, simpleFormModel)
      expect(result.errors.length).to.eql(0)
    })

    it('does not complain when transforms are present', function () {
      const def = _.cloneDeep(transforms)
      result = validate(def, simpleFormModel)
      expect(result.errors.length).to.eql(0)
    })

    describe('when cells are bad', function () {
      let def
      beforeEach(function () {
        def = _.cloneDeep(badCells)
      })

      it('when missing "label"', function () {
        def.cells = [def.cells[1]]
        result = validate(def, simpleFormModel)
        expect(result.errors).to.containSubset([{
          path: '#/cells/0',
          message: 'Missing required attribute "label"'
        }])
      })

      it('when invalid "extends"', function () {
        def.cells = [def.cells[2]]
        result = validate(def, simpleFormModel)
        expect(result.errors).to.containSubset([{
          path: '#/cells/0',
          message: 'Invalid value "baz" for "extends" Valid options are ["bar","foo"]'
        }])
      })
    })
  })
})
