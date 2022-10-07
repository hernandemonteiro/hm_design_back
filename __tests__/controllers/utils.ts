import { jest } from "@jest/globals";

export function resConfig(fnName) {
    const res = {
      json: jest.fn(() => res),
      cookie: jest.fn(() => res),
      status: jest.fn((status) => {
        console.log(fnName + " return status: " + status);
        return res;
      }),
    };
    return res;
  }