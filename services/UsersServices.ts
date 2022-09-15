import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";
import CryptoJS from "crypto-js";

export class UsersService implements iUsersService {
  async get(_id: string) {
    let result = await UsersRepository.findById(_id);
    return result;
  }

  async getAll() {
    let result = await UsersRepository.find({});
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
    const userIsRegistered = await UsersRepository.find({ email: encryptedEmail }).count(
      {}
    );

    if (userIsRegistered === 0) {
      let result = new UsersRepository({
        name: name,
        email: encryptedEmail,
        password: encryptedPassword,
        type: type,
      });

      result.save();
      return result;
    } else {
      let message = "user registered";
      return message;
    }
  }
  async updateUser(id: string, name: string, email: string, password: string) {
    const encryptedPassword = CryptoJS.SHA256(password);
    const encryptedEmail = CryptoJS.SHA256(email);
    try {
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
    } catch (error) {
      return { status: "Error: " + error.toString() };
    }
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
      return user;
    
  }
}
