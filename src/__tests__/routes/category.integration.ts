import { describe, it, expect } from "@jest/globals";
import { CategoryRepository } from "../../repository/CategoryRepository";
import {
  configClient,
  sinonIntegrationStubs,
  sinonIntegrationSkips,
  fetchClient,
} from "../utils/utils.integration.factory";

describe("/category", () => {
  const port = 8002;
  configClient(port);

  it("getAll", async () => {
    sinonIntegrationStubs(CategoryRepository);
    const result = await fetchClient("/categorys", "GET", port);
    expect(result.status).toBe("find");
  });

  it("get", async () => {
    sinonIntegrationSkips(CategoryRepository);
    const result = await fetchClient("/categorys/1/10", "GET", port);
    expect(result).toMatchObject({
      Qtd: "10",
      Page: "1",
      Total: 1,
      Data: { status: "skipFunction" },
    });
  });

  it("getByID", async () => {
    sinonIntegrationStubs(CategoryRepository);
    const result = await fetchClient("/category/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    sinonIntegrationStubs(CategoryRepository);
    const result = await fetchClient("/category/register/category", "PUT", port);
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonIntegrationStubs(CategoryRepository);
    const result = await fetchClient("/category/10", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonIntegrationStubs(CategoryRepository);
    const result = await fetchClient(
      "/category/update/02s415/categoryUpdate",
      "PUT",
      port
    );
    expect(result.status).toBe("success");
  });
});
