export default {
  cellDefinitions: {
    bar: {
      children: []
    },
    foo: {
      children: []
    }
  },
  cells: [
    {
      label: 'Foo',
      extends: 'foo'
    },
    {
      extends: 'bar'
    },
    {
      label: 'Baz',
      extends: 'baz'
    }
  ],
  type: 'form',
  version: '2.0'
}
