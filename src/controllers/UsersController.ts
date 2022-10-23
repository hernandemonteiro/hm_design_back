import { UsersService } from "../services/UsersServices";
import AccessAPI from "../utils/access.utils";
import CryptoUtils from "../utils/CryptoUtils";
import { errorPage } from "../utils/error.utils";

class UsersController {
  private _service: UsersService;

  constructor() {
    this._service = new UsersService();
  }

  async getAll(request, response) {
    try {
      const allUsers = await this._service.getAll();
      response.status(200).json(allUsers);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(request, response) {
    try {
      const id = request.params.id;
      const getByID = await this._service.get(id);
      response.status(200).json(getByID);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async userRegister(request, response) {
    try {
      const name: string = request.params.name;
      const email: string = request.params.email;
      const password: string = request.params.password;
      const type: string = request.params.type;
      const result = await this._service.userRegister(
        name,
        email,
        password,
        type
      );
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async updateUser(request, response) {
    try {
      const id: string = request.params.id;
      const name: string = request.params.name;
      const email: string = request.params.email;
      const password: string = request.params.password;
      const updateUser = await this._service.updateUser(
        id,
        name,
        email,
        password
      );
      response.status(200).json(updateUser);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteUser(request, response) {
    try {
      const id = request.params.id;
      const deleteUser = await this._service.deleteUser(id);
      response.status(200).json(deleteUser);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async login(request, response) {
    try {
      const email: string = request.params.email;
      const password: string = request.params.password;
      const token = await this._service.login(email, password);
      return response.status(200).json(token);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new UsersController();
