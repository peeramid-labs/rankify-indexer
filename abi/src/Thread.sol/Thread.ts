export const abi = [
  {
    inputs: [
      {
        internalType: 'bytes32[2]',
        name: 'inputs',
        type: 'bytes32[2]'
      }
    ],
    name: 'poseidon',
    outputs: [ { internalType: 'bytes32', name: '', type: 'bytes32' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const; export default abi;