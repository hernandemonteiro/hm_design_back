"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const Result_1 = require("../infra/Result");
const CartRepository_1 = require("../repository/CartRepository");
class CartService {
    async get(_id) {
        const result = await CartRepository_1.CartRepository.findById(_id);
        return result;
    }
    async getAllWithLimit(page, qtd) {
        const result = new Result_1.Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await CartRepository_1.CartRepository.count({});
        result.Data = await CartRepository_1.CartRepository.find({})
            .skip(page * qtd - qtd)
            .limit(qtd);
        return result;
    }
    async getAll() {
        const result = await CartRepository_1.CartRepository.find({});
        return result;
    }
    async deleteProductCart(_id) {
        const deleteProductCart = await CartRepository_1.CartRepository.findByIdAndDelete(_id);
        return deleteProductCart;
    }
    async registerProductCart(user_id, quantity, product_id, product, unit_price, total_price, order_id, status) {
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
    }
    async updateProductCart(id, user_id, quantity, product_id, product, unit_price, total_price, status) {
        try {
            await CartRepository_1.CartRepository.findOneAndUpdate({ _id: id }, {
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
    }
}
exports.CartService = CartService;
exports.default = new CartService();
