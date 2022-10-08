import { CategoryService } from "../services/CategoryService";

class CategoryController {
  private _service: CategoryService;

  constructor() {
    this._service = new CategoryService();
  }

  async get(request, response) {
    try {
      const page = request.params.page ? parseInt(request.params.page) : 1;
      const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
      const result = await this._service.getAllWithLimit(page, qtd);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async getAll(request, response) {
    try {
      const result = await this._service.getAll();
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async getById(request, response) {
    try {
      const _id = request.params.id;
      const result = await this._service.get(_id);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async registerCategory(request, response) {
    try {
      const category = request.params.category;
      const result = await this._service.registerCategory(category);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async deleteCategory(request, response) {
    try {
      const id = request.params.id;
      const result = await this._service.deleteCategory(id);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async updateCategory(request, response) {
    try {
      const id = request.params.id;
      const category = request.params.category;
      const result = await this._service.updateCategory(id, category);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }
}

export default new CategoryController();
