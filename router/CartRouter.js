"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
const cartRouter = (0, express_1.default)();
/*
 * @description this routes is for serve the cart
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search product cart for _id
 *
 *
 */
cartRouter.route("/cart/:page/:qtd").get((req, res) => {
    return CartController_1.default.get(req, res);
});
cartRouter.route("/cart/:id").get((req, res) => {
    return CartController_1.default.getById(req, res);
});
// implements update method
// implements delete method
cartRouter.route("/cart/:id").delete((req, res) => {
    return CartController_1.default.deleteProductCart(req, res);
});
cartRouter.route("/cart").get((req, res) => {
    return CartController_1.default.getAll(req, res);
});
exports.default = cartRouter;
