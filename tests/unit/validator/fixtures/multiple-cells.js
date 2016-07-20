export default {
  cellDefinitions: {
    alias: {
      children: [
        {model: 'alias'}
      ]
    },
    name: {
      children: [
        {model: 'firstName'},
        {model: 'lastName'}
      ]
    }
  },
  cells: [
    {label: 'Name', extends: 'name'},
    {label: 'Alias', extends: 'alias'}
  ],
  type: 'form',
  version: '2.0'
}
