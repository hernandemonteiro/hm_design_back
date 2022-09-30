import { OrderService } from "../services/OrderService";
import { Request, Response } from "express";

class OrderController {
  private _service: OrderService;

  constructor() {
    this._service = new OrderService();
  }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page ? parseInt(request.params.page) : 1;
      const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
      const result = await this._service.getAllWithLimit(page, qtd);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const result = await this._service.getAll();
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const _id = request.params.id;
      const result = await this._service.get(_id);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async registerOrder(request: Request, response: Response) {
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
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async deleteOrder(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const result = await this._service.deleteOrder(id);
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }

  async updateOrder(request: Request, response: Response){
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
      response.status(200).json({ result });
    } catch (error) {
      response.status(500).json("Error: " + error);
    }
  }
}

export default new OrderController();
