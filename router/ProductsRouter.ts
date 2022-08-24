import express, { Request, Response } from "express";
import ProductsController from "../controllers/ProductsController";

const productsRouter = express();

/*
 * @sumary this route get all products;
 * @returns a JSON with all products;
 */

productsRouter.route("/products").get((req, res) => {
  return ProductsController.getAll(req, res);
});

/*
 * @sumary this route get products limited by quantity and pages;
 * @params /:page/... limits the result quantity in pages;
 * @param .../:qtd limit the quantity of products;
 */

productsRouter.route("/products/:page/:qtd").get((req, res) => {
  return ProductsController.get(req, res);
});

/*
 * @sumary this route get one product by id;
 * @param /:id search product for _id;
 */

productsRouter.route("/products/:id").get((req, res) => {
  return ProductsController.getById(req, res);
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

export default productsRouter;
