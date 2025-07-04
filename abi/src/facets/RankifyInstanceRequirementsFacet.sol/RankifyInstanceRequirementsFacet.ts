export const abi = [
  {
    inputs: [],
    name: 'getCommonParams',
    outputs: [
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
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getGameState',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'rank', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'minGameTime',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'createdBy',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'numCommitments',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numVotes',
            type: 'uint256'
          },
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
            name: 'voting',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'currentTurn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'turnStartedAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'registrationOpenAt',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'hasStarted', type: 'bool' },
          { internalType: 'bool', name: 'hasEnded', type: 'bool' },
          {
            internalType: 'uint256',
            name: 'numPlayersMadeMove',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numActivePlayers',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'isOvertime', type: 'bool' },
          {
            internalType: 'uint256',
            name: 'timePerTurn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxPlayerCnt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minPlayerCnt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'timeToJoin',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxTurns',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'voteCredits',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'gameMaster',
            type: 'address'
          },
          { internalType: 'string', name: 'metadata', type: 'string' },
          { internalType: 'uint256', name: 'phase', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'votePhaseDuration',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'proposingPhaseDuration',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'phaseStartedAt',
            type: 'uint256'
          }
        ],
        internalType: 'struct IRankifyInstance.GameStateOutput',
        name: 'state',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getJoinRequirements',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'have',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'lock',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'burn',
                type: 'uint256'
              },
              { internalType: 'uint256', name: 'pay', type: 'uint256' },
              { internalType: 'uint256', name: 'bet', type: 'uint256' }
            ],
            internalType: 'struct LibCoinVending.NumericCondition',
            name: 'ethValues',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'timesRefunded',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'timesReleased',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'timesFunded',
            type: 'uint256'
          },
          {
            internalType: 'address[]',
            name: 'contractAddresses',
            type: 'address[]'
          },
          {
            internalType: 'uint256[]',
            name: 'contractIds',
            type: 'uint256[]'
          },
          {
            internalType: 'enum LibCoinVending.ContractTypes[]',
            name: 'contractTypes',
            type: 'uint8[]'
          },
          { internalType: 'bool', name: '_isConfigured', type: 'bool' }
        ],
        internalType: 'struct LibCoinVending.ConditionReturn',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address'
      },
      { internalType: 'uint256', name: 'contractId', type: 'uint256' },
      {
        internalType: 'enum LibCoinVending.ContractTypes',
        name: 'contractType',
        type: 'uint8'
      }
    ],
    name: 'getJoinRequirementsByToken',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct LibCoinVending.TransactionProperties',
            name: 'have',
            type: 'tuple'
          },
          {
            components: [
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct LibCoinVending.TransactionProperties',
            name: 'lock',
            type: 'tuple'
          },
          {
            components: [
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct LibCoinVending.TransactionProperties',
            name: 'burn',
            type: 'tuple'
          },
          {
            components: [
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct LibCoinVending.TransactionProperties',
            name: 'pay',
            type: 'tuple'
          },
          {
            components: [
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct LibCoinVending.TransactionProperties',
            name: 'bet',
            type: 'tuple'
          }
        ],
        internalType: 'struct LibCoinVending.ContractCondition',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;