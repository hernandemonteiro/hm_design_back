import express, { Request, Response } from "express";
import CartController from "../controllers/CartController";

const cartRouter = express();

/*
 * @description this route find all products in cart;
 */
cartRouter.route("/cart").get((req, res) => {
  return CartController.getAll(req, res);
});

/*
 * @description this route find all products in cart with pagination;
 * @params [page] [qtd] filter the results in limit quantity with pages;
 */
cartRouter.route("/cart/:page/:qtd").get((req, res) => {
  return CartController.get(req, res);
});

/*
 * @description this route find one product;
 * @param [id] id of product to find;
 */
cartRouter.route("/cart/:id").get((req, res) => {
  return CartController.getById(req, res);
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
  .route(
    "/cart/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:order_id/:status"
  )
  .put((req, res) => {
    return CartController.registerProductCart(req, res);
  });

/*
 * @description this route delete one product;
 * @param [id] find the product to delete;
 */
cartRouter.route("/cart/:id").delete((req, res) => {
  return CartController.deleteProductCart(req, res);
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
  .route(
    "/cart/update/:id/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:status"
  )
  .put((req, res) => {
    return CartController.updateProductCart(req, res);
  });

export default cartRouter;
