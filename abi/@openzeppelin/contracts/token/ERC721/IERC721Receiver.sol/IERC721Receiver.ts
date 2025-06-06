export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'onERC721Received',
    outputs: [ { internalType: 'bytes4', name: '', type: 'bytes4' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;