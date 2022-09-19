import express, { Application, Request, Response } from "express";
import Database from "./infra/db";
import userRouter from "./router/UserRouter";
import productsRouter from "./router/ProductsRouter";
import cartRouter from "./router/CartRouter";
import orderRouter from "./router/OrderRouter";
import categoryRouter from "./router/CategoryRouter";
import forgotPasswordRouter from "./router/ForgotPasswordRouter";
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
    this.app.use(express.json());
    this.app.use("*", function (req, res, next) {
      if (req.body.user == process.env.EMAIL_HM && req.body.pass == process.env.EMAIL_PASSWORD) {
        next();
      } else {
        var err = new Error("You are not authenticated!");
        res.setHeader("WWW-Authenticate", "Basic");
        return next(err);
      }
    });
    this.app.use(
      cors({
        origin: ["http://localhost:3000", "https://hm-design.vercel.app"],
      })
    );
    this.app.use("/", userRouter);
    this.app.use("/", productsRouter);
    this.app.use("/", cartRouter);
    this.app.use("/", orderRouter);
    this.app.use("/", categoryRouter);
    this.app.use("/", forgotPasswordRouter);
  }
}

export default new StartUp();
