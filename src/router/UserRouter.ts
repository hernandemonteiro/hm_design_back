import express from "express";
import UsersController from "../controllers/UsersController";

const userRouter = express();

userRouter.route("/users").get((req, res) => UsersController.getAll(req, res));

userRouter
  .route("/users/:id")
  .get((req, res) => UsersController.getById(req, res));

userRouter
  .route("/users/update/:id/:name/:email/:password")
  .put((req, res) => UsersController.updateUser(req, res));

userRouter
  .route("/users/:id")
  .delete((req, res) => UsersController.deleteUser(req, res));

userRouter
  .route("/users/:name/:email/:password/:type")
  .post((req, res) => UsersController.userRegister(req, res));

userRouter
  .route("/login/:email/:password")
  .get((req, res) => UsersController.login(req, res));

export default userRouter;
