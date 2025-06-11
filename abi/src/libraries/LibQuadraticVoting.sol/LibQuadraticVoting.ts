export const abi = [
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
    inputs: [
      { internalType: 'uint256', name: 'voteCredits', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'minExpectedVoteItems',
        type: 'uint256'
      }
    ],
    name: 'precomputeValues',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'voteCredits',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxQuadraticPoints',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minQuadraticPositions',
            type: 'uint256'
          }
        ],
        internalType: 'struct LibQuadraticVoting.qVotingStruct',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'voteCredits',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxQuadraticPoints',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minQuadraticPositions',
            type: 'uint256'
          }
        ],
        internalType: 'struct LibQuadraticVoting.qVotingStruct',
        name: 'q',
        type: 'tuple'
      },
      {
        internalType: 'uint256[][]',
        name: 'tally',
        type: 'uint256[][]'
      },
      { internalType: 'bool[]', name: 'isActive', type: 'bool[]' }
    ],
    name: 'tallyVotes',
    outputs: [ { internalType: 'uint256[]', name: '', type: 'uint256[]' } ],
    stateMutability: 'pure',
    type: 'function'
  }
] as const; export default abi;