import { jest, describe, it, expect, beforeAll } from "@jest/globals";
import fetch from "node-fetch";
import StartUp from "../../StartUp";
import Database from "../../infra/db";
import sinon from "sinon";
import { CartRepository } from "../../repository/CartRepository";
import dotenv from 'dotenv';
dotenv.config();

jest.mock("../../infra/db");

describe("cart integration test", () => {
  beforeAll(() => {
    jest.mocked(Database.createConnection);
    StartUp.app.listen(8585, () => console.log(StartUp.app._router));
  });
  it("get all products", async () => {
    sinon.stub(CartRepository, "find").returns({ status: "success" });
    const fetchCart = await fetch("http://localhost:8585/cart", {
      method: "GET",
      headers: {
        // how i use the secrets to fix error in github?
        "x-access-token": process.env.HASH_TEST,
      },
    })
      .then((Response) => Response.json())
      .then((Response) => {
        return Response;
      });
      console.log(fetchCart)
    // expect(fetchCart.status).toBe("success");
  });
});
