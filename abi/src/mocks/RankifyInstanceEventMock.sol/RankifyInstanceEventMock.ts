export const abi = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      }
    ],
    name: 'GameClosed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address[]',
        name: 'players',
        type: 'address[]'
      },
      {
        indexed: true,
        internalType: 'uint256[]',
        name: 'scores',
        type: 'uint256[]'
      }
    ],
    name: 'GameOver',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      }
    ],
    name: 'GameStarted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      }
    ],
    name: 'LastTurn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      }
    ],
    name: 'OverTime',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'participant',
        type: 'address'
      }
    ],
    name: 'PlayerJoined',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address'
      }
    ],
    name: 'PlayerLeft',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'turn',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'proposalHash',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'proposal',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'score',
        type: 'uint256'
      }
    ],
    name: 'ProposalScore',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'turn',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'proposer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'commitment',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'proposalEncryptedByGM',
        type: 'string'
      }
    ],
    name: 'ProposalSubmitted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameid',
        type: 'uint256'
      }
    ],
    name: 'RegistrationOpen',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'turn',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'votesHidden',
        type: 'string'
      }
    ],
    name: 'VoteSubmitted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'gm',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'rank',
        type: 'uint256'
      }
    ],
    name: 'gameCreated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'fireAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;