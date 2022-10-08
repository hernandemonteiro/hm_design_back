import { describe, it } from "@jest/globals";
import Database from "../../infra/db";
import { Result } from "../../infra/Result";

describe("infra tests", () => {
  it("create a database connection", async () => {
    const db = new Database();
    await db.createConnection();
  });
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
