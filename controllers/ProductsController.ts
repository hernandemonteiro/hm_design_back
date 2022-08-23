import { ProductsService } from "../services/ProductsService";
import { Request, Response } from "express";

class ProductsController {
  private _service: ProductsService;

  constructor() {
    this._service = new ProductsService();
  }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page ? parseInt(request.params.page) : 1;
      const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
      let result = await this._service.getAllWithLimit(page, qtd);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      let result = await this._service.getAll();
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
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
}

export default new ProductsController();
