import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'
import validatorFactory from 'bunsen-core/validator/cell'

describe('Unit: validator/cell', () => {
  let validator, cell, result, cellDefinitions, model, renderers

  beforeEach(() => {
    cellDefinitions = {
      bottom: {
        children: []
      },
      main: {
        children: []
      },
      middle: {
        children: []
      },
      top: {
        children: []
      }
    }

    model = {
      type: 'object',
      properties: {
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        alias: {type: 'string'}
      }
    }

    renderers = [
      'FooComponent',
      'BarComponent'
    ]

    const ownerMock = {
      hasRegistration (id) {
        return id === 'component:foo-bar-renderer'
      }
    }

    validator = validatorFactory(cellDefinitions, model, renderers, ownerMock)
  })

  describe('.validate()', () => {
    describe('when valid', () => {
      beforeEach(() => {
        cell = {
          children: [
            {model: 'firstName'},
            {model: 'lastName'},
            {model: 'alias'}
          ]
        }
        result = validator.validate('#/cellDefinitions/main', cell, model)
      })

      it('returns proper result', () => {
        expect(result).deep.equal({
          errors: [],
          warnings: []
        })
      })
    })

    describe('when extra attributes are given', () => {
      beforeEach(() => {
        cell = {
          children: [
            {model: 'firstName'},
            {model: 'lastName'},
            {model: 'alias'}
          ],
          classNames: {
            cell: 'col-sm-12'
          },
          foo: 'bar'
        }
        result = validator.validate('#/cellDefinitions/main', cell, model)
      })

      it('returns proper result', () => {
        expect(result).deep.equal({
          errors: [],
          warnings: [
            {
              path: '#/cellDefinitions/main',
              message: 'Unrecognized attribute "foo"'
            }
          ]
        })
      })
    })

    describe('when cells have bad references', () => {
      beforeEach(() => {
        cell = {
          children: [
            {model: 'firstName'},
            {
              model: 'lastName',
              renderer: {
                name: 'BazComponent'
              }
            },
            {
              classNames: {
                cell: 'col-sm-4'
              }
            },
            {model: 'bad-field-name'},
            {
              model: 'alias',
              renderer: {
                name: 'FooComponent'
              }
            },
            {extends: 'bad-cell-name'},
            {extends: 'top'},
            {extends: 'bottom', bar: 'baz'},
            {model: 'firstName'},
            {
              model: 'lastName',
              renderer: {
                name: 'foo-bar-renderer'
              }
            }
          ]
        }
        result = validator.validate('#/cellDefinitions/main', cell, model)
      })

      it('returns proper result', () => {
        expect(result).deep.equal({
          errors: [
            {
              path: '#/cellDefinitions/main/children/1/renderer',
              message: 'Invalid renderer reference "BazComponent"'
            },
            {
              path: '#/cellDefinitions/main/children/2',
              message: 'Either "model" or "extends" must be defined for each cell.'
            },
            {
              path: '#/cellDefinitions/main/children/3/model',
              message: 'Invalid model reference "bad-field-name"'
            },
            {
              path: '#/cellDefinitions/main/children/5/extends',
              message: 'Invalid extends reference "bad-cell-name"'
            }
          ],
          warnings: [
            {
              path: '#/cellDefinitions/main/children/7',
              message: 'Unrecognized attribute "bar"'
            }
          ]
        })
      })
    })
  })
})
