import express from "express";
import ProductsController from "../controllers/ProductsController";

const productsRouter = express();

productsRouter
  .route("/products")
  .get((req, res) => ProductsController.getAll(req, res));

productsRouter
  .route("/products/pages/:page/:qtd")
  .get((req, res) => ProductsController.getWithPagination(req, res));

productsRouter
  .route("/product/:id")
  .get((req, res) => ProductsController.getById(req, res));

productsRouter
  .route("/products/category/:category")
  .get((req, res) => ProductsController.getPerCategory(req, res));

productsRouter
  .route("/products/search/:search")
  .get((req, res) => ProductsController.getPerSearch(req, res));

productsRouter
  .route("/product/delete/:id")
  .delete((req, res) => ProductsController.deleteProduct(req, res));

productsRouter
  .route(
    "/product/register/:name/:price/:images/:description/:category/:options"
  )
  .put((req, res) => ProductsController.registerProduct(req, res));

productsRouter
  .route(
    "/product/update/:id/:name/:price/:images/:description/:status/:options"
  )
  .put((req, res) => ProductsController.updateProduct(req, res));

export default productsRouter;
