import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../utils/factory";
import UsersController from "../../controllers/UsersController";
import UsersService from "../../services/UsersServices";

jest.mock("../../services/UsersServices");

describe("Users tests", () => {
  it("get all users", async () => {
    const res = resConfig();
    const req = {};
    documentReturn(UsersService.getAll);
    await UsersController.getAll(req, res);
    reqErrorTest(UsersService.getAll);
    await UsersController.getAll(req, res);
    commonExpectsReturn(res, UsersService.getAll);
    expect(UsersService.getAll).toHaveBeenCalledWith();
  });

  it("get user by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "user_id_fake",
      },
    };
    documentReturn(UsersService.get);
    await UsersController.getById(req, res);
    reqErrorTest(UsersService.get);
    await UsersController.getById(req, res);
    commonExpectsReturn(res, UsersService.get);
    expect(UsersService.get).toHaveBeenCalledWith(req.params.id);
  });

  it("register an user", async () => {
    const res = resConfig();
    const req = {
      params: {
        name: "user test",
        email: "test@test.com",
        password: "test",
        type: "0",
      },
    };
    documentReturn(UsersService.userRegister);
    await UsersController.userRegister(req, res);
    reqErrorTest(UsersService.userRegister);
    await UsersController.userRegister(req, res);
    commonExpectsReturn(res, UsersService.userRegister);
    expect(UsersService.userRegister).toHaveBeenCalledWith(
      req.params.name,
      req.params.email,
      req.params.password,
      req.params.type
    );
  });

  it("update an user by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "user_id_fake",
        name: "user test",
        email: "test@test.com",
        password: "test",
      },
    };
    documentReturn(UsersService.updateUser);
    await UsersController.updateUser(req, res);
    reqErrorTest(UsersService.updateUser);
    await UsersController.updateUser(req, res);
    commonExpectsReturn(res, UsersService.updateUser);
    expect(UsersService.updateUser).toHaveBeenCalledWith(
      req.params.id,
      req.params.name,
      req.params.email,
      req.params.password
    );
  });

  it("delete a user by ID", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_fake",
      },
    };
    documentReturn(UsersService.deleteUser);
    await UsersController.deleteUser(req, res);
    reqErrorTest(UsersService.deleteUser);
    await UsersController.deleteUser(req, res);
    commonExpectsReturn(res, UsersService.deleteUser);
    expect(UsersService.deleteUser).toHaveBeenCalledWith(req.params.id);
  });

  it("login method", async () => {
    const res = resConfig();
    const req = {
      params: {
        email: "test@test.com",
        password: "test_pass",
      },
    };

    documentReturn(UsersService.login);
    await UsersController.login(req, res);
    reqErrorTest(UsersService.login);
    await UsersController.login(req, res);
    commonExpectsReturn(res, UsersService.login);
    expect(UsersService.login).toHaveBeenCalledWith(
      req.params.email,
      req.params.password
    );
  });
});
