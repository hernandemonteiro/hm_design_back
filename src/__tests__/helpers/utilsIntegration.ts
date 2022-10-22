import { jest, afterEach, beforeEach } from "@jest/globals";
import fetch from "node-fetch";
import Database from "../../infra/db";
import StartUp from "../../StartUp";
import { dotEnvMock } from "./utilsUnit";
import sinon from "sinon";
import dotEnv from "dotenv";
import CryptoUtils from "../../utils/CryptoUtils";
dotEnv.config();

jest.mock("../../infra/db");
jest.mock("dotenv");
jest.mock("../../utils/CryptoUtils");

export function sinonCommonStubs(service) {
  sinon.stub(service, "find").returns({ status: "find" });
  sinon.stub(service, "findById").returns({ status: "findByID" });
  sinon.stub(service, "create").returns({ status: "create" });
  sinon.stub(service, "findOne").returns({ status: "findOne" });
  sinon
    .stub(service, "findByIdAndDelete")
    .returns({ status: "findByIdAndDelete" });
  sinon
    .stub(service, "findOneAndUpdate")
    .returns({ status: "findOneAndUpdate" });
}

export function sinonSkips(service) {
  sinon.stub(service, "count").returns(1);
  sinon.stub(service, "find").returns({
    skip: (n) => {
      n;
      return {
        limit: (m) => {
          return new Promise((resolve) => {
            resolve({ status: "skipFunction" });
            m;
          });
        },
      };
    },
  });
}

export function configClient(port) {
  dotEnvMock();
  jest.mocked(Database.createConnection);
  process.env.HASH_SECRET = "tester";
  beforeEach(() => {
    jest.mocked(CryptoUtils.DecryptValue).mockResolvedValueOnce("tester");
  });
  StartUp.app.listen(port);
  afterEach(() => sinon.restore());
}

export async function fetchClient(route: string, method: string, port) {
  return await fetch(`http://localhost:${port}${route}`, {
    method: method,
    headers: {
      "x-access-token": "requestToken",
    },
  }).then(async (Response) => await Response.json());
}

export async function fetchClientFailed(route: string, method: string) {
  return await fetch(`http://localhost:8585${route}`, {
    method: method,
    headers: {
      "x-access-token": "Failed",
    },
  }).then((Response) => Response);
}
