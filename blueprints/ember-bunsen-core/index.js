module.exports = {
  afterInstall: function () {
    return this.removePackagesFromProject([
      {name: 'bunsen-core'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-cli-moment-shim', target: '^2.0.0'},
            {name: 'ember-lodash-shim', target: '^1.2.0'},
            {name: 'ember-seamless-immutable-shim', target: '^1.0.0'},
            {name: 'ember-z-schema', target: '^2.2.0'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
