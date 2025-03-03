import assert from "assert";
import { 
  TestHelpers,
  DAODistributor_Debug
} from "generated";
const { MockDb, DAODistributor } = TestHelpers;

describe("DAODistributor contract Debug event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for DAODistributor contract Debug event
  const event = DAODistributor.Debug.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("DAODistributor_Debug is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await DAODistributor.Debug.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDAODistributorDebug = mockDbUpdated.entities.DAODistributor_Debug.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDAODistributorDebug: DAODistributor_Debug = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      distributorsId: event.params.distributorsId,
      args: event.params.args,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDAODistributorDebug, expectedDAODistributorDebug, "Actual DAODistributorDebug should be the same as the expectedDAODistributorDebug");
  });
});
