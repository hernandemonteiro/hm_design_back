import { OrderService } from "../services/OrderService";

class OrderController {
  private _service: OrderService;

  constructor() {
    this._service = new OrderService();
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
      const result = await this._service.get(_id);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async registerOrder(request, response) {
    try {
      const user_id = request.params.user_id;
      const address = request.params.address;
      const order_id = request.params.order_id;
      const status = request.params.status;
      const result = await this._service.registerOrder(
        user_id,
        address,
        order_id,
        status
      );
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async deleteOrder(request, response) {
    try {
      const id = request.params.id;
      const result = await this._service.deleteOrder(id);
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }

  async updateOrder(request, response){
    try {
      const id = request.params.id;
      const user_id = request.params.user_id;
      const address = request.params.address;
      const order_id = request.params.order_id;
      const status = request.params.status;
      const result = await this._service.updateOrder(
        id,
        user_id,
        address,
        order_id,
        status
      );
      response.status(200).json( result );
    } catch (error) {
      response.status(500).json({ error: error.message  || error.toString()});
    }
  }
}

export default new OrderController();
