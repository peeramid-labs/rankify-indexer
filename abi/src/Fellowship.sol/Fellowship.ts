export const abi = [
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'principalCost',
        type: 'uint128'
      },
      {
        internalType: 'uint256',
        name: 'principalTime',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'competenceAsset',
        type: 'address'
      },
      { internalType: 'address', name: 'rootAsset', type: 'address' },
      {
        internalType: 'address',
        name: 'derivedAsset',
        type: 'address'
      },
      {
        internalType: 'uint32',
        name: 'minTournamentSize',
        type: 'uint32'
      },
      { internalType: 'uint64', name: 'exitRate', type: 'uint64' },
      {
        internalType: 'address[]',
        name: 'receivers',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'receiverShares',
        type: 'uint256[]'
      },
      { internalType: 'address', name: 'owner', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      }
    ],
    name: 'DisallowDistOnWhitelistedDistributor',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      }
    ],
    name: 'DistributionIsNotPermitted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'InvalidDistributor',
    type: 'error'
  },
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  {
    inputs: [ { internalType: 'address', name: 'target', type: 'address' } ],
    name: 'InvalidTarget',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'app', type: 'address' } ],
    name: 'NotAnApp',
    type: 'error'
  },
  { inputs: [], name: 'NotInitializing', type: 'error' },
  {
    inputs: [ { internalType: 'address', name: 'owner', type: 'address' } ],
    name: 'OwnableInvalidOwner',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'account', type: 'address' } ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error'
  },
  { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
  {
    inputs: [ { internalType: 'address', name: 'token', type: 'address' } ],
    name: 'SafeERC20FailedOperation',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'alreadyAllowed',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'migrationId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newVersion',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'userCalldata',
        type: 'bytes'
      }
    ],
    name: 'AppUpgraded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'tag',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newContract',
        type: 'address'
      }
    ],
    name: 'ContractInstalled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      }
    ],
    name: 'DistributionAllowed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      }
    ],
    name: 'DistributionDisallowed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'contract IDistributor',
        name: 'newDistributor',
        type: 'address'
      }
    ],
    name: 'DistributorChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'DistributorWhitelistRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'DistributorWhitelisted',
    type: 'event'
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'distributor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'args',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'contracts',
        type: 'address[]'
      }
    ],
    name: 'Installed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'tag',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'distributor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'args',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'contracts',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      }
    ],
    name: 'InstalledByTag',
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'rankReceiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rankId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mintedTokens',
        type: 'uint256'
      }
    ],
    name: 'RankTokenExited',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'tag',
        type: 'bytes32'
      }
    ],
    name: 'Uninstalled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'tag',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'component',
        type: 'address'
      }
    ],
    name: 'UninstalledComponent',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'layerConfig', type: 'bytes' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      { internalType: 'address', name: 'origin', type: 'address' },
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
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'string', name: 'tag', type: 'string' }
    ],
    name: 'allowDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'layerConfig', type: 'bytes' },
      { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      { internalType: 'address', name: 'origin', type: 'address' },
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
      { internalType: 'uint256', name: 'appId', type: 'uint256' },
      {
        internalType: 'contract IDistributor',
        name: 'newDistributor',
        type: 'address'
      },
      { internalType: 'bytes[]', name: 'appData', type: 'bytes[]' }
    ],
    name: 'changeDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rankReceiver',
        type: 'address'
      }
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'string', name: 'tag', type: 'string' }
    ],
    name: 'disallowDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
    name: 'distributorOf',
    outputs: [
      {
        internalType: 'contract IDistributor',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'duration', type: 'uint256' } ],
    name: 'estimateThreadPrice',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'getApp',
    outputs: [
      {
        components: [
          {
            internalType: 'address[]',
            name: 'contracts',
            type: 'address[]'
          },
          {
            internalType: 'address',
            name: 'middleware',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'middlewareData',
            type: 'bytes'
          }
        ],
        internalType: 'struct App',
        name: 'app',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
    name: 'getAppId',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAppsNum',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getContractState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'principalCost',
            type: 'uint128'
          },
          {
            internalType: 'uint256',
            name: 'principalTime',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'competenceAsset',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'rootAsset',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'derivedAsset',
            type: 'address'
          },
          {
            internalType: 'uint32',
            name: 'minTournamentSize',
            type: 'uint32'
          },
          { internalType: 'uint64', name: 'exitRate', type: 'uint64' },
          {
            internalType: 'address[]',
            name: 'receivers',
            type: 'address[]'
          },
          {
            internalType: 'uint256[]',
            name: 'receiverShares',
            type: 'uint256[]'
          }
        ],
        internalType: 'struct IFellowship.State',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
    name: 'getRank',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getWhitelistedDistributors',
    outputs: [ { internalType: 'address[]', name: '', type: 'address[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'principalCost',
        type: 'uint128'
      },
      {
        internalType: 'uint256',
        name: 'principalTime',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'competenceAsset',
        type: 'address'
      },
      { internalType: 'address', name: 'rootAsset', type: 'address' },
      {
        internalType: 'address',
        name: 'derivedAsset',
        type: 'address'
      },
      {
        internalType: 'uint32',
        name: 'minTournamentSize',
        type: 'uint32'
      },
      { internalType: 'uint64', name: 'exitRate', type: 'uint64' },
      {
        internalType: 'address[]',
        name: 'receivers',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'receiverShares',
        type: 'uint256[]'
      },
      { internalType: 'address', name: 'owner', type: 'address' }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'bytes', name: 'args', type: 'bytes' },
      { internalType: 'string', name: 'tag', type: 'string' }
    ],
    name: 'install',
    outputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
    name: 'isApp',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'isDistributor',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'lockRank',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'revokeWhitelistedDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'target',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'newOwner', type: 'address' } ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'uninstall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'participant', type: 'address' }
    ],
    name: 'unlockRank',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'appId', type: 'uint256' },
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' },
      { internalType: 'bytes', name: 'userCalldata', type: 'bytes' }
    ],
    name: 'upgradeApp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'whitelistDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IDistributor',
        name: 'distributor',
        type: 'address'
      }
    ],
    name: 'whitelistedDistributions',
    outputs: [ { internalType: 'bytes32[]', name: '', type: 'bytes32[]' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;