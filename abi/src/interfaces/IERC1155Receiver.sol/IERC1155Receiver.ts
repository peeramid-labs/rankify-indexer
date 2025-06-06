export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'values', type: 'uint256[]' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'onERC1155BatchReceived',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'onERC1155Received',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;