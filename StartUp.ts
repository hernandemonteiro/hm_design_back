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
  private hashSecurity = `/${process.env.HASH_SECRET}/`;
  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.use(cors({ origin: "https://hm-design.vercel.app" }));
    this.app.use(this.hashSecurity, userRouter);
    this.app.use(this.hashSecurity, productsRouter);
    this.app.use(this.hashSecurity, cartRouter);
    this.app.use(this.hashSecurity, orderRouter);
    this.app.use(this.hashSecurity, categoryRouter);
    this.app.use(this.hashSecurity, forgotPasswordRouter);
  }
}

export default new StartUp();
