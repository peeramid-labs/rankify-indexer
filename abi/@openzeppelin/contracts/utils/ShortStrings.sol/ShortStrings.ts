export const abi = [
  { inputs: [], name: 'InvalidShortString', type: 'error' },
  {
    inputs: [ { internalType: 'string', name: 'str', type: 'string' } ],
    name: 'StringTooLong',
    type: 'error'
  }
] as const; export default abi;