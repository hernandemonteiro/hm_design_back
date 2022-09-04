"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CartController_1 = require("../controllers/CartController");
var cartRouter = express_1["default"]();
/*
 * @description this route find all products in cart;
 */
cartRouter.route("/cart").get(function (req, res) {
    return CartController_1["default"].getAll(req, res);
});
/*
 * @description this route find all products in cart with pagination;
 * @params [page] [qtd] filter the results in limit quantity with pages;
 */
cartRouter.route("/cart/:page/:qtd").get(function (req, res) {
    return CartController_1["default"].get(req, res);
});
/*
 * @description this route find one product;
 * @param [id] id of product to find;
 */
cartRouter.route("/cart/:id").get(function (req, res) {
    return CartController_1["default"].getById(req, res);
});
/*
 * @description this route register a product in cart;
 * @param [user_id] define the user;
 * @param [quantity] quantity of product;
 * @param [product_id] define the id for the product in cart;
 * @param [product] name of product;
 * @param [unit_price] unit price of product;
 * @param [total_price] unit price x quantity ;
 * @param [order_id] define the order id to find last in ther orders;
 * @param [status] define the status of order;
 */
cartRouter
    .route("/cart/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:order_id/:status")
    .put(function (req, res) {
    return CartController_1["default"].registerProductCart(req, res);
});
/*
 * @description this route delete one product;
 * @param [id] find the product to delete;
 */
cartRouter.route("/cart/:id")["delete"](function (req, res) {
    return CartController_1["default"].deleteProductCart(req, res);
});
/*
 * @description this route update one product;
 * @param [id] find the product to update;
 * @param [user_id] define the user;
 * @param [quantity] quantity of product order;
 * @param [product_id] id of product;
 * @param [product] name of product;
 * @param [unit_price] unit price of product;
 * @param [total_price] unit price x quantity ;
 * @param [status] define the status of order;
 */
// implements update method
cartRouter
    .route("/cart/update/:id/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:status")
    .put(function (req, res) {
    return CartController_1["default"].updateProductCart(req, res);
});
exports["default"] = cartRouter;
