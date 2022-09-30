import { ForgotPasswordService } from "../services/ForgotPasswordService";
import { Request, Response } from "express";

class ForgotPasswordController {
  private _service: ForgotPasswordService;

  constructor() {
    this._service = new ForgotPasswordService();
  }

  async forgotPassword(request: Request, response: Response) {
    try {
      const email = request.params.email;
      const result = await this._service.forgotPassword(email);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async confirmHash(request: Request, response: Response){
    try {
      const hash = request.params.hash;
      const result = await this._service.confirmHash(hash);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async updatePassword(request: Request, response: Response){
    try {
      const hash = request.params.hash;
      const password = request.params.password;
      const result = await this._service.updatePassword(hash, password);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new ForgotPasswordController();
