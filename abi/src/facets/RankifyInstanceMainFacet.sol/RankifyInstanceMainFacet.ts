export const abi = [
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'ErrorCannotForceEndGame',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      {
        internalType: 'enum IRankifyInstance.ProposingEndStatus',
        name: 'status',
        type: 'uint8'
      }
    ],
    name: 'ErrorProposingStageEndFailed',
    type: 'error'
  },
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
  { inputs: [], name: 'zeroValue', type: 'error' },
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
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
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
            components: [
              {
                internalType: 'address',
                name: 'contractAddress',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'contractId',
                type: 'uint256'
              },
              {
                internalType: 'enum LibCoinVending.ContractTypes',
                name: 'contractType',
                type: 'uint8'
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                name: 'contractRequirement',
                type: 'tuple'
              }
            ],
            internalType: 'struct LibCoinVending.configSmartRequirement[]',
            name: 'contracts',
            type: 'tuple[]'
          }
        ],
        indexed: false,
        internalType: 'struct LibCoinVending.ConfigPosition',
        name: 'config',
        type: 'tuple'
      }
    ],
    name: 'RequirementsConfigured',
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
        name: 'winner',
        type: 'address'
      }
    ],
    name: 'StaleGameEnded',
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
        name: 'roundNumber',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'players',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'scores',
        type: 'uint256[]'
      }
    ],
    name: 'VotingStageEnded',
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
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'canEndProposingStage',
    outputs: [
      {
        internalType: 'enum IRankifyInstance.ProposingEndStatus',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'canEndVotingStage',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'canStartGame',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'cancelGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'gameRank',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minPlayerCnt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxPlayerCnt',
            type: 'uint256'
          },
          { internalType: 'uint96', name: 'nTurns', type: 'uint96' },
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
          {
            internalType: 'uint128',
            name: 'minGameTime',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'timePerTurn',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'timeToJoin',
            type: 'uint128'
          },
          { internalType: 'string', name: 'metadata', type: 'string' },
          {
            internalType: 'uint256',
            name: 'votePhaseDuration',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'proposingPhaseDuration',
            type: 'uint256'
          }
        ],
        internalType: 'struct IRankifyInstance.NewGameParamsInput',
        name: 'params',
        type: 'tuple'
      },
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
            components: [
              {
                internalType: 'address',
                name: 'contractAddress',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'contractId',
                type: 'uint256'
              },
              {
                internalType: 'enum LibCoinVending.ContractTypes',
                name: 'contractType',
                type: 'uint8'
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                name: 'contractRequirement',
                type: 'tuple'
              }
            ],
            internalType: 'struct LibCoinVending.configSmartRequirement[]',
            name: 'contracts',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct LibCoinVending.ConfigPosition',
        name: 'requirements',
        type: 'tuple'
      }
    ],
    name: 'createAndOpenGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'gameRank',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minPlayerCnt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxPlayerCnt',
            type: 'uint256'
          },
          { internalType: 'uint96', name: 'nTurns', type: 'uint96' },
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
          {
            internalType: 'uint128',
            name: 'minGameTime',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'timePerTurn',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'timeToJoin',
            type: 'uint128'
          },
          { internalType: 'string', name: 'metadata', type: 'string' },
          {
            internalType: 'uint256',
            name: 'votePhaseDuration',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'proposingPhaseDuration',
            type: 'uint256'
          }
        ],
        internalType: 'struct IRankifyInstance.NewGameParamsInput',
        name: 'params',
        type: 'tuple'
      }
    ],
    name: 'createGame',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint128', name: 'minGameTime', type: 'uint128' }
    ],
    name: 'estimateGamePrice',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'rankId', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'exitRankToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'gameCreator',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'gameWinner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getContractState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'numGames',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'contractInitialized',
            type: 'bool'
          },
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
        internalType: 'struct LibRankify.InstanceState',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getGM',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getGameRank',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getPlayerVotedArray',
    outputs: [ { internalType: 'bool[]', name: '', type: 'bool[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getPlayers',
    outputs: [ { internalType: 'address[]', name: '', type: 'address[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'player', type: 'address' } ],
    name: 'getPlayersGames',
    outputs: [ { internalType: 'uint256[]', name: '', type: 'uint256[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getPlayersMoved',
    outputs: [
      { internalType: 'bool[]', name: '', type: 'bool[]' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getScores',
    outputs: [
      { internalType: 'address[]', name: '', type: 'address[]' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'getTurn',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'player', type: 'address' }
    ],
    name: 'isActive',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isGameOver',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isLastTurn',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isOvertime',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'player', type: 'address' }
    ],
    name: 'isPlayerInGame',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'player', type: 'address' }
    ],
    name: 'isPlayerTurnComplete',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isProposingStage',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isRegistrationOpen',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'isVotingStage',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      {
        internalType: 'bytes',
        name: 'gameMasterSignature',
        type: 'bytes'
      },
      {
        internalType: 'bytes32',
        name: 'gmCommitment',
        type: 'bytes32'
      },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'string', name: 'voterPubKey', type: 'string' }
    ],
    name: 'joinGame',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'leaveGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'address', name: 'player', type: 'address' }
    ],
    name: 'madeMove',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC1155BatchReceived',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC1155Received',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC721Received',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'openRegistration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
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
            components: [
              {
                internalType: 'address',
                name: 'contractAddress',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'contractId',
                type: 'uint256'
              },
              {
                internalType: 'enum LibCoinVending.ContractTypes',
                name: 'contractType',
                type: 'uint8'
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                      {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                      },
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
                name: 'contractRequirement',
                type: 'tuple'
              }
            ],
            internalType: 'struct LibCoinVending.configSmartRequirement[]',
            name: 'contracts',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct LibCoinVending.ConfigPosition',
        name: 'config',
        type: 'tuple'
      }
    ],
    name: 'setJoinRequirements',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'gameId', type: 'uint256' } ],
    name: 'startGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;