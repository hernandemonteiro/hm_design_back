import { jest, expect } from "@jest/globals";

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
  jest.mocked(mockFn).mockImplementation(() => {
    throw new Error("test error");
  });
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
