export const abi = [
  {
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'clock',
    outputs: [ { internalType: 'uint48', name: '', type: 'uint48' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;