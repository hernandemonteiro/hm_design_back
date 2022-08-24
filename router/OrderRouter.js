"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const orderRouter = (0, express_1.default)();
/*
 * @description this routes is for serve the orders
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search order for _id
 *
 *
 */
orderRouter.route("/order/:page/:qtd").get((req, res) => {
    return OrderController_1.default.get(req, res);
});
orderRouter.route("/order/:id").get((req, res) => {
    return OrderController_1.default.getById(req, res);
});
// implements delete method
orderRouter.route("/order").get((req, res) => {
    return OrderController_1.default.getAll(req, res);
});
exports.default = orderRouter;
