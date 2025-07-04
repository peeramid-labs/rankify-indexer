export const abi = [
  { inputs: [], name: 'EmptyReleaseMetadata', type: 'error' },
  { inputs: [], name: 'ReleaseZeroNotAllowed', type: 'error' },
  {
    inputs: [ { internalType: 'uint256', name: 'version', type: 'uint256' } ],
    name: 'VersionDoesNotExist',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'version', type: 'uint256' } ],
    name: 'VersionExists',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'version', type: 'uint256' } ],
    name: 'VersionIncrementInvalid',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      }
    ],
    name: 'MigrationScriptAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'version',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'releaseMetadata',
        type: 'bytes'
      }
    ],
    name: 'ReleaseMetadataUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'version',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'source',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'buildMetadata',
        type: 'bytes'
      }
    ],
    name: 'VersionAdded',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'uint64', name: 'majorVersion', type: 'uint64' },
      {
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      }
    ],
    name: 'changeMigrationScript',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
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
        name: 'required',
        type: 'tuple'
      }
    ],
    name: 'get',
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
            internalType: 'bytes32',
            name: 'sourceId',
            type: 'bytes32'
          },
          { internalType: 'bytes', name: 'metadata', type: 'bytes' }
        ],
        internalType: 'struct IRepository.Source',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLatest',
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
            internalType: 'bytes32',
            name: 'sourceId',
            type: 'bytes32'
          },
          { internalType: 'bytes', name: 'metadata', type: 'bytes' }
        ],
        internalType: 'struct IRepository.Source',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint64', name: 'major', type: 'uint64' } ],
    name: 'getMajorReleaseMetadata',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMajorReleases',
    outputs: [ { internalType: 'uint64', name: '', type: 'uint64' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint64', name: 'major', type: 'uint64' } ],
    name: 'getMigrationScript',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: 'major', type: 'uint64' },
      { internalType: 'uint64', name: 'minor', type: 'uint64' }
    ],
    name: 'getMinorReleaseMetadata',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint64', name: 'major', type: 'uint64' } ],
    name: 'getMinorReleases',
    outputs: [ { internalType: 'uint64', name: '', type: 'uint64' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: 'major', type: 'uint64' },
      { internalType: 'uint64', name: 'minor', type: 'uint64' },
      { internalType: 'uint64', name: 'patch', type: 'uint64' }
    ],
    name: 'getPatchReleaseMetadata',
    outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: 'major', type: 'uint64' },
      { internalType: 'uint64', name: 'minor', type: 'uint64' }
    ],
    name: 'getPatchReleases',
    outputs: [ { internalType: 'uint128', name: '', type: 'uint128' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'sourceId', type: 'bytes32' },
      { internalType: 'bytes', name: 'metadata', type: 'bytes' },
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
        internalType: 'bytes32',
        name: 'migrationHash',
        type: 'bytes32'
      }
    ],
    name: 'newRelease',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'repositoryName',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
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
        name: 'required',
        type: 'tuple'
      }
    ],
    name: 'resolveVersion',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
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
        components: [
          { internalType: 'uint64', name: 'major', type: 'uint64' },
          { internalType: 'uint64', name: 'minor', type: 'uint64' },
          { internalType: 'uint128', name: 'patch', type: 'uint128' }
        ],
        internalType: 'struct LibSemver.Version',
        name: 'version',
        type: 'tuple'
      },
      { internalType: 'bytes', name: 'releaseMetadata', type: 'bytes' }
    ],
    name: 'updateReleaseMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; export default abi;