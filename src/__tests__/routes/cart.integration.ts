import { describe, it, expect } from "@jest/globals";
import { CartRepository } from "../../repository/CartRepository";
import {
  sinonIntegrationStubs,
  sinonIntegrationSkips,
  configClient,
  fetchClient,
} from "../utils/utils.integration.factory";

describe("/cart", () => {
  configClient();

  it("getAll", async () => {
    sinonIntegrationStubs(CartRepository);
    const result = await fetchClient("/cart", "GET");
    expect(result.status).toBe("find");
  });

  it("get", async () => {
    sinonIntegrationSkips(CartRepository);
    const result = await fetchClient("/cart/1/10", "GET");
    expect(result).toBe({
      Qtd: "10",
      Page: "1",
      Total: 1,
      Data: { status: "skipFunction" },
    });
  });

  it("getByID", async () => {
    sinonIntegrationStubs(CartRepository);
    const result = await fetchClient("/cart/1", "GET");
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    sinonIntegrationStubs(CartRepository);
    const result = await fetchClient(
      "/cart/register/user_id/2/2456/product/1.00/2.00/25541/test",
      "PUT"
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonIntegrationStubs(CartRepository);
    const result = await fetchClient("/cart/1ad0sa!", "DELETE");
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonIntegrationStubs(CartRepository);
    const result = await fetchClient(
      "/cart/update/025415/0251/2/023hj5/product/1.00/2.00/test",
      "PUT"
    );
    expect(result.status).toBe("findOneAndUpdate");
  });
});
