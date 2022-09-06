"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const productsRouter = (0, express_1.default)();
/*
 * @description this route get all products;
 * @returns a JSON with all products;
 */
productsRouter.route("/products").get((req, res) => {
    return ProductsController_1.default.getAll(req, res);
});
/*
 * @description this route get products limited by quantity and pages;
 * @params [page] [qtd] limits in page with a quantity;
 * @returns a JSON with all products limited by pages and qtd;
 */
productsRouter.route("/products/:page/:qtd").get((req, res) => {
    return ProductsController_1.default.get(req, res);
});
/*
 * @description this route get one product by id;
 * @param [id] find one product by _id;
 * @returns a JSON with one product;
 */
productsRouter.route("/product/:id").get((req, res) => {
    return ProductsController_1.default.getById(req, res);
});
/*
 * @description this route delete one product by id;
 * @param [id] find the product to delete;
 */
productsRouter.route("/product/:id").delete((req, res) => {
    return ProductsController_1.default.deleteProduct(req, res);
});
/*
 * @description this route register a product;
 * @param [name] name of the product;
 * @param [price] price of the product;
 * @param [images] images in array format;
 * @param [description] description of the product;
 * @param [category] category of the product for menu;
 * @param [status] status for view in store ('Ok' | 'In Progress');
 * @param [options] product options in array format;
 */
productsRouter
    .route("/product/:name/:price/:images/:description/:category/:status/:options")
    .put((req, res) => {
    return ProductsController_1.default.registerProduct(req, res);
});
/*
 * @description this route update a product;
 * @param [id] find the product to update;
 * @param [name] name of the product;
 * @param [price] price of the product;
 * @param [images] images in array format;
 * @param [description] description of the product;
 * @param [status] status for view in store ('Ok' | 'In Progress');
 * @param [options] product options in array format;
 */
productsRouter
    .route("/product/update/:id/:name/:price/:images/:description/:status/:options")
    .put((req, res) => {
    return ProductsController_1.default.updateProduct(req, res);
});
exports.default = productsRouter;
