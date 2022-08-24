"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const userRouter = (0, express_1.default)();
/*
 * @description this routes is for serve users
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search user for _id
 *
 *
 */
userRouter.route("/users").get((req, res) => {
    return UsersController_1.default.getAll(req, res);
});
userRouter.route("/users/:page/:qtd").get((req, res) => {
    return UsersController_1.default.get(req, res);
});
userRouter.route("/users/:id").get((req, res) => {
    return UsersController_1.default.getById(req, res);
});
// implements update method
userRouter.route("/users/:id").delete((req, res) => {
    return UsersController_1.default.deleteUser(req, res);
});
userRouter.route("/users").put((req, res) => {
    return UsersController_1.default.userRegister(req, res);
});
exports.default = userRouter;
