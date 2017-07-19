/* eslint-env node */
'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'bunsen-core',

  treeForAddon (tree) {
    const bunsenCorePath = path.dirname(require.resolve('bunsen-core/src/index.js'))
    const bunsenCoreTree = this.treeGenerator(bunsenCorePath)

    if (!tree) {
      return this._super.treeForAddon.call(this, bunsenCoreTree)
    }

    const trees = mergeTrees([bunsenCoreTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
