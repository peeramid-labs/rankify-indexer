export const abi = [
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  { inputs: [], name: 'NotInitializing', type: 'error' },
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
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'version', type: 'string' },
      {
        components: [
          {
            internalType: 'address',
            name: 'rewardToken',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'principalCost',
            type: 'uint256'
          },
          {
            internalType: 'uint96',
            name: 'principalTimeConstant',
            type: 'uint96'
          },
          {
            internalType: 'uint256',
            name: 'minimumParticipantsInCircle',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'paymentToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'beneficiary',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'derivedToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'proposalIntegrityVerifier',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon5',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon6',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poseidon2',
            type: 'address'
          }
        ],
        internalType: 'struct RankifyInstanceInit.contractInitializer',
        name: 'initData',
        type: 'tuple'
      }
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;