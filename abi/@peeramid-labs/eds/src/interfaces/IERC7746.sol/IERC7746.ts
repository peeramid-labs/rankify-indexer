export const abi = [
  {
    inputs: [
      { internalType: 'bytes', name: 'configuration', type: 'bytes' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
      {
        internalType: 'bytes',
        name: 'beforeCallResult',
        type: 'bytes'
      }
    ],
    name: 'afterCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'configuration', type: 'bytes' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'beforeCall',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;