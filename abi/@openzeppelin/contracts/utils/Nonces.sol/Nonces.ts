export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      {
        internalType: 'uint256',
        name: 'currentNonce',
        type: 'uint256'
      }
    ],
    name: 'InvalidAccountNonce',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'owner', type: 'address' } ],
    name: 'nonces',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;