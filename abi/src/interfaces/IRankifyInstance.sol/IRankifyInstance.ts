export const abi = [
  {
    inputs: [
      { internalType: 'uint256', name: 'a', type: 'uint256' },
      { internalType: 'uint256', name: 'b', type: 'uint256' }
    ],
    name: 'NoDivisionReminderAllowed',
    type: 'error'
  },
  { inputs: [], name: 'RankNotSpecified', type: 'error' },
  {
    inputs: [ { internalType: 'uint256', name: 'nTurns', type: 'uint256' } ],
    name: 'invalidTurnCount',
    type: 'error'
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
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'participant',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'gmCommitment',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'voterPubKey',
        type: 'string'
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
        internalType: 'address',
        name: 'player',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rankId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toMint',
        type: 'uint256'
      }
    ],
    name: 'RankTokenExited',
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
    name: 'RegistrationOpen',
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
  }
] as const; export default abi;