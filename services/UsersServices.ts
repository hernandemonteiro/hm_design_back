import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";

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
    const userIsRegistered = await UsersRepository.find({ email: email }).count(
      {}
    );

    if (userIsRegistered == 0) {
      let result = new UsersRepository({
        name: name,
        email: email,
        password: password,
        type: type,
      });

      result.save();
      return result;
    } else {
      let message = "Usuário já cadastrado";
      return message;
    }
  }
  async updateUser(id: string, name: string, email: string, password: string) {
    try {
      const updatedUser = await UsersRepository.findOneAndUpdate(
        { _id: id },
        { $set: { name: name, email: email, password: password } }
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
      const user = await UsersRepository.findOne({
        email: email,
        password: password,
      });
      return user;
  }
}
