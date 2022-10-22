import { describe, it, expect } from "@jest/globals";
import {
  configClient,
  fetchClientFailed,
} from "../helpers/utilsIntegration";
import { dotEnvMock } from "../helpers/utilsUnit";


describe("startUp", () => {
  configClient(8585);
  dotEnvMock();
  it("failed authenticate", async () => {
    process.env.HASH_SECRET = "testerFailed";
    const failedFetch = await fetchClientFailed("/cart", "GET");
    expect(failedFetch.status).toBe(401);
  });
});
