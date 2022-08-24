import express, { Request, Response } from "express";
import CartController from "../controllers/CartController";

const cartRouter = express();

/*
 * @description this routes is for serve the cart
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search product cart for _id
 *
 *
 */

cartRouter.route("/cart/:page/:qtd").get((req, res) => {
  return CartController.get(req, res);
});

cartRouter.route("/cart/:id").get((req, res) => {
  return CartController.getById(req, res);
});

// implements update method

// implements delete method
cartRouter.route("/cart/:id").delete((req, res) => {
  return CartController.deleteProductCart(req, res);
});

cartRouter.route("/cart").get((req, res) => {
  return CartController.getAll(req, res);
});

export default cartRouter;
