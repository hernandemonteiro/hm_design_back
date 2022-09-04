import express from "express";
import UsersController from "../controllers/UsersController";

const userRouter = express();

/*
 * @description this route get all users;
 * @returns a JSON with all users;
 */
userRouter.route("/users").get((req, res) => {
  return UsersController.getAll(req, res);
});

/*
 * @description this route get one user by id;
 * @param [id] to find the user;
 * @returns a JSON with the user;
 */
userRouter.route("/users/:id").get((req, res) => {
  return UsersController.getById(req, res);
});

/*
 * @description this route update one user by id;
 * @param [id] find the user to updates;
 * @param [name] update the name;
 * @param [email] update the email;
 * @param [password] update the password;
 * @returns a JSON with a registered user;
 */
userRouter.route("/users/update/:id/:name/:email/:password").put((req, res) => {
  return UsersController.updateUser(req, res);
});

/*
 * @description this route delete one user by id;
 * @param [id] find the user to delete;
 * @returns a JSON with the deleted user;
 */
userRouter.route("/users/:id").delete((req, res) => {
  return UsersController.deleteUser(req, res);
});

/*
 * @description this route register a user using parameters;
 * @param [name] name of the user;
 * @param [email] email of the user;
 * @param [password] password of the user;
 * @param [type] define 1 == user, 0 == Admin;
 * @returns a JSON with status: success || Error: message
 */
userRouter.route("/users/:name/:email/:password/:type").put((req, res) => {
  return UsersController.userRegister(req, res);
});

export default userRouter;
