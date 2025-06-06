export const abi = [
  {
    inputs: [
      { internalType: 'bytes32', name: 'id', type: 'bytes32' },
      { internalType: 'string', name: 'reason', type: 'string' }
    ],
    name: 'initializationFailed',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'container',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'codeHash',
        type: 'bytes32'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
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
      },
      { internalType: 'bytes', name: 'args', type: 'bytes' }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;