export const abi = [
  {
    inputs: [ { internalType: 'address', name: 'admin', type: 'address' } ],
    name: 'ERC1967InvalidAdmin',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'beacon', type: 'address' } ],
    name: 'ERC1967InvalidBeacon',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error'
  },
  { inputs: [], name: 'ERC1967NonPayable', type: 'error' }
] as const; export default abi;