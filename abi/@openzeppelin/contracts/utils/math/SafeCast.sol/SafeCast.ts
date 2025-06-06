export const abi = [
  {
    inputs: [
      { internalType: 'uint8', name: 'bits', type: 'uint8' },
      { internalType: 'int256', name: 'value', type: 'int256' }
    ],
    name: 'SafeCastOverflowedIntDowncast',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'int256', name: 'value', type: 'int256' } ],
    name: 'SafeCastOverflowedIntToUint',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'uint8', name: 'bits', type: 'uint8' },
      { internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'value', type: 'uint256' } ],
    name: 'SafeCastOverflowedUintToInt',
    type: 'error'
  }
] as const; export default abi;