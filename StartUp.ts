import express, { Application, Request, Response } from "express";
import Database from "./infra/db";
import ProductsController from "./controllers/ProductsController";
import UsersController from "./controllers/UsersController";
import CartController from "./controllers/CartController";
import OrderController from "./controllers/OrderController";
const cors = require("cors");

class StartUp {
  public app: Application;
  private _db: Database = new Database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    let corsOptions = {
      origin: "*",
      "Access-Control-Allow-Origin": "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    };

    this.app.use(cors(corsOptions));

    /*
     * @description this routes is for serve products
     *
     * @params /:page/:qtd filter the results in limit quantity with pages
     * @param /:id search product for _id
     *
     *
     */

    this.app.route("/products/:page/:qtd").get((req, res) => {
      return ProductsController.get(req, res);
    });

    this.app.route("/products/:id").get((req, res) => {
      return ProductsController.getById(req, res);
    });

    // implements delete product method
    // implements put product method

    this.app.route("/products").get((req, res) => {
      return ProductsController.getAll(req, res);
    });

    /*
     * @description this routes is for serve users
     *
     * @params /:page/:qtd filter the results in limit quantity with pages
     * @param /:id search user for _id
     *
     *
     */

    this.app.route("/users/:page/:qtd").get((req, res) => {
      return UsersController.get(req, res);
    });

    this.app.route("/users/:id").get((req, res) => {
      return UsersController.getById(req, res);
    });

    // implements update method
    // implements delete method
    this.app.route("/users/:id").delete((req, res) => {
      return UsersController.deleteUser(req, res);
    });

    this.app.route("/users").get((req, res) => {
      return UsersController.getAll(req, res);
    });

    this.app.route("/users").put((req, res) => {
      return UsersController.userRegister(req, res);
    });

    /*
     * @description this routes is for serve the cart
     *
     * @params /:page/:qtd filter the results in limit quantity with pages
     * @param /:id search product cart for _id
     *
     *
     */

    this.app.route("/cart/:page/:qtd").get((req, res) => {
      return CartController.get(req, res);
    });

    this.app.route("/cart/:id").get((req, res) => {
      return CartController.getById(req, res);
    });

    // implements delete method

    this.app.route("/cart").get((req, res) => {
      return CartController.getAll(req, res);
    });

    /*
     * @description this routes is for serve the orders
     *
     * @params /:page/:qtd filter the results in limit quantity with pages
     * @param /:id search order for _id
     *
     *
     */

    this.app.route("/order/:page/:qtd").get((req, res) => {
      return OrderController.get(req, res);
    });

    this.app.route("/order/:id").get((req, res) => {
      return OrderController.getById(req, res);
    });

    // implements delete method

    this.app.route("/order").get((req, res) => {
      return OrderController.getAll(req, res);
    });
  }
}

export default new StartUp();
