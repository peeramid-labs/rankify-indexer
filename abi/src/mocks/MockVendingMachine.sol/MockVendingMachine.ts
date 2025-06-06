export const abi = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
  {
    inputs: [
      { internalType: 'bytes32', name: 'position', type: 'bytes32' },
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
        name: 'configuration',
        type: 'tuple'
      }
    ],
    name: 'createPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionName',
        type: 'bytes32'
      }
    ],
    name: 'fund',
    outputs: [],
    stateMutability: 'payable',
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
    inputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    name: 'participants',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionName',
        type: 'bytes32'
      },
      { internalType: 'address', name: 'to', type: 'address' }
    ],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionName',
        type: 'bytes32'
      }
    ],
    name: 'refundBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionName',
        type: 'bytes32'
      },
      { internalType: 'address', name: 'payee', type: 'address' },
      { internalType: 'address', name: 'beneficiary', type: 'address' }
    ],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionName',
        type: 'bytes32'
      },
      { internalType: 'address', name: 'payee', type: 'address' },
      { internalType: 'address', name: 'beneficiary', type: 'address' }
    ],
    name: 'releaseAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;