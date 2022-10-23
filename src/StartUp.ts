import express, { Application } from "express";
import Database from "./infra/db";
import userRouter from "./router/UserRouter";
import productsRouter from "./router/ProductsRouter";
import cartRouter from "./router/CartRouter";
import orderRouter from "./router/OrderRouter";
import categoryRouter from "./router/CategoryRouter";
import forgotPasswordRouter from "./router/ForgotPasswordRouter";
import cors from "cors";
import helmet from "helmet";
import AccessAPI from "./utils/access.utils";

class StartUp {
  public app: Application;
  private _db = Database;

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("*", AccessAPI.tokenSecurity);
    
    this.app.use("/", userRouter);
    this.app.use("/", productsRouter);
    this.app.use("/", cartRouter);
    this.app.use("/", orderRouter);
    this.app.use("/", categoryRouter);
    this.app.use("/", forgotPasswordRouter);
  }
}

export default new StartUp();
