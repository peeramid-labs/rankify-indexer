export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      {
        internalType: 'uint256',
        name: 'currentAllowance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'requestedDecrease',
        type: 'uint256'
      }
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'token', type: 'address' } ],
    name: 'SafeERC20FailedOperation',
    type: 'error'
  }
] as const; export default abi;