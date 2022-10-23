import express from "express";
import CategoryController from "../controllers/CategoryController";

const categoryRouter = express();

categoryRouter
  .route("/categorys")
  .get((req, res) => CategoryController.getAll(req, res));

categoryRouter
  .route("/categorys/:page/:qtd")
  .get((req, res) => CategoryController.getWithPagination(req, res));

categoryRouter
  .route("/category/:id")
  .get((req, res) => CategoryController.getById(req, res));

categoryRouter
  .route("/category/register/:category")
  .put((req, res) => CategoryController.registerCategory(req, res));

categoryRouter
  .route("/category/:id")
  .delete((req, res) => CategoryController.deleteCategory(req, res));

categoryRouter
  .route("/category/update/:id/:category")
  .put((req, res) => CategoryController.updateCategory(req, res));

export default categoryRouter;
