import { jest, describe, it, expect, beforeAll } from "@jest/globals";
import fetch from "node-fetch";
import StartUp from "../../StartUp";
import Database from "../../infra/db";
import sinon from "sinon";
import { CartRepository } from "../../repository/CartRepository";
import { dotEnvMock } from "../utils/factory";
import dotEnv from "dotenv";
dotEnv.config();

jest.mock("../../infra/db");
jest.mock("dotenv");

describe("cart integration test", () => {
  dotEnvMock();

  beforeAll(() => {
    jest.mocked(Database.createConnection);
    process.env.HASH_SECRET = "tester";
    StartUp.app.listen(8585, () => console.log("on air!"));
  });

  it("get all products", async () => {
    sinon.stub(CartRepository, "find").returns({ status: "success" });
    const fetchCart = await fetch("http://localhost:8585/cart", {
      method: "GET",
      headers: {
        // how i use the secrets to fix error in github?
        "x-access-token": "/lZunqpAUMGBXlJ6fP2JSg==",
      },
    })
      .then((Response) => Response.json())
      .then((Response) => {
        return Response;
      });
    expect(fetchCart.status).toBe("success");
  });
});
