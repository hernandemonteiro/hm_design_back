import { jest, expect, beforeEach, afterEach } from "@jest/globals";
import sinon from "sinon";

// basic config to a Response:
export function resConfig() {
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(() => res),
  };
  return res;
}

// simulate an error:
export function reqErrorTest(mockFn) {
  jest.mocked(mockFn).mockRejectedValueOnce("test error");
}

// simulate a object return:
export function documentReturn(mockFn) {
  jest.mocked(mockFn).mockResolvedValueOnce({
    status: "success",
  });
}

// common expects results:
export function commonExpectsReturn(res, service) {
  // return a object;
  expect(res.json.mock.calls[0][0].status).toBe("success");
  expect(res.json.mock.calls[1][0].error).toBe("test error");

  // 2 calls to test a success or an error case:
  expect(res.json).toHaveBeenCalledTimes(2);
  expect(service).toHaveBeenCalledTimes(2);

  // success status:
  expect(res.status.mock.calls[0][0]).toBe(200);

  // error status:
  expect(res.status.mock.calls[1][0]).toBe(500);
}

// common expects return to services:
export function commonExpectsServicesReturn(mockFn) {
  // test the response:
  expect(mockFn.status).toBe("success");
}

// test a skiped Result Object find;
export function resultPromise(service) {
  sinon.stub(service, "find").returns({
    skip: (n) => {
      return {
        limit: (m) => {
          return new Promise((resolve, reject) => {
            resolve({ status: "success" });
          });
        },
      };
    },
  });
}

// environment variables mock;
export function dotEnvMock() {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });
}
