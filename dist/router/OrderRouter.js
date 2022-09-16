"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const orderRouter = (0, express_1.default)();
orderRouter.route("/orders").get((req, res) => {
    return OrderController_1.default.getAll(req, res);
});
orderRouter.route("/order/:page/:qtd").get((req, res) => {
    return OrderController_1.default.get(req, res);
});
orderRouter.route("/order/:id").get((req, res) => {
    return OrderController_1.default.getById(req, res);
});
orderRouter
    .route("/order/register/:user_id/:address/:order_id/:status")
    .put((req, res) => {
    return OrderController_1.default.registerOrder(req, res);
});
orderRouter.route("/order/:id").delete((req, res) => {
    return OrderController_1.default.deleteOrder(req, res);
});
orderRouter
    .route("/order/update/:id/:user_id/:address/:order_id/:status")
    .put((req, res) => {
    return OrderController_1.default.updateOrder(req, res);
});
exports.default = orderRouter;
