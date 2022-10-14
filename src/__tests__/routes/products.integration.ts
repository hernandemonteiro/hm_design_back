import { describe, it, expect } from "@jest/globals";
import { ProductsRepository } from "../../repository/ProductsRepository";
import {
  sinonIntegrationStubs,
  sinonIntegrationSkips,
  configClient,
  fetchClient,
} from "../utils/utils.integration.factory";

describe("/product", () => {
  const port = 8005;
  configClient(port);

  it("getAll", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient("/products", "GET", port);
    expect(result.status).toBe("find");
  });

  it("get", async () => {
    sinonIntegrationSkips(ProductsRepository);
    const result = await fetchClient("/products/pages/1/10", "GET", port);
    expect(result).toMatchObject({
      Qtd: "10",
      Page: "1",
      Total: 1,
      Data: { status: "skipFunction" },
    });
  });

  it("getByID", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient("/product/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("getPerCategory", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient(
      "/products/category/category",
      "GET",
      port
    );
    expect(result.status).toBe("find");
  });

  it("getPerSearch", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient("/products/search/search", "GET", port);
    expect(result.status).toBe("find");
  });

  it("register", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient(
      "/product/register/name/price/images/description/category/options",
      "PUT",
      port
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient("/product/delete/1ad0sa!", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonIntegrationStubs(ProductsRepository);
    const result = await fetchClient(
      "/product/update/id/name/price/images/description/status/options",
      "PUT",
      port
    );
    expect(result.status).toBe("success");
  });
});
