/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { DAODistributor, DAODistributor_Debug, DAODistributor_DefaultAdminDelayChangeCanceled, DAODistributor_DefaultAdminDelayChangeScheduled, DAODistributor_DefaultAdminTransferCanceled, DAODistributor_DefaultAdminTransferScheduled, DAODistributor_DistributionAdded, DAODistributor_DistributionRemoved, DAODistributor_Instantiated, DAODistributor_InstantiationCostChanged, DAODistributor_RoleAdminChanged, DAODistributor_RoleGranted, DAODistributor_RoleRevoked, DAODistributor_VersionChanged, RankToken, RankToken_ApprovalForAll, RankToken_Initialized, RankToken_RankingInstanceUpdated, RankToken_TokensLocked, RankToken_TokensUnlocked, RankToken_TransferBatch, RankToken_TransferSingle, RankToken_URI, RankifyInstance, RankifyInstance_GameClosed, RankifyInstance_GameOver, RankifyInstance_GameStarted, RankifyInstance_LastTurn, RankifyInstance_OverTime, RankifyInstance_OwnershipTransferred, RankifyInstance_PlayerJoined, RankifyInstance_PlayerLeft, RankifyInstance_ProposalScore, RankifyInstance_ProposalSubmitted, RankifyInstance_RankTokenExited, RankifyInstance_RegistrationOpen, RankifyInstance_ProposingStageEnded, RankifyInstance_VotingStageResults, RankifyInstance_VoteSubmitted, RankifyInstance_gameCreated, RankifyToken, RankifyToken_Approval, RankifyToken_DelegateChanged, RankifyToken_DelegateVotesChanged, RankifyToken_EIP712DomainChanged, RankifyToken_OwnershipTransferred, RankifyToken_Transfer } from "generated";

DAODistributor.Debug.handler(async ({ event, context }) => {
  const entity: DAODistributor_Debug = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    distributorsId: event.params.distributorsId,
    args: event.params.args,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_Debug.set(entity);
});

DAODistributor.DefaultAdminDelayChangeCanceled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminDelayChangeCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_DefaultAdminDelayChangeCanceled.set(entity);
});

DAODistributor.DefaultAdminDelayChangeScheduled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminDelayChangeScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDelay: event.params.newDelay,
    effectSchedule: event.params.effectSchedule,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_DefaultAdminDelayChangeScheduled.set(entity);
});

DAODistributor.DefaultAdminTransferCanceled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminTransferCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_DefaultAdminTransferCanceled.set(entity);
});

DAODistributor.DefaultAdminTransferScheduled.handler(async ({ event, context }) => {
  const entity: DAODistributor_DefaultAdminTransferScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdmin: event.params.newAdmin,
    acceptSchedule: event.params.acceptSchedule,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_DefaultAdminTransferScheduled.set(entity);
});

DAODistributor.DistributionAdded.handler(async ({ event, context }) => {
  const entity: DAODistributor_DistributionAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    distribution: event.params.distribution,
    initializer: event.params.initializer,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_DistributionAdded.set(entity);
});

DAODistributor.DistributionRemoved.handler(async ({ event, context }) => {
  const entity: DAODistributor_DistributionRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
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
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_Instantiated.set(entity);
});

DAODistributor.Instantiated.contractRegister(({ event, context }) => {
  context.addRankifyInstance(event.params.instances[3]);
  context.addRankToken(event.params.instances[5]);
});

DAODistributor.InstantiationCostChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_InstantiationCostChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    cost: event.params.cost,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_InstantiationCostChanged.set(entity);
});

DAODistributor.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_RoleAdminChanged.set(entity);
});

DAODistributor.RoleGranted.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_RoleGranted.set(entity);
});

DAODistributor.RoleRevoked.handler(async ({ event, context }) => {
  const entity: DAODistributor_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_RoleRevoked.set(entity);
});

DAODistributor.VersionChanged.handler(async ({ event, context }) => {
  const entity: DAODistributor_VersionChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    distributionId: event.params.distributionId,
    newRequirement_0_0: event.params.newRequirement[0][0],
    newRequirement_0_1: event.params.newRequirement[0][1],
    newRequirement_0_2: event.params.newRequirement[0][2],
    newRequirement_1: event.params.newRequirement[1],
    newRequirementData_0_0: event.params.newRequirementData[0][0],
    newRequirementData_0_1: event.params.newRequirementData[0][1],
    newRequirementData_0_2: event.params.newRequirementData[0][2],
    newRequirementData_1: event.params.newRequirementData[1],
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.DAODistributor_VersionChanged.set(entity);
});

RankToken.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: RankToken_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    operator: event.params.operator,
    approved: event.params.approved,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_ApprovalForAll.set(entity);
});

RankToken.Initialized.handler(async ({ event, context }) => {
  const entity: RankToken_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_Initialized.set(entity);
});

RankToken.RankingInstanceUpdated.handler(async ({ event, context }) => {
  const entity: RankToken_RankingInstanceUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newRankingInstance: event.params.newRankingInstance,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_RankingInstanceUpdated.set(entity);
});

RankToken.TokensLocked.handler(async ({ event, context }) => {
  const entity: RankToken_TokensLocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    event_id: event.params.id,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_TokensLocked.set(entity);
});

RankToken.TokensUnlocked.handler(async ({ event, context }) => {
  const entity: RankToken_TokensUnlocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    event_id: event.params.id,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_TokensUnlocked.set(entity);
});

RankToken.TransferBatch.handler(async ({ event, context }) => {
  const entity: RankToken_TransferBatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    values: event.params.values,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_TransferBatch.set(entity);
});

RankToken.TransferSingle.handler(async ({ event, context }) => {
  const entity: RankToken_TransferSingle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_TransferSingle.set(entity);
});

RankToken.URI.handler(async ({ event, context }) => {
  const entity: RankToken_URI = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    event_id: event.params.id,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankToken_URI.set(entity);
});

RankifyInstance.GameClosed.handler(async ({ event, context }) => {
  const entity: RankifyInstance_GameClosed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_GameClosed.set(entity);
});

RankifyInstance.GameOver.handler(async ({ event, context }) => {
  const entity: RankifyInstance_GameOver = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    players: event.params.players,
    scores: event.params.scores,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_GameOver.set(entity);
});

RankifyInstance.GameStarted.handler(async ({ event, context }) => {
  const entity: RankifyInstance_GameStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_GameStarted.set(entity);
});

RankifyInstance.LastTurn.handler(async ({ event, context }) => {
  const entity: RankifyInstance_LastTurn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_LastTurn.set(entity);
});

RankifyInstance.OverTime.handler(async ({ event, context }) => {
  const entity: RankifyInstance_OverTime = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_OverTime.set(entity);
});

RankifyInstance.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: RankifyInstance_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_OwnershipTransferred.set(entity);
});

RankifyInstance.PlayerJoined.handler(async ({ event, context }) => {
  const entity: RankifyInstance_PlayerJoined = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    participant: event.params.participant,
    gmCommitment: event.params.gmCommitment,
    voterPubKey: event.params.voterPubKey,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
    transactionIndex: event.transaction.transactionIndex,
    logIndex: event.logIndex,
  };

  context.RankifyInstance_PlayerJoined.set(entity);
});

RankifyInstance.PlayerLeft.handler(async ({ event, context }) => {
  const entity: RankifyInstance_PlayerLeft = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    player: event.params.player,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_PlayerLeft.set(entity);
});

RankifyInstance.ProposalScore.handler(async ({ event, context }) => {
  const entity: RankifyInstance_ProposalScore = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    roundNumber: event.params.turn,
    proposalHash: event.params.proposalHash,
    proposal: event.params.proposal,
    score: event.params.score,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_ProposalScore.set(entity);
});

RankifyInstance.ProposalSubmitted.handler(async ({ event, context }) => {
  const entity: RankifyInstance_ProposalSubmitted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    roundNumber: event.params.turn,
    proposer: event.params.proposer,
    commitment: event.params.commitment,
    encryptedProposal: event.params.encryptedProposal,
    gmSignature: event.params.gmSignature,
    proposerSignature: event.params.proposerSignature,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_ProposalSubmitted.set(entity);
});

RankifyInstance.RankTokenExited.handler(async ({ event, context }) => {
  const entity: RankifyInstance_RankTokenExited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    rankId: event.params.rankId,
    amount: event.params.amount,
    _toMint: event.params._toMint,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_RankTokenExited.set(entity);
});

RankifyInstance.RegistrationOpen.handler(async ({ event, context }) => {
  const entity: RankifyInstance_RegistrationOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_RegistrationOpen.set(entity);
});

RankifyInstance.VoteSubmitted.handler(async ({ event, context }) => {
  const entity: RankifyInstance_VoteSubmitted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    roundNumber: event.params.turn,
    player: event.params.player,
    sealedBallotId: event.params.sealedBallotId,
    gmSignature: event.params.gmSignature,
    voterSignature: event.params.voterSignature,
    ballotHash: event.params.ballotHash,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_VoteSubmitted.set(entity);
});

RankifyInstance.GameCreated.handler(async ({ event, context }) => {
  const entity: RankifyInstance_gameCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    gm: event.params.gm,
    creator: event.params.creator,
    rank: event.params.rank,
    proposingPhaseDuration: event.params.proposingPhaseDuration,
    votePhaseDuration: event.params.votePhaseDuration,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_gameCreated.set(entity);
});

RankifyToken.Approval.handler(async ({ event, context }) => {
  const entity: RankifyToken_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_Approval.set(entity);
});

RankifyToken.DelegateChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_DelegateChanged.set(entity);
});

RankifyToken.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousVotes: event.params.previousVotes,
    newVotes: event.params.newVotes,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_DelegateVotesChanged.set(entity);
});

RankifyToken.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: RankifyToken_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_EIP712DomainChanged.set(entity);
});

RankifyToken.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: RankifyToken_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_OwnershipTransferred.set(entity);
});

RankifyToken.Transfer.handler(async ({ event, context }) => {
  const entity: RankifyToken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
  };

  context.RankifyToken_Transfer.set(entity);
});
RankifyInstance.ProposingStageEnded.handler(async ({ event, context }) => {
  const entity: RankifyInstance_ProposingStageEnded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    roundNumber: event.params.roundNumber,
    proposals: event.params.proposals,
    numProposals: event.params.numProposals,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_ProposingStageEnded.set(entity);
});

RankifyInstance.VotingStageResults.handler(async ({ event, context }) => {
  const entity: RankifyInstance_VotingStageResults = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    roundNumber: event.params.roundNumber,
    winner: event.params.winner,
    players: event.params.players,
    scores: event.params.scores,
    votesSorted: event.params.votesSorted,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(Number(event.block.timestamp) * 1000).toISOString(),
    srcAddress: event.srcAddress,
  };

  context.RankifyInstance_VotingStageResults.set(entity);
});

