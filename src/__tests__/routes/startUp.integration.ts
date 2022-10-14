import { describe, it, expect } from "@jest/globals";
import {
  configClient,
  fetchClientFailed,
} from "../utils/utils.integration.factory";

describe("startUp", () => {
  configClient(8585);
  it("failed authenticate", async () => {
    const failedFetch = await fetchClientFailed("/any", "GET");
    expect(failedFetch.status).toBe(401);
  });
});
