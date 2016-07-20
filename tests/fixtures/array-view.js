export default {
  cellDefinitions: {
    addresses: {
      children: [
        {
          model: 'street'
        },
        {
          model: 'city'
        },
        {
          model: 'state'
        },
        {
          model: 'zip'
        }
      ]
    },
    main: {
      children: [
        {
          model: 'name',
          extends: 'name'
        },
        {
          model: 'addresses',
          arrayOptions: {
            itemCell: {
              extends: 'addresses'
            }
          }
        }
      ]
    },
    name: {
      children: [
        {
          model: 'first'
        },
        {
          model: 'last'
        }
      ]
    }
  },
  cells: [
    {
      label: 'Main',
      extends: 'main'
    }
  ],
  type: 'form',
  version: '2.0'
}
