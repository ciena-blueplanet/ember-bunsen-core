export default {
  cellDefinitions: {
    main: {
      children: [
        {model: 'firstName'},
        {model: 'lastName'},
        {
          model: 'alias',
          transforms: {
            read: [
              {
                from: '@kernelthekat',
                to: 'Cutest Cat Ever!'
              }
            ],
            write: [
              {
                from: 'Cute Cat',
                to: '@kernelthekat'
              }
            ]
          }
        }
      ]
    }
  },
  cells: [{label: 'Main', extends: 'main'}],
  type: 'form',
  version: '2.0'
}
