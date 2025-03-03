export const abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'trustedForwarder',
            type: 'address'
          },
          { internalType: 'string', name: 'daoURI', type: 'string' },
          { internalType: 'string', name: 'subdomain', type: 'string' },
          { internalType: 'bytes', name: 'metadata', type: 'bytes' }
        ],
        internalType: 'struct IDAOFactory.DAOSettings',
        name: 'daoSettings',
        type: 'tuple'
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint8',
                    name: 'release',
                    type: 'uint8'
                  },
                  {
                    internalType: 'uint16',
                    name: 'build',
                    type: 'uint16'
                  }
                ],
                internalType: 'struct Tag',
                name: 'versionTag',
                type: 'tuple'
              },
              {
                internalType: 'contract IPluginRepo',
                name: 'pluginSetupRepo',
                type: 'address'
              }
            ],
            internalType: 'struct IDAOFactory.PluginSetupRef',
            name: 'pluginSetupRef',
            type: 'tuple'
          },
          { internalType: 'bytes', name: 'data', type: 'bytes' }
        ],
        internalType: 'struct IDAOFactory.PluginSettings[]',
        name: 'pluginSettings',
        type: 'tuple[]'
      }
    ],
    name: 'createDao',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;