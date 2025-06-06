export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_contractOwner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_diamondCutFacet',
        type: 'address'
      }
    ],
    stateMutability: 'payable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address'
          },
          {
            internalType: 'enum IDiamondCut.FacetCutAction',
            name: 'action',
            type: 'uint8'
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]'
          }
        ],
        indexed: false,
        internalType: 'struct IDiamondCut.FacetCut[]',
        name: '_diamondCut',
        type: 'tuple[]'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_init',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_calldata',
        type: 'bytes'
      }
    ],
    name: 'DiamondCut',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' }
] as const; export default abi;