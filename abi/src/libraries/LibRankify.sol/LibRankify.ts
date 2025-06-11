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
  { inputs: [], name: 'RankNotSpecified', type: 'error' },
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
    inputs: [ { internalType: 'uint256', name: 'nTurns', type: 'uint256' } ],
    name: 'invalidTurnCount',
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
  },
  {
    inputs: [],
    name: '_PROPOSAL_PROOF_TYPEHASH',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: '_VOTE_PROOF_TYPEHASH',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: '_VOTE_SUBMIT_PROOF_TYPEHASH',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'a', type: 'string' },
      { internalType: 'string', name: 'b', type: 'string' }
    ],
    name: 'compareStrings',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'enforceGameExists',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'candidate', type: 'address' }
    ],
    name: 'enforceIsGM',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'candidate', type: 'address' }
    ],
    name: 'enforceIsGameCreator',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'enforceIsInitialized',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint128', name: 'minGameTime', type: 'uint128' },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'principalCost',
            type: 'uint256'
          },
          {
            internalType: 'uint96',
            name: 'principalTimeConstant',
            type: 'uint96'
          },
          {
            internalType: 'address',
            name: 'gamePaymentToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'rankTokenAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'beneficiary',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'minimumParticipantsInCircle',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'derivedToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'proposalIntegrityVerifier',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon5',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon6',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon2',
            type: 'address'
          }
        ],
        internalType: 'struct LibRankify.CommonParams',
        name: 'commonParams',
        type: 'tuple'
      }
    ],
    name: 'getGamePrice',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'pure',
    type: 'function'
  }
] as const; export default abi;