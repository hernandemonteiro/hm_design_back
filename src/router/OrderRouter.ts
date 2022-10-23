import express from "express";
import OrderController from "../controllers/OrderController";

const orderRouter = express();

orderRouter
  .route("/orders")
  .get((req, res) => OrderController.getAll(req, res));

orderRouter
  .route("/order/:page/:qtd")
  .get((req, res) => OrderController.get(req, res));

orderRouter
  .route("/order/:id")
  .get((req, res) => OrderController.getById(req, res));

orderRouter
  .route("/order/register/:user_id/:address/:order_id/:status")
  .put((req, res) => OrderController.registerOrder(req, res));

orderRouter
  .route("/order/:id")
  .delete((req, res) => OrderController.deleteOrder(req, res));

orderRouter
  .route("/order/update/:id/:user_id/:address/:order_id/:status")
  .put((req, res) => OrderController.updateOrder(req, res));

export default orderRouter;
