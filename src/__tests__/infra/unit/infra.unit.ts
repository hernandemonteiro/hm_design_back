import { describe, it, jest } from "@jest/globals";
import Database from "../../../infra/db";
import { Result } from "../../../infra/Result";

jest.mock("../../../infra/db");
describe("infra tests", () => {
  // it("create a database instance", () => Database.createConnection());
  it("return an Result request interface", () => {
    const result = new Result();
    result.Page = 1;
    result.Qtd = 10;
    result.Total = 20;
    result.Data = {
      status: "success",
    };
  });
});
