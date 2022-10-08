import { UsersService } from "../services/UsersServices";

class UsersController {
  private _service: UsersService;

  constructor() {
    this._service = new UsersService();
  }

  async getAll(request, response) {
    try {
      const result = await this._service.getAll();
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(request, response) {
    try {
      const _id = request.params.id;
      const result = await this._service.get(_id);
      response.status(200).json(result);
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
      const result = await this._service.updateUser(id, name, email, password);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteUser(request, response) {
    try {
      const _id: string = request.params.id;
      const result = await this._service.deleteUser(_id);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async login(request, response) {
    try {
      const email: string = request.params.email;
      const password: string = request.params.password;
      const result = await this._service.login(email, password);
      return response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new UsersController();
