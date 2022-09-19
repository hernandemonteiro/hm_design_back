import { UsersService } from "../services/UsersServices";
import { Request, Response } from "express";
import CryptoJS from "crypto-js";

class UsersController {
  private _service: UsersService;

  constructor() {
    this._service = new UsersService();
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
      const name: any = request.params.name;
      const email: any = request.params.email;
      const password: any = request.params.password;
      const type: any = request.params.type;
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

  async updateUser(request: Request, response: Response) {
    try {
      const id: string = request.params.id;
      const name: string = request.params.name;
      const email: string = request.params.email;
      const password: string = request.params.password;
      let result = await this._service.updateUser(id, name, email, password);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteUser(request: Request, response: Response) {
    try {
      const _id: string = request.params.id;
      let result = await this._service.deleteUser(_id);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async login(request: Request, response: Response) {
    try {
      const email: string = request.params.email;
      const password: string = request.params.password;
      let result = await this._service.login(email, password);
      const convertResult = JSON.stringify({
        id: result._id,
        type: result.type,
      });
      // encrypted hash;
      var iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
      const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
      const jwt = CryptoJS.AES.encrypt(convertResult, secret, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();

      return response.status(200).json({ jwt });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new UsersController();
