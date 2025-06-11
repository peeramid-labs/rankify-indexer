export const abi = [
  {
    inputs: [ { internalType: 'bytes32', name: 'position', type: 'bytes32' } ],
    name: 'getPosition',
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
            type: 'LibCoinVending.ContractTypes[]'
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
      { internalType: 'bytes32', name: 'position', type: 'bytes32' },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address'
      },
      { internalType: 'uint256', name: 'contractId', type: 'uint256' },
      {
        internalType: 'enum LibCoinVending.ContractTypes',
        name: 'contractType',
        type: 'LibCoinVending.ContractTypes'
      }
    ],
    name: 'getPositionByContract',
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