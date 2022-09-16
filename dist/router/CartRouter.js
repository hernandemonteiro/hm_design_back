"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
const cartRouter = (0, express_1.default)();
cartRouter.route("/cart").get((req, res) => {
    return CartController_1.default.getAll(req, res);
});
cartRouter.route("/cart/:page/:qtd").get((req, res) => {
    return CartController_1.default.get(req, res);
});
cartRouter.route("/cart/:id").get((req, res) => {
    return CartController_1.default.getById(req, res);
});
cartRouter
    .route("/cart/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:order_id/:status")
    .put((req, res) => {
    return CartController_1.default.registerProductCart(req, res);
});
cartRouter.route("/cart/:id").delete((req, res) => {
    return CartController_1.default.deleteProductCart(req, res);
});
cartRouter
    .route("/cart/update/:id/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:status")
    .put((req, res) => {
    return CartController_1.default.updateProductCart(req, res);
});
exports.default = cartRouter;
