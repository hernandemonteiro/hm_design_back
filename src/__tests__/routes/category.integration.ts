import { describe, it, expect } from "@jest/globals";
import { CategoryRepository } from "../../repository/CategoryRepository";
import {
  configClient,
  sinonCommonStubs,
  sinonSkips,
  fetchClient,
} from "../helpers/utilsIntegration";

describe("/category", () => {
  const port = 8002;
  configClient(port);
  
  
  it("getAll", async () => {
    sinonCommonStubs(CategoryRepository);
    const result = await fetchClient("/categorys", "GET", port);
    expect(result.status).toBe("find");
  });

  it("get", async () => {
    sinonSkips(CategoryRepository);
    const result = await fetchClient("/categorys/1/10", "GET", port);
    expect(result).toMatchObject({
      Qtd: "10",
      Page: "1",
      Total: 1,
      Data: { status: "skipFunction" },
    });
  });

  it("getById", async () => {
    sinonCommonStubs(CategoryRepository);
    const result = await fetchClient("/category/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    sinonCommonStubs(CategoryRepository);
    const result = await fetchClient(
      "/category/register/category",
      "PUT",
      port
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonCommonStubs(CategoryRepository);
    const result = await fetchClient("/category/10", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonCommonStubs(CategoryRepository);
    const result = await fetchClient(
      "/category/update/02s415/categoryUpdate",
      "PUT",
      port
    );
    expect(result.status).toBe("findOneAndUpdate");
  });
});
