"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const Result_1 = require("../infra/Result");
const OrderRepository_1 = require("../repository/OrderRepository");
class OrderService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderRepository_1.OrderRepository.findById(_id);
            return result;
        });
    }
    getAllWithLimit(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield OrderRepository_1.OrderRepository.count({});
            result.Data = yield OrderRepository_1.OrderRepository.find({})
                .skip(page * qtd - qtd)
                .limit(qtd);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderRepository_1.OrderRepository.find({});
            return result;
        });
    }
    registerOrder(user_id, address, order_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new OrderRepository_1.OrderRepository({
                user_id: user_id,
                address: address,
                order_id: order_id,
                status: status,
            });
            result.save();
            return result;
        });
    }
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderRepository_1.OrderRepository.findByIdAndDelete(id);
            return result;
        });
    }
    updateOrder(id, user_id, address, order_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield OrderRepository_1.OrderRepository.findOneAndUpdate({ _id: id }, {
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
        });
    }
}
exports.OrderService = OrderService;
