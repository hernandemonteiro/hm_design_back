"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const app = (0, express_1.default)();
app.route('/products').get((req, res) => {
    return ProductsController_1.default.get(req, res);
});
app.route('/products/:page/:qtd').get((req, res) => {
    return ProductsController_1.default.get(req, res);
});
app.route('/products/:id').get((req, res) => {
    return ProductsController_1.default.getById(req, res);
});
