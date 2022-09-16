"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CategoryController_1 = require("../controllers/CategoryController");
var categoryRouter = express_1["default"]();
/*
 * @description this route find all categorys
 */
categoryRouter.route("/categorys").get(function (req, res) {
    return CategoryController_1["default"].getAll(req, res);
});
/*
 * @description this route find all category limited by pages and a quantity;
 * @params [page] [qtd] filter the results in limited quantity with pages;
 */
categoryRouter.route("/categorys/:page/:qtd").get(function (req, res) {
    return CategoryController_1["default"].get(req, res);
});
/*
 * @description this route find one category;
 * @param [id] find the category by id;
 */
categoryRouter.route("/category/:id").get(function (req, res) {
    return CategoryController_1["default"].getById(req, res);
});
/*
 * @description this route register a category;
 * @param [category] define the category to register;
 */
categoryRouter
    .route("/category/register/:category")
    .put(function (req, res) {
    return CategoryController_1["default"].registerCategory(req, res);
});
/*
 * @description this route delete a category;
 * @param [id] find the category to delete;
 */
categoryRouter.route("/category/:id")["delete"](function (req, res) {
    return CategoryController_1["default"].deleteCategory(req, res);
});
/*
 * @description this route update a category
 * @param [id] find the category to update;
 * @param [category] define the new category;
 */
categoryRouter
    .route("/category/update/:id/:category")
    .put(function (req, res) {
    return CategoryController_1["default"].updateCategory(req, res);
});
exports["default"] = categoryRouter;
