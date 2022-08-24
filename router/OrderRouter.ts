import express, { Request, Response } from "express";
import OrderController from "../controllers/OrderController";

const orderRouter = express();

/*
 * @description this routes is for serve the orders
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search order for _id
 *
 *
 */

orderRouter.route("/order/:page/:qtd").get((req, res) => {
  return OrderController.get(req, res);
});

orderRouter.route("/order/:id").get((req, res) => {
  return OrderController.getById(req, res);
});

// implements delete method

orderRouter.route("/order").get((req, res) => {
  return OrderController.getAll(req, res);
});

export default orderRouter;
