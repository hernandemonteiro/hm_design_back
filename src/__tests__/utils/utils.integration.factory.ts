import { jest, afterEach } from "@jest/globals";
import fetch from "node-fetch";
import Database from "../../infra/db";
import StartUp from "../../StartUp";
import { dotEnvMock } from "./utils.unit.factory";
import sinon from "sinon";
import dotEnv from "dotenv";
dotEnv.config();

jest.mock("../../infra/db");
jest.mock("dotenv");

export function sinonIntegrationStubs(service) {
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

export function sinonIntegrationSkips(service) {
  sinon.stub(service, "count").returns(1);
  sinon.stub(service, "find").returns({
    skip: (n) => {
      return {
        limit: (m) => {
          return new Promise((resolve) => {
            resolve({ status: "skipFunction" });
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
  StartUp.app.listen(port);
  afterEach(() => sinon.restore());
}

export async function fetchClient(route: string, method: string, port) {
  const fetchClient = await fetch(`http://localhost:${port}${route}`, {
    method: method,
    headers: {
      "x-access-token": "/lZunqpAUMGBXlJ6fP2JSg==",
    },
  })
    .then((Response) => Response.json())
    .then((Response) => {
      return Response;
    });
  return fetchClient;
}

export async function fetchClientFailed(route: string, method: string) {
  const fetchClientFailed = await fetch(`http://localhost:8585${route}`, {
    method: method,
    headers: {
      "x-access-token": "Failed",
    },
  }).then((Response) => {
    return Response;
  });
  return fetchClientFailed;
}
