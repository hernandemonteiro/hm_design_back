import { describe, it, expect } from "@jest/globals";
import { UsersRepository } from "../../repository/UsersRepository";
import {
  sinonIntegrationStubs,
  configClient,
  fetchClient,
} from "../utils/utils.integration.factory";
import sinon from "sinon";

describe("/user", () => {
  const port = 8006;
  configClient(port);

  it("getAll", async () => {
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient("/users", "GET", port);
    expect(result.status).toBe("find");
  });

  it("getByID", async () => {
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient("/users/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    sinon.stub(UsersRepository, "count").resolves(0);
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient(
      "/users/name/email@email.com/password/0",
      "POST",
      port
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient("/users/1ad0sa!", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient(
      "/users/update/id/name/email/password",
      "PUT",
      port
    );
    expect(result.status).toBe("success");
  });

  it("login", async () => {
    sinonIntegrationStubs(UsersRepository);
    const result = await fetchClient(
      "/login/email@email.com/password",
      "GET",
      port
    );
    expect(result).toBe("ioZG9e0BlSLt9oWgVKF4Yg==");
  });
});
