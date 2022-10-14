import { describe, it, jest } from "@jest/globals";
import Database from "../../infra/db";
import mongoose from "mongoose";

jest.mock("mongoose");

describe("infra tests", () => {
  it("create a database instance", () => {
    jest.mocked(mongoose.connect);
    Database.createConnection();
  });
});
