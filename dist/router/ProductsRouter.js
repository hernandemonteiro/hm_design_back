"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const productsRouter = (0, express_1.default)();
productsRouter.route("/products").get((req, res) => {
    return ProductsController_1.default.getAll(req, res);
});
productsRouter.route("/products/:page/:qtd").get((req, res) => {
    return ProductsController_1.default.get(req, res);
});
productsRouter.route("/product/:id").get((req, res) => {
    return ProductsController_1.default.getById(req, res);
});
productsRouter.route("/productspercategory/:category").get((req, res) => {
    return ProductsController_1.default.getPerCategory(req, res);
});
productsRouter.route("/product/:id").delete((req, res) => {
    return ProductsController_1.default.deleteProduct(req, res);
});
productsRouter
    .route("/product/:name/:price/:images/:description/:category/:options")
    .put((req, res) => {
    return ProductsController_1.default.registerProduct(req, res);
});
productsRouter
    .route("/product/update/:id/:name/:price/:images/:description/:status/:options")
    .put((req, res) => {
    return ProductsController_1.default.updateProduct(req, res);
});
exports.default = productsRouter;
