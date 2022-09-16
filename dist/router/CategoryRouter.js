"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const categoryRouter = (0, express_1.default)();
categoryRouter.route("/categorys").get((req, res) => {
    return CategoryController_1.default.getAll(req, res);
});
categoryRouter.route("/categorys/:page/:qtd").get((req, res) => {
    return CategoryController_1.default.get(req, res);
});
categoryRouter.route("/category/:id").get((req, res) => {
    return CategoryController_1.default.getById(req, res);
});
categoryRouter
    .route("/category/register/:category")
    .put((req, res) => {
    return CategoryController_1.default.registerCategory(req, res);
});
categoryRouter.route("/category/:id").delete((req, res) => {
    return CategoryController_1.default.deleteCategory(req, res);
});
categoryRouter
    .route("/category/update/:id/:category")
    .put((req, res) => {
    return CategoryController_1.default.updateCategory(req, res);
});
exports.default = categoryRouter;
