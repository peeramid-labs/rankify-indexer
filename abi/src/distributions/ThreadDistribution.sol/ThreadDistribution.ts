export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'thread', type: 'address' },
      {
        internalType: 'string',
        name: '_distributionName',
        type: 'string'
      },
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'version',
        type: 'tuple'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'codeId', type: 'bytes32' } ],
    name: 'CodeNotFoundInIndex',
    type: 'error'
  },
  { inputs: [], name: 'FailedDeployment', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'balance', type: 'uint256' },
      { internalType: 'uint256', name: 'needed', type: 'uint256' }
    ],
    name: 'InsufficientBalance',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'string', name: 'str', type: 'string' } ],
    name: 'StringTooLong',
    type: 'error'
  },
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
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'get',
    outputs: [
      { internalType: 'address[]', name: '', type: 'address[]' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    name: 'instantiate',
    outputs: [
      {
        internalType: 'address[]',
        name: 'instances',
        type: 'address[]'
      },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' } ],
    name: 'supportsInterface',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;