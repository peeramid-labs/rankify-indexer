export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'distributor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'instances',
        type: 'address[]'
      }
    ],
    name: 'Distributed',
    type: 'event'
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'get',
    outputs: [
      { internalType: 'address[]', name: 'sources', type: 'address[]' },
      {
        internalType: 'bytes32',
        name: 'distributionName',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'distributionVersion',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes', name: 'data', type: 'bytes' } ],
    name: 'instantiate',
    outputs: [
      {
        internalType: 'address[]',
        name: 'instances',
        type: 'address[]'
      },
      {
        internalType: 'bytes32',
        name: 'distributionName',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'distributionVersion',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;