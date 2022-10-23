import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";
import CryptoJS from "crypto-js";
import CryptoUtils from "../utils/CryptoUtils";

export class UsersService implements iUsersService {
  async get(_id: string) {
    return await UsersRepository.findById(_id);
  }

  async getAll() {
    return await UsersRepository.find({});
  }

  async userExists(email: string) {
    return await UsersRepository.count({
      email: email,
    });
  }

  async userRegister(
    name: string,
    email: string,
    password: string,
    type: string
  ) {
    const encryptedEmail = CryptoUtils.EncryptValue(email);
    return (await this.userExists(encryptedEmail)) === 0
      ? await UsersRepository.create({
          name: name,
          email: encryptedEmail,
          password: await CryptoUtils.EncryptValue(password),
          type: type,
        })
      : "user registered";
  }

  async updateUser(id: string, name: string, email: string, password: string) {
    const encryptedPassword = CryptoJS.SHA256(password);
    const encryptedEmail = CryptoJS.SHA256(email);
    await UsersRepository.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          email: encryptedEmail,
          password: encryptedPassword,
        },
      }
    );
    return { status: "success" };
  }

  async deleteUser(_id: string) {
    return await UsersRepository.findByIdAndDelete(_id);
  }

  async login(email: string, password: string) {
    const user = await UsersRepository.findOne({
      email: await CryptoUtils.EncryptValue(email),
      password: await CryptoUtils.EncryptValue(password),
    });
    const convertResult = JSON.stringify({
      id: user._id,
      type: user.type,
    });

    return await CryptoUtils.EncryptValue(convertResult);
  }
}

export default new UsersService();
