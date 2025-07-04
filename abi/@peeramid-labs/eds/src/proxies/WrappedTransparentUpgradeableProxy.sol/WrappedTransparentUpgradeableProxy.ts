export const abi = [
  {
    inputs: [
      { internalType: 'address', name: '_logic', type: 'address' },
      { internalType: 'address', name: 'hook', type: 'address' },
      { internalType: 'address', name: 'upgrader', type: 'address' },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
      { internalType: 'bytes', name: '_middlewareData', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [ { internalType: 'address', name: 'target', type: 'address' } ],
    name: 'AddressEmptyCode',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'admin', type: 'address' } ],
    name: 'ERC1967InvalidAdmin',
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
  { inputs: [], name: 'ERC1967NonPayable', type: 'error' },
  { inputs: [], name: 'FailedCall', type: 'error' },
  { inputs: [], name: 'ProxyDeniedAdminAccess', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address'
      }
    ],
    name: 'AdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  { stateMutability: 'payable', type: 'fallback' }
] as const; export default abi;