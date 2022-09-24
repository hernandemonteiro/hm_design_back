import express, { Request, Response } from "express";
import ProductsController from "../controllers/ProductsController";

const productsRouter = express();

/*
 * @description this route get all products;
 * @return a JSON with all products;
 */
productsRouter.route("/products").get((req, res) => {
  return ProductsController.getAll(req, res);
});

/*
 * @description this route get products limited by quantity and pages;
 * @params [page] [qtd] limits in page with a quantity;
 * @return a JSON with all products limited by pages and qtd;
 */
productsRouter.route("/products/pages/:page/:qtd").get((req, res) => {
  return ProductsController.get(req, res);
});

/*
 * @description this route get one product by id;
 * @param [id] find one product by _id;
 * @return a JSON with one product;
 */
productsRouter.route("/product/:id").get((req, res) => {
  return ProductsController.getById(req, res);
});

/*
 * @description get products per category;
 * @param [category] category to find a product;
 * @return a JSON with products;
 */
productsRouter.route("/products/category/:category").get((req, res) => {
  return ProductsController.getPerCategory(req, res);
})

/*
 * @description get products per search;
 * @param [search] search to find a product by name or description;
 * @return a JSON with products;
 */
productsRouter.route("/products/search/:search").get((req, res) => {
  return ProductsController.getPerSearch(req, res);
})

/*
 * @description this route delete one product by id;
 * @param [id] find the product to delete;
 */
productsRouter.route("/product/delete/:id").delete((req, res) => {
  return ProductsController.deleteProduct(req, res);
});

/*
 * @description this route register a product;
 * @param [name] name of the product;
 * @param [price] price of the product;
 * @param [images] images in array format;
 * @param [description] description of the product;
 * @param [category] category of the product for menu;
 * @param [status] status for view in store ('Ok' | 'In Progress');
 * @param [options] product options in array format;
 */
productsRouter
  .route("/product/register/:name/:price/:images/:description/:category/:options")
  .put((req, res) => {
    return ProductsController.registerProduct(req, res);
  });

/*
 * @description this route update a product;
 * @param [id] find the product to update;
 * @param [name] name of the product;
 * @param [price] price of the product;
 * @param [images] images in array format;
 * @param [description] description of the product;
 * @param [status] status for view in store ('Ok' | 'In Progress');
 * @param [options] product options in array format;
 */
productsRouter
  .route(
    "/product/update/:id/:name/:price/:images/:description/:status/:options"
  )
  .put((req, res) => {
    return ProductsController.updateProduct(req, res);
  });

export default productsRouter;
