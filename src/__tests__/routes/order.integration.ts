import { describe, it, expect } from "@jest/globals";
import { OrderRepository } from "../../repository/OrderRepository";
import {
  sinonIntegrationStubs,
  sinonIntegrationSkips,
  configClient,
  fetchClient,
} from "../utils/utils.integration.factory";

describe("/order", () => {
  const port = 8004;
  configClient(port);

  it("getAll", async () => {
    sinonIntegrationStubs(OrderRepository);
    const result = await fetchClient("/orders", "GET", port);
    expect(result.status).toBe("find");
  });

  it("get", async () => {
    sinonIntegrationSkips(OrderRepository);
    const result = await fetchClient("/order/1/10", "GET", port);
    expect(result).toMatchObject({
      Qtd: "10",
      Page: "1",
      Total: 1,
      Data: { status: "skipFunction" },
    });
  });

  it("getByID", async () => {
    sinonIntegrationStubs(OrderRepository);
    const result = await fetchClient("/order/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    sinonIntegrationStubs(OrderRepository);
    const result = await fetchClient(
      "/order/register/1dsa1/address/dsa21/test",
      "PUT",
      port
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonIntegrationStubs(OrderRepository);
    const result = await fetchClient("/order/1ad0sa!", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonIntegrationStubs(OrderRepository);
    const result = await fetchClient(
      "/order/update/ds4a4/dsa45/address/fd1es5/test",
      "PUT",
      port
    );
    expect(result.status).toBe("success");
  });
});
