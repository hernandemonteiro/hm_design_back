import express, { Application } from "express";
import Database from "./infra/db";
import userRouter from "./router/UserRouter";
import productsRouter from "./router/ProductsRouter";
import cartRouter from "./router/CartRouter";
import orderRouter from "./router/OrderRouter";
import categoryRouter from "./router/CategoryRouter";
import forgotPasswordRouter from "./router/ForgotPasswordRouter";
import cors from "cors";
import CryptoUtils from "./utils/CryptoUtils";
import helmet from "helmet";
import { errorPage } from "./utils/error.utils";

class StartUp {
  public app: Application;
  private _db = Database;

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  async tokenSecurity(req, res, next) {
    const Authenticate = req.headers["x-access-token"];
    // const auth = req.headers["authorization"];
    // const Authenticate = auth.split(" ")[1];
    const token = await CryptoUtils.DecryptValue(Authenticate || "empty");
    token === process.env.HASH_SECRET
      ? next()
      : res.status(401).send(await errorPage());
  }

  routes() {
    // configs and security;
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("*", this.tokenSecurity);

    // routes use;
    this.app.use("/", userRouter);
    this.app.use("/", productsRouter);
    this.app.use("/", cartRouter);
    this.app.use("/", orderRouter);
    this.app.use("/", categoryRouter);
    this.app.use("/", forgotPasswordRouter);
  }
}

export default new StartUp();
