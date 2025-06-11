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
    name: 'Joined',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'LastTurn', type: 'event' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'winner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'rewardClaimed',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'participants',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'leaderboard',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'scores',
        type: 'uint256[]'
      }
    ],
    name: 'Over',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'OverTime', type: 'event' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'participant',
        type: 'address'
      }
    ],
    name: 'ParticipantLeft',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: true,
        internalType: 'uint256',
        name: 'score',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'proposal',
        type: 'string'
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
        internalType: 'uint256',
        name: 'commitment',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'encryptedProposal',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'gmSignature',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'proposerSignature',
        type: 'bytes'
      }
    ],
    name: 'ProposalSubmitted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'RegistrationOpen',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
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
  { anonymous: false, inputs: [], name: 'ThreadClosed', type: 'event' },
  {
    anonymous: false,
    inputs: [],
    name: 'ThreadStarted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'turn',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'participants',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'scores',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'newProposals',
        type: 'string[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'proposerIndices',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'uint256[][]',
        name: 'votes',
        type: 'uint256[][]'
      }
    ],
    name: 'TurnEnded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'turn',
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
        internalType: 'string',
        name: 'sealedBallotId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'gmSignature',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'voterSignature',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'ballotHash',
        type: 'bytes32'
      }
    ],
    name: 'VoteSubmitted',
    type: 'event'
  },
  {
    inputs: [],
    name: 'canEndTurn',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'canStartThread',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cancelThread',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[][]',
        name: 'votes',
        type: 'uint256[][]'
      },
      {
        components: [
          {
            internalType: 'string[]',
            name: 'proposals',
            type: 'string[]'
          },
          { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
          {
            internalType: 'uint256[2][2]',
            name: 'b',
            type: 'uint256[2][2]'
          },
          { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
          {
            internalType: 'uint256',
            name: 'permutationCommitment',
            type: 'uint256'
          }
        ],
        internalType: 'struct IThread.BatchProposalReveal',
        name: 'newProposals',
        type: 'tuple'
      },
      {
        internalType: 'uint256[]',
        name: 'permutation',
        type: 'uint256[]'
      },
      { internalType: 'uint256', name: 'shuffleSalt', type: 'uint256' }
    ],
    name: 'endTurn',
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
            internalType: 'uint256',
            name: 'startedAt',
            type: 'uint256'
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
            name: 'numCommitments',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numVotesThisTurn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numVotesPrevTurn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numPrevProposals',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'registrationOpenAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numOngoingProposals',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'permutationCommitment',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numActiveParticipants',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'numParticipantsMadeMove',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'createdBy',
            type: 'address'
          },
          { internalType: 'address', name: 'winner', type: 'address' },
          {
            internalType: 'bool',
            name: 'hasClaimedReward',
            type: 'bool'
          },
          { internalType: 'bool', name: 'hasStarted', type: 'bool' },
          { internalType: 'bool', name: 'hasEnded', type: 'bool' },
          { internalType: 'bool', name: 'isOvertime', type: 'bool' },
          { internalType: 'string', name: 'metadata', type: 'string' },
          {
            internalType: 'contract IFellowship',
            name: 'fellowship',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'timePerTurn',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'maxParticipantCnt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'minParticipantCnt',
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
                      {
                        internalType: 'uint256',
                        name: 'pay',
                        type: 'uint256'
                      },
                      {
                        internalType: 'uint256',
                        name: 'bet',
                        type: 'uint256'
                      }
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
                name: 'stakes',
                type: 'tuple'
              },
              {
                internalType: 'contract IFellowship',
                name: 'fellowship',
                type: 'address'
              }
            ],
            internalType: 'struct LibCVPP.Settings',
            name: 'settings',
            type: 'tuple'
          }
        ],
        internalType: 'struct LibCVPP.ThreadStateReturn',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCreator',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGM',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getParticipants',
    outputs: [ { internalType: 'address[]', name: '', type: 'address[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getParticipantsMoved',
    outputs: [
      { internalType: 'bool[]', name: '', type: 'bool[]' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getScores',
    outputs: [
      { internalType: 'address[]', name: '', type: 'address[]' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTurn',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getVotedArray',
    outputs: [ { internalType: 'bool[]', name: '', type: 'bool[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'version', type: 'string' },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timePerTurn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxParticipantCnt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minParticipantCnt',
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
                  {
                    internalType: 'uint256',
                    name: 'pay',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'bet',
                    type: 'uint256'
                  }
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
            name: 'stakes',
            type: 'tuple'
          },
          {
            internalType: 'contract IFellowship',
            name: 'fellowship',
            type: 'address'
          }
        ],
        internalType: 'struct LibCVPP.Settings',
        name: 'settings',
        type: 'tuple'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'isActive',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isLastTurn',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isOver',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isOvertime',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'isParticipantTurnComplete',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isRegistrationOpen',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'leaveThread',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'permutationCommitment',
        type: 'uint256'
      }
    ],
    name: 'startThread',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'encryptedProposal',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'commitment',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'proposer',
            type: 'address'
          },
          { internalType: 'bytes', name: 'gmSignature', type: 'bytes' },
          {
            internalType: 'bytes',
            name: 'proposerSignature',
            type: 'bytes'
          }
        ],
        internalType: 'struct IThread.ProposalParams',
        name: 'params',
        type: 'tuple'
      }
    ],
    name: 'submitProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sealedBallotId',
        type: 'string'
      },
      { internalType: 'address', name: 'voter', type: 'address' },
      { internalType: 'bytes', name: 'gmSignature', type: 'bytes' },
      { internalType: 'bytes', name: 'voterSignature', type: 'bytes' },
      { internalType: 'bytes32', name: 'ballotHash', type: 'bytes32' }
    ],
    name: 'submitVote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'winner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;