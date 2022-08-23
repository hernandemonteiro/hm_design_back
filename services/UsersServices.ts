import { iUsersService } from "../contracts/iUsersServices";
import { Result } from "../infra/Result";
import { UsersRepository } from "../repository/UsersRepository";

export class UsersService implements iUsersService {
  async get(_id: string) {
    let result = await UsersRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    let result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await UsersRepository.count({});
    result.Data = await UsersRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
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

  async deleteUser(_id: string) {
    const deleteUser = await UsersRepository.findByIdAndDelete(_id);
    return deleteUser;
  }
}
