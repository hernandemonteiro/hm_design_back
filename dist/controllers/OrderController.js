"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderService_1 = require("../services/OrderService");
class OrderController {
    _service;
    constructor() {
        this._service = new OrderService_1.OrderService();
    }
    async get(request, response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            const result = await this._service.getAllWithLimit(page, qtd);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getAll(request, response) {
        try {
            const result = await this._service.getAll();
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getById(request, response) {
        try {
            const _id = request.params.id;
            const result = await this._service.get(_id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async registerOrder(request, response) {
        try {
            const user_id = request.params.user_id;
            const address = request.params.address;
            const order_id = request.params.order_id;
            const status = request.params.status;
            const result = await this._service.registerOrder(user_id, address, order_id, status);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async deleteOrder(request, response) {
        try {
            const id = request.params.id;
            const result = await this._service.deleteOrder(id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
    async updateOrder(request, response) {
        try {
            const id = request.params.id;
            const user_id = request.params.user_id;
            const address = request.params.address;
            const order_id = request.params.order_id;
            const status = request.params.status;
            const result = await this._service.updateOrder(id, user_id, address, order_id, status);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
}
exports.default = new OrderController();
