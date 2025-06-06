export const abi = [
  { inputs: [], name: 'ECDSAInvalidSignature', type: 'error' },
  {
    inputs: [ { internalType: 'uint256', name: 'length', type: 'uint256' } ],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 's', type: 'bytes32' } ],
    name: 'ECDSAInvalidSignatureS',
    type: 'error'
  }
] as const; export default abi;