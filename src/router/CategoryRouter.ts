import express from "express";
import CategoryController from "../controllers/CategoryController";

const categoryRouter = express();

/*
 * @description this route find all categorys
 */
categoryRouter
  .route("/categorys")
  .get((req, res) => CategoryController.getAll(req, res));

/*
 * @description this route find all category limited by pages and a quantity;
 * @params [page] [qtd] filter the results in limited quantity with pages;
 */
categoryRouter
  .route("/categorys/:page/:qtd")
  .get((req, res) => CategoryController.get(req, res));

/*
 * @description this route find one category;
 * @param [id] find the category by id;
 */
categoryRouter
  .route("/category/:id")
  .get((req, res) => CategoryController.getById(req, res));

/*
 * @description this route register a category;
 * @param [category] define the category to register;
 */
categoryRouter
  .route("/category/register/:category")
  .put((req, res) => CategoryController.registerCategory(req, res));

/*
 * @description this route delete a category;
 * @param [id] find the category to delete;
 */
categoryRouter
  .route("/category/:id")
  .delete((req, res) => CategoryController.deleteCategory(req, res));

/*
 * @description this route update a category
 * @param [id] find the category to update;
 * @param [category] define the new category;
 */
categoryRouter
  .route("/category/update/:id/:category")
  .put((req, res) => CategoryController.updateCategory(req, res));

export default categoryRouter;
