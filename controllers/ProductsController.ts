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

  async getPerCategory(request: Request, response: Response) {
    try {
      const category = request.params.category;
      let result = await this._service.getPerCategory(category);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getPerSearch(request: Request, response: Response){
    try {
      const search = request.params.search;
      let result = await this._service.getPerSearch(search);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }

  async deleteProduct(request: Request, response: Response) {
    try {
      const id = request.params.id;
      let result = await this._service.deleteProduct(id);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }

  async registerProduct(request: Request, response: Response) {
    try {
      const name = request.params.name;
      const price = request.params.price;
      const description = request.params.description;
      const category = request.params.category;
      const images = request.params.images;
      const options = request.params.options;
      let result = await this._service.registerProduct(
        name,
        price,
        images,
        description,
        category,
        options
      );
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }

  async updateProduct(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const name = request.params.name;
      const price = request.params.price;
      const description = request.params.description;
      const images = request.params.images;
      const status = request.params.status;
      const options = request.params.options;
      let result = await this._service.updateProduct(
        id,
        name,
        price,
        description,
        images,
        status,
        options
      );
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }
}

export default new ProductsController();
