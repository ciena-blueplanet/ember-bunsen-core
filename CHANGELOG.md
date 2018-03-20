# 4.0.1 (2018-03-20)

* Test change

# 4.0.0 (2018-02-13)
* **Updated** `ember-cli-moment-shim` to `3.3.3`

# 3.0.0 (2018-01-08)
* **Added** `bower` devDependency @ `^1.8.2`
* **Added** `ember-frost-test` @ `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** to pin `ember-cli-htmlbars-inline-precompile` @ `0.3.12`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Added** `ember-hook` @ `1.4.2`
* **Added** `ember-sinon` @ `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Added** `sinon-chai` @ `^2.14.0`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Added** ignoring of linting the CHANGELOG.md file
* **Added** `NOTES.md` file to explain reasons that some of the dependencies exist
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Updated** `npm run test` to not run code coverage (since it is not currently installed)

# 2.0.0 (2017-09-18)

* **Upgraded** bunsen-core to latest (2.0.0)


# 1.0.3 (2017-07-19)

Stops pinning the dependencies. If it is required to pin a specific dependency of `bunsen-core`, that's still possible in the app. This addon will now just follow the most recent version of `bunsen-core@1.x.x`.


# 1.0.2 (2017-07-12)
* **Added** CONTRIBUTING.md
* **Updated** to Ember CLI 2.12.3 and Ember 2.12.x
* **Updated** ember-try config matrix with Ember LTS 2.8 and LTS 2.12
* **Updated** travis.yml build matrix to run Ember LTS 2.8 and default (Ember LTS 2.12)

# 1.0.1 (2017-07-07)

* **Fixes** the build. Manually bumped the version to reflect the version it was supposed to be it.


# 0.27.14 (2017-06-21)
**Fixed** check for `_internal` properties in validation that is no longer needed.


# 0.27.13 (2017-06-20)

* **Updated** to use [bunsen-core@0.30.13](https://github.com/ciena-blueplanet/bunsen-core/pull/112)

# 0.27.12 (2017-06-16)
**Fixed** how BunsenModelPath handles appending string paths using dot notation. This was causing internal models to be added to the wrong spot in the bunsen model if the cell defining the internal model used dot notation.

# 0.27.11 (2017-06-14)
Additional fixes to the internal model feature.


# 0.27.10 (2017-06-13)
Incorrect views no longer cause normalization to crash. Instead, model and view are returned unchanged.

# 0.27.9 (2017-06-08)
**Update** core with fixes for array cases of internal properties.

# 0.27.8 (2017-06-04)

**Fix** relative pathing

# 0.27.7 (2017-05-31)
**Fixed** internal model references in nested cell configs.

# 0.27.6 (2017-05-31)
**Fixed** model evaluation for empty array values.

# 0.27.5 (2017-05-25)

**Fixed** handling of empty array values in view condition evaluation.

# 0.27.4 (2017-05-24)

**Updated** bunsen-core for export of ValueWrapper.


# 0.27.3 (2017-05-23)
**Update** bunsen-core with a fix for conditions referencing internal models. 

# 0.27.2 (2017-05-16)
**Updated** core version.

# 0.27.1 (2017-05-12)

* **Upgraded** to latest version of `bunsen-core`.

# 0.27.0 (2017-05-11)

* **Updated** secure auth token.
* **Updated** `bunsen-core` to latest version.

# 0.26.0 (2017-05-08)
**Updated** bunsen-core version to support conditional properties in arrays.

# 0.25.0 (2017-05-04)
**Updated** `bunsen-core` dependency to 0.28.0

# 0.24.4 (2017-05-04)

* **Updated** bunsen-core dependency to fix an issue with files being erroneously pruned from form values


# 0.24.3 (2017-05-04)

* **Upgraded** `bunsen-core` to latest version.

# 0.24.2 (2017-05-04)

* **Fixed** publish to be based on `6.9.1` node and not `stable` (which has moved to `7.10.0`)


# 0.24.1 (2017-05-04)

* **Updated** `bunsen-core` to pick up [this fix](https://github.com/ciena-blueplanet/bunsen-core/pull/86)


# 0.24.0 (2017-03-30)
* now includes bunsen-core 0.27.0, which provides `width` support for selects


# 0.23.1 (2017-03-22)

* **Upgraded** `bunsen-core` to version `0.26.1`.

# 0.23.0 (2017-03-22)

* **Replaced** blueprints with npm dependencies.

# 0.22.0
- updated bunsen-core


# 0.21.1

**Updated** bunsen-core which includes a fix for model conditionals.


# 0.21.0

* **Replaced** bower dependencies with node dependencies.
* **Updated** `ember-lodash-shim` to version `2.0.0` which shaves over 150 KB off of the production build.


# 0.20.0

* **Upgraded** `bunsen-core` to support spread options for renderers.


# 0.19.1

* **Added** `.pr-bumper.json` file to fix build publishing by disabling dependency snapshots.


# 0.19.0

* **Changed** `bunsen-core` from a blueprint installation to a direct dependency so consumers don't have to manage it's version on top of this addon.


# 0.18.0

* **Added** `ember-lodash-shim` configuration to optimize build to only include necessary `lodash` methods.


# 0.17.1

* Updated `bunsen-core` blueprint to 0.22.1


# 0.17.0

* **Upgraded** `bunsen-core` to latest version for non-Ember Data driven API selects.


# 0.16.2

* **Upgraded** `bunsen-core` to latest version to fix issues with primitive arrays.


# 0.16.1

* **Upgraded** to test against Ember 2.11.


# 0.16.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 0.15.2

* **Updated** `bunsen-core` to latest version.


# 0.15.1

* **Updated** `bunsen-core` to latest version.


# 0.15.0

* **Upgraded** `bunsen-core` to latest version.


# 0.14.0

* **Upgraded** to latest `ember-z-schema`/`z-schema` and `ember-validator-shim`/`validator`.



# 0.13.1

* **Upgraded** to latest `bunsen-core` which fixes `ipv6-interface` format.



# 0.13.0

* **Added** new formats: `ipv6-interface`, `ipv6-multicast`, and `ipv6-prefix`.


# 0.12.3

* Updates `bunsen-core`



# 0.12.2

* **Updated** `bunsen-core`.


# 0.12.1

* **Updated** `bunsen-core` which brings in `computePatch`


# 0.12.0

* **Added** new `forceValidation` argument to `validate` action to allow consumer to force re-validation when the
value is the same.


# 0.11.0

* **Upgraded** `bunsen-core` to latest version for better validation and new `hideLabel` cell option.



# 0.10.8

* **Fixed** `parseVariables()` to return correct data type.


# 0.10.7

* **Fixed** validation bug where cell's `model` wasn't being applied to it's children.


# 0.10.6

* **Upgraded** `bunsen-core` to latest.



# 0.10.5

* **Upgraded** `bunsen-core` to latest.



# 0.10.4

* Updating to version of `bunsen-core` that will allow more types in the select data options.


# 0.10.3

* **Fixed** issue around `hasValidQuery` returning true even when query was invalid.



# 0.10.2

* **Fixed** `populateQuery()` to not throw error.



# 0.10.1

* **Fixed** utility methods not to be less brittle and not throw an error when query isn't present.



# 0.10.0

* **Upgraded** to latest `bunsen-core` to get new MAC address custom formats and `modelType` validation for select
renderers.



# 0.9.3

* **Fixed** issue with nested cells.


# 0.9.2

* **Upgraded** to latest version of `bunsen-core`.



# 0.9.1

* Fixes `properties: undefined` bug in `evaluate`


# 0.9.0

* Upgrading to `bunsen-core`@0.13.0 which eliminates some unnecessary deep cloning and adds change sets.



# 0.8.3

* **Upgrade** to latest `bunsen-core` which adds new `clearable` option for cells.



# 0.8.2

* **Fixed** bug where `label` was being dropped from `rootContainer` from v1 view being converted to v2.



# 0.8.1

* **Upgraded** `bunsen-core` to latest version to address a few bugs.



# 0.8.0

* **Added** missing dependency.
* **Updated** dependencies to latest versions.


# 0.7.11
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.10

* Consume latest `bunsen-core`.



# 0.7.9
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.7.0

* **Added** tests for new formats: `ip-address` and `ipv6-address`.
* **Fixed** build by updating dependencies and fixing tests.



# 0.6.26
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.25
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.24
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.23
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.22
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.21
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.20
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.19
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.18
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.17
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.16
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.15
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.14
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.13
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.12
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.11
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.10
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.9
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.6.1

* **Upgraded** to latest `bunsen-core` which fixes a bug with cells that define `children` but not `model` or
`extends`.



# 0.6.0

* **Upgrade** to latest dependencies which includes addition of `seamless-immutable`.



# 0.5.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.5.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.5.0

* **Upgraded** to `lodash` version 4.x.



# 0.4.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.4.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.4.0

* Updated to latest versions of dependencies.



# 0.3.0

* **Updated** to latest `bunsen-core` which uses version 2 of the view schema.



# 0.2.0

* **Upgraded** `bunsen-core` to latest version to include Redux actions and reducer.


# 0.1.0

* **Added** tests.
* **Updated** dependencies to latest versions.


# 0.0.2

* **Fixed** deploy.


# 0.0.1

* Implement functionality.

# 0.0.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.0.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.0.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.0.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`
