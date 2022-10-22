import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { ForgotPasswordRepository } from "../../repository/ForgotPasswordRepository";
import { UsersRepository } from "../../repository/UsersRepository";
import {
  configClient,
  sinonCommonStubs,
  fetchClient,
} from "../helpers/utilsIntegration";
import sinon from "sinon";
import nodemailer from "nodemailer";


jest.mock("nodemailer");

describe("/forgotPassword", () => {
  const port = 8003;
  configClient(port);
  
  // const sendMailMock = jest.fn();
  // beforeEach(() => {
  //   sendMailMock.mockClear();
  //   nodemailer.createTransport.mockClear();
  // });
  // afterEach(() => {
  //   jest.mocked(ForgotPasswordRepository.count).mockClear();
  // });

  // it("send an email to user registered", async () => {
  //   process.env.HASH_SECRET = "developmentTest";
  //   process.env.EMAIL_HM = "test@test.com";
  //   process.env.EMAIL_PASSWORD = "developmentTest";

  //   jest.mocked(UsersRepository.count).mockResolvedValueOnce(1);
  //   jest.mocked(ForgotPasswordRepository.count).mockResolvedValueOnce(0);
  //   sinon
  //     .stub(ForgotPasswordRepository, "create")
  //     .returns({ status: "nodemailerFake" });
  //   nodemailer.createTransport.mockReturnValue({
  //     sendMail: sendMailMock,
  //   });

  //   const result = await fetchClient(
  //     "/forgotPassword/test@test.com",
  //     "POST",
  //     port
  //   );
  //   console.log(result);
  // });

  it("confirm hash", async () => {
    sinon.stub(ForgotPasswordRepository, "count").returns(1);
    const result = await fetchClient("/confirmHash/hash", "GET", port);
    expect(result).toBe(1);
  });

  it("update a password", async () => {
    sinon
      .stub(ForgotPasswordRepository, "findOneAndDelete")
      .returns({ status: "deleted" });
    sinon
      .stub(UsersRepository, "findOneAndUpdate")
      .returns({ status: "updated" });
    const result = await fetchClient(
      "/updatePassword/:hash/:password",
      "PUT",
      port
    );
    expect(result).toBe("Success");
  });
});
