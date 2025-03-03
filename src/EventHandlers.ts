/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DAODistributor,
  DAODistributor_Debug,
  DAODistributor_DefaultAdminDelayChangeCanceled,
  DAODistributor_DefaultAdminDelayChangeScheduled,
  DAODistributor_DefaultAdminTransferCanceled,
  DAODistributor_DefaultAdminTransferScheduled,
  DAODistributor_DistributionAdded,
  DAODistributor_DistributionRemoved,
  DAODistributor_Instantiated,
  DAODistributor_InstantiationCostChanged,
  DAODistributor_RoleAdminChanged,
  DAODistributor_RoleGranted,
  DAODistributor_RoleRevoked,
  DAODistributor_VersionChanged,
  RankifyToken,
  RankifyToken_Approval,
  RankifyToken_DelegateChanged,
  RankifyToken_DelegateVotesChanged,
  RankifyToken_EIP712DomainChanged,
  RankifyToken_OwnershipTransferred,
  RankifyToken_Transfer,
} from "generated";

DAODistributor.Debug.handler(async ({ event, context }) => {
  const entity: DAODistributor_Debug = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    distributorsId: event.params.distributorsId,
    args: event.params.args,
  };

  context.DAODistributor_Debug.set(entity);
});

DAODistributor.DefaultAdminDelayChangeCanceled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminDelayChangeCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.DAODistributor_DefaultAdminDelayChangeCanceled.set(entity);
});

DAODistributor.DefaultAdminDelayChangeScheduled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminDelayChangeScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDelay: event.params.newDelay,
    effectSchedule: event.params.effectSchedule,
  };

  context.DAODistributor_DefaultAdminDelayChangeScheduled.set(entity);
});

DAODistributor.DefaultAdminTransferCanceled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminTransferCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.DAODistributor_DefaultAdminTransferCanceled.set(entity);
});

DAODistributor.DefaultAdminTransferScheduled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminTransferScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdmin: event.params.newAdmin,
    acceptSchedule: event.params.acceptSchedule,
  };

  context.DAODistributor_DefaultAdminTransferScheduled.set(entity);
});

DAODistributor.DistributionAdded.handler(async ({ event, context }) => {
  const entity: DAODistributor_DistributionAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    distribution: event.params.distribution,
    initializer: event.params.initializer,
  };

  context.DAODistributor_DistributionAdded.set(entity);
});

DAODistributor.DistributionRemoved.handler(async ({ event, context }) => {
  const entity: DAODistributor_DistributionRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.DAODistributor_DistributionRemoved.set(entity);
});

DAODistributor.Instantiated.handler(async ({ event, context }) => {
  const entity: DAODistributor_Instantiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    distributionId: event.params.distributionId,
    newInstanceId: event.params.newInstanceId,
    version: event.params.version,
    instances: event.params.instances,
    args: event.params.args,
  };

  context.DAODistributor_Instantiated.set(entity);
});

DAODistributor.InstantiationCostChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_InstantiationCostChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    cost: event.params.cost,
  };

  context.DAODistributor_InstantiationCostChanged.set(entity);
});

DAODistributor.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.DAODistributor_RoleAdminChanged.set(entity);
});

DAODistributor.RoleGranted.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.DAODistributor_RoleGranted.set(entity);
});

DAODistributor.RoleRevoked.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.DAODistributor_RoleRevoked.set(entity);
});

DAODistributor.VersionChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_VersionChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    distributionId: event.params.distributionId,
    newRequirement_0_0: event.params.newRequirement
        [0]
        [0]
    ,
    newRequirement_0_1: event.params.newRequirement
        [0]
        [1]
    ,
    newRequirement_0_2: event.params.newRequirement
        [0]
        [2]
    ,
    newRequirement_1: event.params.newRequirement
        [1]
    ,
    newRequirementData_0_0: event.params.newRequirementData
        [0]
        [0]
    ,
    newRequirementData_0_1: event.params.newRequirementData
        [0]
        [1]
    ,
    newRequirementData_0_2: event.params.newRequirementData
        [0]
        [2]
    ,
    newRequirementData_1: event.params.newRequirementData
        [1]
    ,
  };

  context.DAODistributor_VersionChanged.set(entity);
});

RankifyToken.Approval.handler(async ({ event, context }) => {
  const entity: RankifyToken_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.RankifyToken_Approval.set(entity);
});

RankifyToken.DelegateChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.RankifyToken_DelegateChanged.set(entity);
});

RankifyToken.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousVotes: event.params.previousVotes,
    newVotes: event.params.newVotes,
  };

  context.RankifyToken_DelegateVotesChanged.set(entity);
});

RankifyToken.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.RankifyToken_EIP712DomainChanged.set(entity);
});

RankifyToken.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: RankifyToken_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.RankifyToken_OwnershipTransferred.set(entity);
});

RankifyToken.Transfer.handler(async ({ event, context }) => {
  const entity: RankifyToken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.RankifyToken_Transfer.set(entity);
});
