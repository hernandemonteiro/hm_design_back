import { UsersService } from "../services/UsersServices";
import { Request, Response } from "express";

class UsersController {
  private _service: UsersService;

  constructor() {
    this._service = new UsersService();
  }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page ? parseInt(request.params.page) : 1;
      const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
      let result = await this._service.getAllWithLimit(page, qtd);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
      console.log(error);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      let result = await this._service.getAll();
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
      console.log(error);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const _id = request.params.id;
      let result = await this._service.get(_id);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async userRegister(request: Request, response: Response) {
    try {
      const name: any = request.query.name;
      const email: any = request.query.email;
      const password: any = request.query.password;
      const type: any = request.query.type;
      let result = await this._service.userRegister(
        name,
        email,
        password,
        type
      );
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteUser(request: Request, response: Response) {
    try {
      const _id: any = request.params.id;
      let result = await this._service.deleteUser(_id);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new UsersController();
