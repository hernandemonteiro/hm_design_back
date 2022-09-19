"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const userRouter = (0, express_1.default)();
userRouter.route("/users").get((req, res) => {
    return UsersController_1.default.getAll(req, res);
});
userRouter.route("/users/:id").get((req, res) => {
    return UsersController_1.default.getById(req, res);
});
userRouter.route("/users/update/:id/:name/:email/:password").put((req, res) => {
    return UsersController_1.default.updateUser(req, res);
});
userRouter.route("/users/:id").delete((req, res) => {
    return UsersController_1.default.deleteUser(req, res);
});
userRouter.route("/users/:name/:email/:password/:type").put((req, res) => {
    return UsersController_1.default.userRegister(req, res);
});
userRouter.route("/login/:email/:password").get((req, res) => {
    return UsersController_1.default.login(req, res);
});
exports.default = userRouter;
