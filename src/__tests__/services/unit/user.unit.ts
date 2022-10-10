import { describe, it, jest, expect } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
  dotEnvMock,
} from "../../utils/factory";
import UsersService from "../../../services/UsersServices";
import { UsersRepository } from "../../../repository/UsersRepository";

jest.mock("../../../repository/UsersRepository");

describe("User service test", () => {
  // dotenv mock:
  dotEnvMock();

  it("get User by id", async () => {
    documentReturn(UsersRepository.findById);
    const getByID = await UsersService.get("id");
    commonExpectsServicesReturn(getByID);
  });

  it("get all Users", async () => {
    documentReturn(UsersRepository.find);
    const allUsers = await UsersService.getAll();
    commonExpectsServicesReturn(allUsers);
  });

  it("register an user", async () => {
    jest.mocked(UsersRepository.count).mockResolvedValue(0);
    documentReturn(UsersRepository.create);
    const insertedProduct = await UsersService.userRegister(
      "name",
      "email",
      "password",
      "0"
    );
    commonExpectsServicesReturn(insertedProduct);

    // to test error branch:
    jest.mocked(UsersRepository.count).mockResolvedValue(1);
    await UsersService.userRegister("name", "email", "password", "0");
  });

  it("delete User", async () => {
    documentReturn(UsersRepository.findByIdAndDelete);
    const deleteUser = await UsersService.deleteUser("id");
    commonExpectsServicesReturn(deleteUser);
  });

  it("update User", async () => {
    documentReturn(UsersRepository.findByIdAndUpdate);
    const updateUser = await UsersService.updateUser(
      "id",
      "name",
      "email",
      "password"
    );
    commonExpectsServicesReturn(updateUser);
  });

  it("user login", async () => {
    process.env.HASH_SECRET = "development";
    jest.mocked(UsersRepository.findOne).mockResolvedValueOnce({
      _id: "id",
      type: "0",
    });
    await UsersService.login("email", "password");
    expect(UsersRepository.findOne).toHaveBeenCalledTimes(1);
  });
});
