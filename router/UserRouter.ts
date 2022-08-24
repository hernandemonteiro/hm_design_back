import express, { Request, Response } from "express";
import UsersController from "../controllers/UsersController";

const userRouter = express();

/*
 * @description this routes is for serve users
 *
 * @params /:page/:qtd filter the results in limit quantity with pages
 * @param /:id search user for _id
 *
 *
 */

userRouter.route("/users").get((req, res) => {
  return UsersController.getAll(req, res);
});

userRouter.route("/users/:page/:qtd").get((req, res) => {
  return UsersController.get(req, res);
});

userRouter.route("/users/:id").get((req, res) => {
  return UsersController.getById(req, res);
});

// implements update method
userRouter.route("/users/:id").delete((req, res) => {
  return UsersController.deleteUser(req, res);
});

userRouter.route("/users").put((req, res) => {
  return UsersController.userRegister(req, res);
});

export default userRouter;
