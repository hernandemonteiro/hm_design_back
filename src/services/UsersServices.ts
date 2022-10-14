import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";
import CryptoJS from "crypto-js";
import { cryptoEncrypt } from "../utils/crypto.utils";

export class UsersService implements iUsersService {
  async get(_id: string) {
    const result = await UsersRepository.findById(_id);
    return result;
  }

  async getAll() {
    const result = await UsersRepository.find({});
    return result;
  }

  async userRegister(
    name: string,
    email: string,
    password: string,
    type: string
  ) {
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    const encryptedEmail = CryptoJS.SHA256(email).toString();
    const userIsRegistered = await UsersRepository.count({
      email: encryptedEmail,
    });

    if (userIsRegistered === 0) {
      const result = await UsersRepository.create({
        name: name,
        email: encryptedEmail,
        password: encryptedPassword,
        type: type,
      });
      return result;
    } else {
      const message = "user registered";
      return message;
    }
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
    const deleteUser = await UsersRepository.findByIdAndDelete(_id);
    return deleteUser;
  }

  async login(email: string, password: string) {
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    const encryptedEmail = CryptoJS.SHA256(email).toString();
    const user = await UsersRepository.findOne({
      email: encryptedEmail,
      password: encryptedPassword,
    });
    const convertResult = JSON.stringify({
      id: user._id,
      type: user.type,
    });
    const jwt = cryptoEncrypt(convertResult);
    return jwt;
  }
}

export default new UsersService();
