import express from "express";
import OrderController from "../controllers/OrderController";

const orderRouter = express();

/*
 * @description this route find all orders
 */
orderRouter.route("/orders").get((req, res) => {
  return OrderController.getAll(req, res);
});

/*
 * @description this route find all products limited by pages and a quantity;
 * @params [page] [qtd] filter the results in limited quantity with pages;
 */
orderRouter.route("/order/:page/:qtd").get((req, res) => {
  return OrderController.get(req, res);
});

/*
 * @description this route find onde product;
 * @param [id] find the product by id;
 */
orderRouter.route("/order/:id").get((req, res) => {
  return OrderController.getById(req, res);
});

/*
 * @description this route register a order
 * @param [user_id] define the order user owner;
 * @param [address] is the address for the shipp;
 * @param [order_id] define the id for the products in cart;
 * @param [status] order status;
 */
orderRouter
  .route("/order/register/:user_id/:address/:order_id/:status")
  .put((req, res) => {
    return OrderController.registerOrder(req, res);
  });

/*
 * @description this route delete a order;
 * @param [id] find the order to delete;
 */
orderRouter.route("/order/:id").delete((req, res) => {
  return OrderController.deleteOrder(req, res);
});

/*
 * @description this route update a order
 * @param [id] find the product to update;
 * @param [user_id] define the order user owner;
 * @param [address] is the address for send the product;
 * @param [order_id] define the id for the products in cart;
 * @param [status] order status;
 */
orderRouter
  .route("/order/update/:id/:user_id/:address/:order_id/:status")
  .put((req, res) => {
    return OrderController.updateOrder(req, res);
  });

export default orderRouter;
