import { describe, it, expect } from "@jest/globals";
import { UsersRepository } from "../../repository/UsersRepository";
import {
  sinonCommonStubs,
  configClient,
  fetchClient,
} from "../helpers/utilsIntegration";
import sinon from "sinon";
import { stubCrypto } from "../helpers/utilsUnit";

describe("/user", () => {
  const port = 8006;
  configClient(port);

  it("getAll", async () => {
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient("/users", "GET", port);
    expect(result.status).toBe("find");
  });

  it("getById", async () => {
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient("/users/1", "GET", port);
    expect(result.status).toBe("findByID");
  });

  it("register", async () => {
    stubCrypto();
    sinon.stub(UsersRepository, "count").resolves(0);
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient(
      "/users/name/email@email.com/password/0",
      "POST",
      port
    );
    expect(result.status).toBe("create");
  });

  it("delete", async () => {
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient("/users/1ad0sa!", "DELETE", port);
    expect(result.status).toBe("findByIdAndDelete");
  });

  it("update", async () => {
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient(
      "/users/update/id/name/email/password",
      "PUT",
      port
    );
    expect(result.status).toBe("findOneAndUpdate");
  });

  it("login", async () => {
    stubCrypto();
    sinonCommonStubs(UsersRepository);
    const result = await fetchClient(
      "/login/email@email.com/password",
      "GET",
      port
    );
    expect(result).toBe("tester");
  });
});
