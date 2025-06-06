export const abi = [
  {
    inputs: [
      { internalType: 'bytes32', name: 'id', type: 'bytes32' },
      { internalType: 'address', name: 'source', type: 'address' }
    ],
    name: 'alreadyExists',
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
    name: 'Indexed',
    type: 'event'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'get',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'container', type: 'address' } ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;