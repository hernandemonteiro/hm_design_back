"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const Result_1 = require("../infra/Result");
const OrderRepository_1 = require("../repository/OrderRepository");
class OrderService {
    async get(_id) {
        const result = await OrderRepository_1.OrderRepository.findById(_id);
        return result;
    }
    async getAllWithLimit(page, qtd) {
        const result = new Result_1.Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await OrderRepository_1.OrderRepository.count({});
        result.Data = await OrderRepository_1.OrderRepository.find({})
            .skip(page * qtd - qtd)
            .limit(qtd);
        return result;
    }
    async getAll() {
        const result = await OrderRepository_1.OrderRepository.find({});
        return result;
    }
    async registerOrder(user_id, address, order_id, status) {
        const result = await new OrderRepository_1.OrderRepository({
            user_id: user_id,
            address: address,
            order_id: order_id,
            status: status,
        });
        result.save();
        return result;
    }
    async deleteOrder(id) {
        const result = await OrderRepository_1.OrderRepository.findByIdAndDelete(id);
        return result;
    }
    async updateOrder(id, user_id, address, order_id, status) {
        try {
            await OrderRepository_1.OrderRepository.findOneAndUpdate({ _id: id }, {
                $set: {
                    user_id: user_id,
                    address: address,
                    order_id: order_id,
                    status: status,
                },
            });
            return { status: "success" };
        }
        catch (error) {
            return { status: "Error: " + error.toString() };
        }
    }
}
exports.OrderService = OrderService;
