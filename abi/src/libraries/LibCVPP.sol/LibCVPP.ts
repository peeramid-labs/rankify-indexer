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
  },
  {
    inputs: [ { internalType: 'string', name: 'message', type: 'string' } ],
    name: 'invalidConfiguration',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'digest', type: 'bytes32' },
      { internalType: 'string', name: 'message', type: 'string' }
    ],
    name: 'invalidECDSARecoverSigner',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'string', name: 'parameter', type: 'string' },
      { internalType: 'uint256', name: 'arg', type: 'uint256' },
      { internalType: 'uint256', name: 'arg2', type: 'uint256' }
    ],
    name: 'quadraticVotingError',
    type: 'error'
  }
] as const; export default abi;