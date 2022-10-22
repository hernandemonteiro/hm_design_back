import { CartService } from "../services/CartService";

class CartController {
  private _service: CartService;
  constructor() {
    this._service = new CartService();
  }

  async get(request, response) {
    try {
      const page = request.params.page;
      const qtd = request.params.qtd;
      const result = await this._service.getAllWithLimit(page, qtd);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
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

  async deleteProductCart(request, response) {
    try {
      const _id = request.params.id;
      const result = await this._service.deleteProductCart(_id);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async registerProductCart(request, response) {
    try {
      const productToInsert = {
        user_id: request.params.user_id,
        quantity: request.params.quantity,
        product_id: request.params.product_id,
        product: request.params.product,
        unit_price: request.params.unit_price,
        total_price: request.params.total_price,
        order_id: request.params.order_id,
        status: request.params.status,
      };
      const register = await this._service.registerProductCart(productToInsert);
      response.status(200).json(register);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async updateProductCart(request, response) {
    try {
      const productToUpdate = {
        id: request.params.id,
        user_id: request.params.user_id,
        quantity: request.params.quantity,
        product_id: request.params.product_id,
        product: request.params.product,
        unit_price: request.params.unit_price,
        total_price: request.params.total_price,
        status: request.params.status,
      };
      const update = await this._service.updateProductCart(productToUpdate);
      response.status(200).json(update);
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new CartController();
