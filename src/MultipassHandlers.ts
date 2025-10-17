/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Multipass,
  MultipassDomainActivated,
  MultipassDomainDeactivated,
  MultipassDomainFeeChanged,
  MultipassfundsWithdawn,
  MultipassInitializedDomain,
  MultipassNameDeleted,
  MultipassOwnershipTransferred,
  MultipassReferralProgramChanged,
  MultipassRegistered,
  MultipassRegistrarChanged,
  MultipassRenewalFeeChanged,
  MultipassRenewed,
} from "generated";
import { randomUUID } from "crypto";

Multipass.DomainActivated.handler(async ({ event, context }) => {
  const entity: MultipassDomainActivated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassDomainActivated.set(entity);
});

Multipass.DomainDeactivated.handler(async ({ event, context }) => {
  const entity: MultipassDomainDeactivated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassDomainDeactivated.set(entity);
});

Multipass.DomainFeeChanged.handler(async ({ event, context }) => {
  const entity: MultipassDomainFeeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassDomainFeeChanged.set(entity);
});

Multipass.InitializedDomain.handler(async ({ event, context }) => {
  const entity: MultipassInitializedDomain = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassInitializedDomain.set(entity);
});

Multipass.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: MultipassOwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassOwnershipTransferred.set(entity);
});

Multipass.ReferralProgramChanged.handler(async ({ event, context }) => {
  const entity: MultipassReferralProgramChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassReferralProgramChanged.set(entity);
});

Multipass.Registered.handler(async ({ event, context }) => {
  const entity: MultipassRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    wallet: event.params.NewRecord[0],
    name: event.params.NewRecord[1],
    userId: event.params.NewRecord[2],
    nonce: event.params.NewRecord[3],
    domainName: event.params.NewRecord[4],
    validUntil: event.params.NewRecord[5],
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassRegistered.set(entity);
});

Multipass.RegistrarChanged.handler(async ({ event, context }) => {
  const entity: MultipassRegistrarChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassRegistrarChanged.set(entity);
});

Multipass.RenewalFeeChanged.handler(async ({ event, context }) => {
  const entity: MultipassRenewalFeeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassRenewalFeeChanged.set(entity);
});

Multipass.Renewed.handler(async ({ event, context }) => {
  const entity: MultipassRenewed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    wallet: event.params.newRecord[0],
    name: event.params.newRecord[1],
    userId: event.params.newRecord[2],
    nonce: event.params.newRecord[3],
    domainName: event.params.newRecord[4],
    validUntil: event.params.newRecord[5],
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassRenewed.set(entity);
});

Multipass.FundsWithdawn.handler(async ({ event, context }) => {
  const entity: MultipassfundsWithdawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ...event.params,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassfundsWithdawn.set(entity);
});

Multipass.NameDeleted.handler(async ({ event, context }) => {
  const entity: MultipassNameDeleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    wallet: event.params.wallet,
    name: event.params.name,
    userId: event.params.id,
    domainName: event.params.domainName,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: new Date(
      Number(event.block.timestamp) * 1000,
    ).toISOString(),
    chainId: event.chainId,
    hash: event.transaction.hash,
  };
  context.MultipassNameDeleted.set(entity);
});
