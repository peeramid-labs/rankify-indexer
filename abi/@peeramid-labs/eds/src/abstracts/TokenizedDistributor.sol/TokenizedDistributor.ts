export const abi = [
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'DistributionExists',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'DistributionNotFound',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'InitializerNotFound',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'instance', type: 'address' } ],
    name: 'InvalidInstance',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'repository', type: 'address' }
    ],
    name: 'InvalidRepository',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'string', name: 'version', type: 'string' }
    ],
    name: 'InvalidVersionRequested',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'repository', type: 'address' }
    ],
    name: 'RepositoryAlreadyExists',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      }
    ],
    name: 'UnversionedDistribution',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'string', name: 'version', type: 'string' }
    ],
    name: 'VersionOutdated',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'distribution',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'initializer',
        type: 'address'
      }
    ],
    name: 'DistributionAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32'
      }
    ],
    name: 'DistributionRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newInstanceId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'version',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'instances',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'args',
        type: 'bytes'
      }
    ],
    name: 'Instantiated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cost',
        type: 'uint256'
      }
    ],
    name: 'InstantiationCostChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        components: [
          {
            components: [
              { internalType: 'uint64', name: 'major', type: 'uint64' },
              { internalType: 'uint64', name: 'minor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'patch',
                type: 'uint128'
              }
            ],
            internalType: 'struct LibSemver.Version',
            name: 'version',
            type: 'tuple'
          },
          {
            internalType: 'enum LibSemver.requirements',
            name: 'requirement',
            type: 'uint8'
          }
        ],
        indexed: true,
        internalType: 'struct LibSemver.VersionRequirement',
        name: 'newRequirement',
        type: 'tuple'
      },
      {
        components: [
          {
            components: [
              { internalType: 'uint64', name: 'major', type: 'uint64' },
              { internalType: 'uint64', name: 'minor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'patch',
                type: 'uint128'
              }
            ],
            internalType: 'struct LibSemver.Version',
            name: 'version',
            type: 'tuple'
          },
          {
            internalType: 'enum LibSemver.requirements',
            name: 'requirement',
            type: 'uint8'
          }
        ],
        indexed: false,
        internalType: 'struct LibSemver.VersionRequirement',
        name: 'newRequirementData',
        type: 'tuple'
      }
    ],
    name: 'VersionChanged',
    type: 'event'
  },
  {
    inputs: [],
    name: '_beneficiary',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IRepository',
        name: 'repository',
        type: 'address'
      },
      { internalType: 'address', name: 'initializer', type: 'address' },
      {
        components: [
          {
            components: [
              { internalType: 'uint64', name: 'major', type: 'uint64' },
              { internalType: 'uint64', name: 'minor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'patch',
                type: 'uint128'
              }
            ],
            internalType: 'struct LibSemver.Version',
            name: 'version',
            type: 'tuple'
          },
          {
            internalType: 'enum LibSemver.requirements',
            name: 'requirement',
            type: 'uint8'
          }
        ],
        internalType: 'struct LibSemver.VersionRequirement',
        name: 'requirement',
        type: 'tuple'
      }
    ],
    name: 'addDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorId',
        type: 'bytes32'
      },
      { internalType: 'address', name: 'initializer', type: 'address' }
    ],
    name: 'addDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'name', type: 'bytes32' },
      {
        internalType: 'bytes32',
        name: 'distributorId',
        type: 'bytes32'
      },
      { internalType: 'address', name: 'initializer', type: 'address' }
    ],
    name: 'addNamedDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'config', type: 'bytes' },
      { internalType: 'bytes4', name: '', type: 'bytes4' },
      {
        internalType: 'address',
        name: 'maybeInstance',
        type: 'address'
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'afterCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'config', type: 'bytes' },
      { internalType: 'bytes4', name: '', type: 'bytes4' },
      {
        internalType: 'address',
        name: 'maybeInstance',
        type: 'address'
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'beforeCall',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'sourceId', type: 'bytes32' },
      { internalType: 'address', name: 'initializer', type: 'address' }
    ],
    name: 'calculateDistributorId',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'repository', type: 'address' },
      { internalType: 'address', name: 'initializer', type: 'address' }
    ],
    name: 'calculateDistributorId',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        components: [
          {
            components: [
              { internalType: 'uint64', name: 'major', type: 'uint64' },
              { internalType: 'uint64', name: 'minor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'patch',
                type: 'uint128'
              }
            ],
            internalType: 'struct LibSemver.Version',
            name: 'version',
            type: 'tuple'
          },
          {
            internalType: 'enum LibSemver.requirements',
            name: 'requirement',
            type: 'uint8'
          }
        ],
        internalType: 'struct LibSemver.VersionRequirement',
        name: 'newRequirement',
        type: 'tuple'
      }
    ],
    name: 'changeVersion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'defaultInstantiationCost',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorsId',
        type: 'bytes32'
      }
    ],
    name: 'distributionComponents',
    outputs: [
      {
        internalType: 'address',
        name: 'distributionLocation',
        type: 'address'
      },
      { internalType: 'address', name: 'initializer', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'instance', type: 'uint256' } ],
    name: 'distributionOf',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'distributorsId',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'instance', type: 'address' } ],
    name: 'getDistributionId',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorsId',
        type: 'bytes32'
      }
    ],
    name: 'getDistributionURI',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getDistributions',
    outputs: [ { internalType: 'bytes32[]', name: '', type: 'bytes32[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'instance', type: 'address' } ],
    name: 'getInstanceId',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'instanceId', type: 'uint256' }
    ],
    name: 'instanceVersions',
    outputs: [
      { internalType: 'uint64', name: 'major', type: 'uint64' },
      { internalType: 'uint64', name: 'minor', type: 'uint64' },
      { internalType: 'uint128', name: 'patch', type: 'uint128' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorId',
        type: 'bytes32'
      },
      { internalType: 'bytes', name: 'args', type: 'bytes' }
    ],
    name: 'instantiate',
    outputs: [
      { internalType: 'address[]', name: '', type: 'address[]' },
      {
        internalType: 'bytes32',
        name: 'distributionName',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'distributionVersion',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'instantiationCosts',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'numInstances',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paymentToken',
    outputs: [ { internalType: 'contract IERC20', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorId',
        type: 'bytes32'
      }
    ],
    name: 'removeDistribution',
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
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorsId',
        type: 'bytes32'
      }
    ],
    name: 'versionRequirements',
    outputs: [
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'version',
        type: 'tuple'
      },
      {
        internalType: 'enum LibSemver.requirements',
        name: 'requirement',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;