export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'distributor', type: 'address' },
      { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
      { internalType: 'string', name: 'interfaceName', type: 'string' }
    ],
    name: 'ERC165CheckFailed',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'target', type: 'address' }
    ],
    name: 'OnlyTargetAllowed',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' }
    ],
    name: 'disallowedAddress',
    type: 'error'
  }
] as const; export default abi;