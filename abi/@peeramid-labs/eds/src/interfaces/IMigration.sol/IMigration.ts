export const abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'instances',
        type: 'address[]'
      },
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'oldVersion',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'newVersion',
        type: 'tuple'
      },
      {
        internalType: 'contract IRepository',
        name: 'repository',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'distributorCalldata',
        type: 'bytes'
      },
      { internalType: 'bytes', name: 'userCalldata', type: 'bytes' }
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;