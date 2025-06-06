export const abi = [
  {
    inputs: [],
    name: 'owner',
    outputs: [ { internalType: 'address', name: 'owner_', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: '_newOwner', type: 'address' } ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;