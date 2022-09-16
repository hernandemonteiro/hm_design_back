import { CategoryService } from "../services/CategoryService";
import { Request, Response } from "express";

class CategoryController {
  private _service: CategoryService;

  constructor() {
    this._service = new CategoryService();
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

  async registerCategory(request: Request, response: Response) {
    try {
      const category = request.params.category;
      let result = await this._service.registerCategory(category);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteCategory(request: Request, response: Response) {
    try {
      const id = request.params.id;
      let result = await this._service.deleteCategory(id);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }

  async updateCategory(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const category = request.params.category;
      let result = await this._service.updateCategory(id, category);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }
}

export default new CategoryController();
