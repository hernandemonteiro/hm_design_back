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
      const result = await this._service.get(_id)
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async deleteProductCart(request, response) {
    try {
      const _id = request.params.id;
      const result = await this._service.deleteProductCart(_id);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async registerProductCart(request, response) {
    try {
      const user_id = request.params.user_id;
      const quantity = request.params.quantity;
      const product_id = request.params.product_id;
      const product = request.params.product;
      const unit_price = request.params.unit_price;
      const total_price = request.params.total_price;
      const order_id = request.params.order_id;
      const status = request.params.status;
      const result = await this._service.registerProductCart(
        user_id,
        quantity,
        product_id,
        product,
        unit_price,
        total_price,
        order_id,
        status
      );
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async updateProductCart(request, response) {
    try {
      const id = request.params.id;
      const user_id = request.params.user_id;
      const quantity = request.params.quantity;
      const product_id = request.params.product_id;
      const product = request.params.product;
      const unit_price = request.params.unit_price;
      const total_price = request.params.total_price;
      const status = request.params.status;
      const result = await this._service.updateProductCart(
        id,
        user_id,
        quantity,
        product_id,
        product,
        unit_price,
        total_price,
        status
      );
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }
}

export default new CartController();
