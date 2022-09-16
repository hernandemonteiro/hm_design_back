"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const userRouter = (0, express_1.default)();
/*
 * @description this route get all users;
 * @return a JSON with all users;
 */
userRouter.route("/users").get((req, res) => {
    return UsersController_1.default.getAll(req, res);
});
/*
 * @description this route get one user by id;
 * @param [id] to find the user;
 * @return a JSON with the user;
 */
userRouter.route("/users/:id").get((req, res) => {
    return UsersController_1.default.getById(req, res);
});
/*
 * @description this route update one user by id;
 * @param [id] find the user to updates;
 * @param [name] update the name;
 * @param [email] update the email;
 * @param [password] update the password;
 * @return a JSON with a registered user;
 */
userRouter.route("/users/update/:id/:name/:email/:password").put((req, res) => {
    return UsersController_1.default.updateUser(req, res);
});
/*
 * @description this route delete one user by id;
 * @param [id] find the user to delete;
 * @return a JSON with the deleted user;
 */
userRouter.route("/users/:id").delete((req, res) => {
    return UsersController_1.default.deleteUser(req, res);
});
/*
 * @description this route register a user using parameters;
 * @param [name] name of the user;
 * @param [email] email of the user;
 * @param [password] password of the user;
 * @param [type] define 1 == user, 0 == Admin;
 * @return a JSON with status: success || Error: message
 */
userRouter.route("/users/:name/:email/:password/:type").put((req, res) => {
    return UsersController_1.default.userRegister(req, res);
});
/*
 * @description login route, generate a JWT;
 * @param [email] used to find user;
 * @param [password] used to find user;
 * @return a JWT token;
 */
userRouter.route("/login/:email/:password").get((req, res) => {
    return UsersController_1.default.login(req, res);
});
/*
 * @description login route, generate a JWT;
 * @param [email] used to find user;
 * @param [password] used to find user;
 * @return a JWT token;
 */
userRouter.route("/forgotPassword/:email").post((req, res) => {
    return UsersController_1.default.forgotPassword(req, res);
});
exports.default = userRouter;
