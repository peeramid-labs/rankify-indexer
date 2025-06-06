export const abi = [
  {
    inputs: [
      { internalType: 'bytes32', name: 'hash', type: 'bytes32' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' }
    ],
    name: 'isValidSignature',
    outputs: [ { internalType: 'bytes4', name: 'magicValue', type: 'bytes4' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;