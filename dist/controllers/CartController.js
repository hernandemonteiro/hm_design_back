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
const CartService_1 = require("../services/CartService");
class CartController {
    constructor() {
        this._service = new CartService_1.CartService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = request.params.page ? parseInt(request.params.page) : 1;
                const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
                let result = yield this._service.getAllWithLimit(page, qtd);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._service.getAll();
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = request.params.id;
                let result = yield this._service.get(_id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    deleteProductCart(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = request.params.id;
                let result = yield this._service.deleteProductCart(_id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    registerProductCart(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = request.params.user_id;
                const quantity = request.params.quantity;
                const product_id = request.params.product_id;
                const product = request.params.product;
                const unit_price = request.params.unit_price;
                const total_price = request.params.total_price;
                const order_id = request.params.order_id;
                const status = request.params.status;
                let result = yield this._service.registerProductCart(user_id, quantity, product_id, product, unit_price, total_price, order_id, status);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    updateProductCart(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params.id;
                const user_id = request.params.user_id;
                const quantity = request.params.quantity;
                const product_id = request.params.product_id;
                const product = request.params.product;
                const unit_price = request.params.unit_price;
                const total_price = request.params.total_price;
                const status = request.params.status;
                let result = yield this._service.updateProductCart(id, user_id, quantity, product_id, product, unit_price, total_price, status);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
}
exports.default = new CartController();
