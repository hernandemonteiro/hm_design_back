import {
  describe,
  it,
  jest,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { documentReturn, dotEnvMock } from "../../utils/factory";
import nodemailer from "nodemailer";
import ForgotPasswordService from "../../../services/ForgotPasswordService";
import { ForgotPasswordRepository } from "../../../repository/ForgotPasswordRepository";
import { UsersRepository } from "../../../repository/UsersRepository";

jest.mock("../../../repository/ForgotPasswordRepository");
jest.mock("../../../repository/UsersRepository");
jest.mock("nodemailer");

describe("Forgot Password service test", () => {
  // dot env mock call;
  dotEnvMock();

  const sendMailMock = jest.fn();
  beforeEach(() => {
    sendMailMock.mockClear();
    nodemailer.createTransport.mockClear();
  });
  afterEach(() => {
    jest.mocked(ForgotPasswordRepository.count).mockClear();
  });

  it("send a email from a registered user", async () => {
    process.env.HASH_SECRET = "developmentTest";
    process.env.EMAIL_HM = "test@test.com";
    process.env.EMAIL_PASSWORD = "developmentTest";

    jest.mocked(UsersRepository.count).mockResolvedValueOnce(1);
    jest.mocked(ForgotPasswordRepository.count).mockResolvedValueOnce(0);
    documentReturn(ForgotPasswordRepository.create);
    nodemailer.createTransport.mockReturnValue({
      sendMail: sendMailMock,
    });
    await ForgotPasswordService.forgotPassword("teste@teste.com");
    jest.mocked(UsersRepository.count).mockResolvedValueOnce(0);
    const userNotExists = await ForgotPasswordService.forgotPassword(
      "teste@teste.com"
    );
    expect(userNotExists).toBe("Usuário não existe!");
    expect(UsersRepository.count).toHaveBeenCalledTimes(2);
    expect(ForgotPasswordRepository.count).toHaveBeenCalledTimes(2);
    expect(ForgotPasswordRepository.create).toHaveBeenCalledTimes(1);
  });

  it("confirm a hash to change the password", async () => {
    jest.mocked(ForgotPasswordRepository.count).mockResolvedValueOnce(1);
    const confirmHash = await ForgotPasswordService.confirmHash("hash");
    expect(ForgotPasswordRepository.count).toHaveBeenCalledTimes(1);
    expect(confirmHash).toBe(1);
  });

  it("update a password with a confirmed hash", async () => {
    process.env.HASH_SECRET = "development";
    documentReturn(ForgotPasswordRepository.findOneAndDelete);
    documentReturn(UsersRepository.findOneAndUpdate);
    const updatedPassword = await ForgotPasswordService.updatePassword(
      "hash",
      "pass"
    );
    expect(updatedPassword).toBe("Success");
    jest.mocked(UsersRepository.findOneAndUpdate).mockResolvedValueOnce(null);
    const updatedPasswordFailed = await ForgotPasswordService.updatePassword(
      "hash",
      "pass"
    );
    expect(updatedPasswordFailed).toBe("Failure");
    expect(ForgotPasswordRepository.findOneAndDelete).toHaveBeenCalledTimes(2);
    expect(UsersRepository.findOneAndUpdate).toHaveBeenCalledTimes(2);
  });
});
