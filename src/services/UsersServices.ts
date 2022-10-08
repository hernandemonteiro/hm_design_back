import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";
import CryptoJS from "crypto-js";

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
    const userIsRegistered = await UsersRepository.find({
      email: encryptedEmail,
    }).count({});

    if (userIsRegistered === 0) {
      const result = new UsersRepository({
        name: name,
        email: encryptedEmail,
        password: encryptedPassword,
        type: type,
      });

      result.save();
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
    // encrypted hash;
    const iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
    const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
    const jwt = CryptoJS.AES.encrypt(convertResult, secret, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    return jwt;
  }
}

export default new UsersService();
