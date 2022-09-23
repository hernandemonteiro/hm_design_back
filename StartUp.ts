import express, { Application, Request, Response } from "express";
import Database from "./infra/db";
import userRouter from "./router/UserRouter";
import productsRouter from "./router/ProductsRouter";
import cartRouter from "./router/CartRouter";
import orderRouter from "./router/OrderRouter";
import categoryRouter from "./router/CategoryRouter";
import forgotPasswordRouter from "./router/ForgotPasswordRouter";
import CryptoJS from "crypto-js";

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
    this.app.use(
      cors({
        exposedHeaders: ["x-access-token"],
        origin: [process.env.ORIGIN, "https://hm-design.vercel.app"],
      })
    );
    this.app.use("*", function (req, res, next) {
      const Authenticate = req.headers["x-access-token"];
      const errorPage = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            * {
              margin: 0px;
              padding: 0px;
            }
            body {
              display: flex;
              width: 100%;
              height: 70vh;
              justify-content: center;
              align-items: center;
            }
            div {
              text-align: center;
              padding: 15%;
            }
            img {
              width: 75%;
              filter: drop-shadow(0 0 1rem black);
            }
            @media (max-width: 800px) {
              div {
                padding: 2%;
              }
              img {
                width: 100%;
              }
            }
            @media only screen and (min-device-width: 120px) and (max-device-width: 800px) {
              div {
                padding: 2%;
                overflow: hidden;
              }
              img {
                width: 110%;
              }
            }
          </style>
        </head>
        <body>
          <div>
            <h1>You are not Authenticated</h1><br />
            <img
              src="https://drive.google.com/uc?export=view&id=1kIzxkYaX5j-1AzdIIb28B2bnQnMb8Uu8"
            />
          </div>
        </body>
      </html>`;
      if (!Authenticate) {
        res.send(errorPage);
      }
      var iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
      const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
      const tokenDecrypted = CryptoJS.AES.decrypt(Authenticate, secret, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      if (tokenDecrypted === process.env.HASH_SECRET) {
        next();
      } else {
        res.send(errorPage);
      }
    });
    this.app.use("/", userRouter);
    this.app.use("/", productsRouter);
    this.app.use("/", cartRouter);
    this.app.use("/", orderRouter);
    this.app.use("/", categoryRouter);
    this.app.use("/", forgotPasswordRouter);
  }
}

export default new StartUp();
