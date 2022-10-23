import express from "express";
import CartController from "../controllers/CartController";

const cartRouter = express();

cartRouter.route("/cart").get((req, res) => CartController.getAll(req, res));

cartRouter
  .route("/cart/:page/:qtd")
  .get((req, res) => CartController.getWithPagination(req, res));

cartRouter
  .route("/cart/:id")
  .get((req, res) => CartController.getById(req, res));

cartRouter
  .route(
    "/cart/register/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:order_id/:status"
  )
  .put((req, res) => CartController.insertProductInCart(req, res));

cartRouter
  .route("/cart/:id")
  .delete((req, res) => CartController.deleteProductOfCart(req, res));

cartRouter
  .route(
    "/cart/update/:id/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:status"
  )
  .put((req, res) => CartController.updateProductCart(req, res));

export default cartRouter;
