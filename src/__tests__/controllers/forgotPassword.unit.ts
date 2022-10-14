import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../utils/utils.unit.factory";
import ForgotPasswordController from "../../controllers/ForgotPasswordController";
import ForgotPasswordService from "../../services/ForgotPasswordService";

jest.mock("../../services/ForgotPasswordService");

describe("Forgot Password tests", () => {
  it("send an email to recovery password", async () => {
    const res = resConfig();
    const req = {
      params: {
        email: "fake@fake.com",
      },
    };
    documentReturn(ForgotPasswordService.forgotPassword);
    await ForgotPasswordController.forgotPassword(req, res);
    reqErrorTest(ForgotPasswordService.forgotPassword);
    await ForgotPasswordController.forgotPassword(req, res);
    commonExpectsReturn(res, ForgotPasswordService.forgotPassword);
    expect(ForgotPasswordService.forgotPassword).toHaveBeenCalledWith(
      req.params.email
    );
  });

  it("confirm the hash to recovery", async () => {
    const res = resConfig();
    const req = {
      params: {
        hash: "fake_hash",
      },
    };
    documentReturn(ForgotPasswordService.confirmHash);
    await ForgotPasswordController.confirmHash(req, res);
    reqErrorTest(ForgotPasswordService.confirmHash);
    await ForgotPasswordController.confirmHash(req, res);
    commonExpectsReturn(res, ForgotPasswordService.confirmHash);
    expect(ForgotPasswordService.confirmHash).toHaveBeenCalledWith(
      req.params.hash
    );
  });

  it("update a password", async () => {
    const res = resConfig();
    const req = {
      params: {
        hash: "fake_hash",
        password: "fake_pass",
      },
    };
    documentReturn(ForgotPasswordService.updatePassword);
    await ForgotPasswordController.updatePassword(req, res);
    reqErrorTest(ForgotPasswordService.updatePassword);
    await ForgotPasswordController.updatePassword(req, res);
    commonExpectsReturn(res, ForgotPasswordService.updatePassword);
    expect(ForgotPasswordService.updatePassword).toHaveBeenCalledWith(
      req.params.hash,
      req.params.password
    );
  });
});
