"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartController_1 = __importDefault(require("../controllers/CartController"));
const globals_1 = require("@jest/globals");
(0, globals_1.it)("Get", () => {
    const getCart = CartController_1.default.get;
    (0, globals_1.expect)(getCart);
});
(0, globals_1.it)("Get All", () => {
    const getCart = CartController_1.default.getAll;
    (0, globals_1.expect)(getCart);
});
(0, globals_1.it)("Get By ID", () => {
    const getCart = CartController_1.default.getById;
    (0, globals_1.expect)(getCart);
});
(0, globals_1.it)("Insert a Product in cart", () => {
    const getCart = CartController_1.default.registerProductCart;
    (0, globals_1.expect)(getCart);
});
(0, globals_1.it)("Delete a product of cart", () => {
    const getCart = CartController_1.default.deleteProductCart;
    (0, globals_1.expect)(getCart);
});
(0, globals_1.it)("Update a Product of cart", () => {
    const getCart = CartController_1.default.updateProductCart;
    (0, globals_1.expect)(getCart);
});
