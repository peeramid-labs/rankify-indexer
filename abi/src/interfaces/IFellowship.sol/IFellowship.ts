export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'rankReceiver',
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
        name: 'mintedTokens',
        type: 'uint256'
      }
    ],
    name: 'RankTokenExited',
    type: 'event'
  },
  {
    inputs: [ { internalType: 'address', name: 'winner', type: 'address' } ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getContractState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'principalCost',
            type: 'uint128'
          },
          {
            internalType: 'uint256',
            name: 'principalTime',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'competenceAsset',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'rootAsset',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'derivedAsset',
            type: 'address'
          },
          {
            internalType: 'uint32',
            name: 'minTournamentSize',
            type: 'uint32'
          },
          { internalType: 'uint64', name: 'exitRate', type: 'uint64' },
          {
            internalType: 'address[]',
            name: 'receivers',
            type: 'address[]'
          },
          {
            internalType: 'uint256[]',
            name: 'receiverShares',
            type: 'uint256[]'
          }
        ],
        internalType: 'struct IFellowship.State',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
    name: 'getRank',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'lockRank',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'unlockRank',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;