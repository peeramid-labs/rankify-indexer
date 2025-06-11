export const abi = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    inputs: [
      { internalType: 'address', name: 'distributor', type: 'address' },
      { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
      { internalType: 'string', name: 'interfaceName', type: 'string' }
    ],
    name: 'ERC165CheckFailed',
    type: 'error'
  },
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  { inputs: [], name: 'NotInitializing', type: 'error' },
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
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'bytes', name: '', type: 'bytes' },
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
      { internalType: 'bytes', name: '', type: 'bytes' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'beforeCall',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
          {
            internalType: 'address[]',
            name: 'disallowedAddresses',
            type: 'address[]'
          },
          {
            internalType: 'bool',
            name: 'distributionComponentsOnly',
            type: 'bool'
          }
        ],
        internalType: 'struct SimpleAccessManager.SimpleAccessManagerInitializer[]',
        name: 'methodSettings',
        type: 'tuple[]'
      },
      { internalType: 'address', name: 'target', type: 'address' },
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' } ],
    name: 'supportsInterface',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;