export const abi = [
  {
    inputs: [
      { internalType: 'uint256[]', name: 'arr', type: 'uint256[]' },
      { internalType: 'int256', name: 'left', type: 'int256' },
      { internalType: 'int256', name: 'right', type: 'int256' }
    ],
    name: 'quickSort',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'participants',
        type: 'address[]'
      },
      { internalType: 'uint256[]', name: 'scores', type: 'uint256[]' },
      { internalType: 'int256', name: 'left', type: 'int256' },
      { internalType: 'int256', name: 'right', type: 'int256' }
    ],
    name: 'quickSort',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;