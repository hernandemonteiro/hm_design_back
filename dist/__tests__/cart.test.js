"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = __importDefault(require("../services/CartService"));
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("cart", () => {
    (0, globals_1.it)("Get products with a limit", () => {
        const getAllWithLimit = CartService_1.default.getAllWithLimit(1, 10);
        (0, globals_1.expect)(getAllWithLimit);
    });
    (0, globals_1.it)("Get All products", () => {
        const getAll = CartService_1.default.getAll();
        (0, globals_1.expect)(getAll);
    });
    (0, globals_1.it)("Update a Product of cart", () => {
        const getCart = CartService_1.default.updateProductCart;
        (0, globals_1.expect)(getCart);
    });
});
