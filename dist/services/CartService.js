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
exports.CartService = void 0;
const Result_1 = require("../infra/Result");
const CartRepository_1 = require("../repository/CartRepository");
class CartService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CartRepository_1.CartRepository.findById(_id);
            return result;
        });
    }
    getAllWithLimit(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield CartRepository_1.CartRepository.count({});
            result.Data = yield CartRepository_1.CartRepository.find({})
                .skip(page * qtd - qtd)
                .limit(qtd);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CartRepository_1.CartRepository.find({});
            return result;
        });
    }
    deleteProductCart(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteProductCart = yield CartRepository_1.CartRepository.findByIdAndDelete(_id);
            return deleteProductCart;
        });
    }
    registerProductCart(user_id, quantity, product_id, product, unit_price, total_price, order_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const registeredProduct = new CartRepository_1.CartRepository({
                user_id: user_id,
                quantity: quantity,
                product_id: product_id,
                product: product,
                unit_price: unit_price,
                total_price: total_price,
                order_id: order_id,
                status: status,
            });
            registeredProduct.save();
            return registeredProduct;
        });
    }
    updateProductCart(id, user_id, quantity, product_id, product, unit_price, total_price, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield CartRepository_1.CartRepository.findOneAndUpdate({ _id: id }, {
                    $set: {
                        user_id: user_id,
                        quantity: quantity,
                        product_id: product_id,
                        product: product,
                        unit_price: unit_price,
                        total_price: total_price,
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
exports.CartService = CartService;
