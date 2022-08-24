"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const productsRouter = (0, express_1.default)();
/*
 * @sumary this route get all products;
 * @returns a JSON with all products;
 */
productsRouter.route("/products").get((req, res) => {
    return ProductsController_1.default.getAll(req, res);
});
/*
 * @sumary this route get products limited by quantity and pages;
 * @params /:page/... limits the result quantity in pages;
 * @param .../:qtd limit the quantity of products;
 */
productsRouter.route("/products/:page/:qtd").get((req, res) => {
    return ProductsController_1.default.get(req, res);
});
/*
 * @sumary this route get one product by id;
 * @param /:id search product for _id;
 */
productsRouter.route("/products/:id").get((req, res) => {
    return ProductsController_1.default.getById(req, res);
});
/*
 * @sumary this route delete one product by id
 * @param /:id search the product _id for delete
 */
// implements delete product method
/*
 * @sumary this route register one product by params with url
 */
// implements put product method
/*
 * @sumary this route update one product selected by id
 */
// implements put product method
exports.default = productsRouter;
