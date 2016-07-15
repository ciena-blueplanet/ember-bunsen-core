'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'bunsen-core',

  treeForAddon (tree) {
    const bunsenCorePath = path.dirname(require.resolve('bunsen-core/lib/index.js'))

    if (!tree) {
      return this._super.treeForAddon.call(this, bunsenCorePath)
    }

    const trees = mergeTrees([bunsenCorePath, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
