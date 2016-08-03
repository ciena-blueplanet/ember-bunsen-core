module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'bunsen-core', target: '>=0.9.0 <= 2.0.0'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-cli-moment-shim', target: '^2.0.0'},
            {name: 'ember-lodash-shim', target: '0.1.3'},
            {name: 'ember-seamless-immutable-shim', target: '0.2.2'},
            {name: 'ember-z-schema', target: '0.2.4'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
