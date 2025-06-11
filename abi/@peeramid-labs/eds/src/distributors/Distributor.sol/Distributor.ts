export const abi = [
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'AddressNotFound',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'aliasHash', type: 'bytes32' } ],
    name: 'AliasAlreadyExists',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes32', name: 'id', type: 'bytes32' } ],
    name: 'DistributionExists',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'bytes', name: 'reason', type: 'bytes' } ],
    name: 'DistributionInstantiationFailed',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'errorCode', type: 'uint256' } ],
    name: 'DistributionInstantiationPanic',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'string', name: 'reason', type: 'string' } ],
    name: 'DistributionInstantiationRevert',
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
    inputs: [
      { internalType: 'address', name: 'app', type: 'address' },
      {
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      { internalType: 'uint256', name: 'appId', type: 'uint256' }
    ],
    name: 'InvalidApp',
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
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' }
    ],
    name: 'MigrationAlreadyExists',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' }
    ],
    name: 'MigrationContractNotFound',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'caller', type: 'address' } ],
    name: 'NotAnInstaller',
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
    inputs: [ { internalType: 'address', name: 'caller', type: 'address' } ],
    name: 'UntrustedInstaller',
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
    inputs: [ { internalType: 'bytes', name: 'reason', type: 'bytes' } ],
    name: 'upgradeFailedWithError',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'errorCode', type: 'uint256' } ],
    name: 'upgradeFailedWithPanic',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'string', name: 'reason', type: 'string' } ],
    name: 'upgradeFailedWithRevert',
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
        internalType: 'uint256',
        name: 'oldVersion',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newVersion',
        type: 'uint256'
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
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'readableNameHashZ',
        type: 'string'
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
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'readableName',
        type: 'string'
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
    name: 'DistributionDisabled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'appId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
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
        internalType: 'bytes32',
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newAppId',
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
        name: 'appComponents',
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
        name: 'distributionId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'baseVersion',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'enum LibSemver.requirements',
        name: 'semanticRequirement',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'enum MigrationStrategy',
        name: 'strategy',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'migrationId',
        type: 'bytes32'
      }
    ],
    name: 'MigrationContractAddedFromVersions',
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
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'enum LibSemver.requirements',
        name: 'semanticRequirement',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'enum MigrationStrategy',
        name: 'strategy',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'baseVersion',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'migrationId',
        type: 'bytes32'
      }
    ],
    name: 'MigrationContractAddedToVersions',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'migrationId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'oldVersion',
        type: 'uint256'
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
    name: 'MigrationExecuted',
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
        name: 'migrationId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newVersion',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldVersion',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'userCalldata',
        type: 'bytes'
      }
    ],
    name: 'UserUpgraded',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'migrationId',
        type: 'bytes32'
      }
    ],
    name: 'VersionMigrationRemoved',
    type: 'event'
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
      },
      { internalType: 'string', name: 'readableName', type: 'string' }
    ],
    name: 'addDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'codeHash', type: 'bytes32' },
      { internalType: 'address', name: 'initializer', type: 'address' },
      { internalType: 'string', name: 'readableName', type: 'string' }
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
        name: 'from',
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
        internalType: 'struct LibSemver.VersionRequirement',
        name: 'to',
        type: 'tuple'
      },
      {
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      },
      {
        internalType: 'enum MigrationStrategy',
        name: 'strategy',
        type: 'uint8'
      },
      {
        internalType: 'bytes',
        name: 'distributorCalldata',
        type: 'bytes'
      }
    ],
    name: 'addVersionMigration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'config', type: 'bytes' },
      { internalType: 'bytes4', name: '', type: 'bytes4' },
      { internalType: 'address', name: 'sender', type: 'address' },
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
    inputs: [ { internalType: 'bytes32', name: 'aliasHash', type: 'bytes32' } ],
    name: 'aliasToDistributorId',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'appComponents',
    outputs: [ { internalType: 'address[]', name: '', type: 'address[]' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'appVersions',
    outputs: [
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'appsRenounced',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'appsUndergoingMigration',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'config', type: 'bytes' },
      { internalType: 'bytes4', name: '', type: 'bytes4' },
      { internalType: 'address', name: 'sender', type: 'address' },
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
      { internalType: 'bytes32', name: 'codeHash', type: 'bytes32' },
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
    inputs: [
      {
        internalType: 'bytes32',
        name: 'distributorId',
        type: 'bytes32'
      }
    ],
    name: 'disableDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
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
        components: [
          {
            internalType: 'address',
            name: 'distributionLocation',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'initializer',
            type: 'address'
          }
        ],
        internalType: 'struct Distributor.DistributionComponent',
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
        internalType: 'bytes32',
        name: 'distributorsId',
        type: 'bytes32'
      }
    ],
    name: 'distributionExists',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'distributionOf',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
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
    inputs: [
      {
        internalType: 'address',
        name: 'appComponent',
        type: 'address'
      }
    ],
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
    inputs: [
      { internalType: 'string', name: 'readableName', type: 'string' }
    ],
    name: 'getIdFromAlias',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' }
    ],
    name: 'getVersionMigration',
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint64',
                    name: 'major',
                    type: 'uint64'
                  },
                  {
                    internalType: 'uint64',
                    name: 'minor',
                    type: 'uint64'
                  },
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
            name: 'from',
            type: 'tuple'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint64',
                    name: 'major',
                    type: 'uint64'
                  },
                  {
                    internalType: 'uint64',
                    name: 'minor',
                    type: 'uint64'
                  },
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
            name: 'to',
            type: 'tuple'
          },
          {
            internalType: 'bytes32',
            name: 'migrationHash',
            type: 'bytes32'
          },
          {
            internalType: 'enum MigrationStrategy',
            name: 'strategy',
            type: 'uint8'
          },
          {
            internalType: 'bytes',
            name: 'distributorCalldata',
            type: 'bytes'
          },
          {
            internalType: 'bytes32',
            name: 'distributionId',
            type: 'bytes32'
          }
        ],
        internalType: 'struct MigrationPlan',
        name: 'migrationPlan',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'appId', type: 'uint256' } ],
    name: 'installers',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
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
      {
        internalType: 'address[]',
        name: 'addresses',
        type: 'address[]'
      },
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
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' }
    ],
    name: 'migrations',
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint64',
                    name: 'major',
                    type: 'uint64'
                  },
                  {
                    internalType: 'uint64',
                    name: 'minor',
                    type: 'uint64'
                  },
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
            name: 'from',
            type: 'tuple'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint64',
                    name: 'major',
                    type: 'uint64'
                  },
                  {
                    internalType: 'uint64',
                    name: 'minor',
                    type: 'uint64'
                  },
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
            name: 'to',
            type: 'tuple'
          },
          {
            internalType: 'bytes32',
            name: 'migrationHash',
            type: 'bytes32'
          },
          {
            internalType: 'enum MigrationStrategy',
            name: 'strategy',
            type: 'uint8'
          },
          {
            internalType: 'bytes',
            name: 'distributorCalldata',
            type: 'bytes'
          },
          {
            internalType: 'bytes32',
            name: 'distributionId',
            type: 'bytes32'
          }
        ],
        internalType: 'struct MigrationPlan',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'numAppInstances',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'appId', type: 'uint256' },
      {
        internalType: 'address',
        name: 'newDistributor',
        type: 'address'
      },
      { internalType: 'bytes[]', name: 'appData', type: 'bytes[]' }
    ],
    name: 'onDistributorChanged',
    outputs: [
      { internalType: 'bool[]', name: 'statuses', type: 'bool[]' },
      { internalType: 'bytes[]', name: 'results', type: 'bytes[]' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' }
    ],
    name: 'removeVersionMigration',
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
      { internalType: 'uint256', name: 'appId', type: 'uint256' },
      { internalType: 'bytes32', name: 'migrationId', type: 'bytes32' },
      { internalType: 'bytes', name: 'userCalldata', type: 'bytes' }
    ],
    name: 'upgradeUserInstance',
    outputs: [
      {
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'newVersion',
        type: 'tuple'
      }
    ],
    stateMutability: 'nonpayable',
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
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;