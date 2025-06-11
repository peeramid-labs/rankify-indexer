export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256[24]',
        name: 'proofArr_',
        type: 'uint256[24]'
      },
      {
        internalType: 'uint256[32]',
        name: 'publicSignals_',
        type: 'uint256[32]'
      }
    ],
    name: 'verifyProof',
    outputs: [ { internalType: 'bool', name: 'verified_', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;