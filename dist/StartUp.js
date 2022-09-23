"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const ProductsRouter_1 = __importDefault(require("./router/ProductsRouter"));
const CartRouter_1 = __importDefault(require("./router/CartRouter"));
const OrderRouter_1 = __importDefault(require("./router/OrderRouter"));
const CategoryRouter_1 = __importDefault(require("./router/CategoryRouter"));
const ForgotPasswordRouter_1 = __importDefault(require("./router/ForgotPasswordRouter"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const cors = require("cors");
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.use(express_1.default.json());
        this.app.use(cors({
            exposedHeaders: ["x-access-token"],
            origin: [process.env.ORIGIN, "https://hm-design.vercel.app"],
        }));
        this.app.use("*", function (req, res, next) {
            const Authenticate = req.headers["x-access-token"];
            const errorPage = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
        <style>
        * {
            margin: 0px;
            padding: 0px;
        }
        img {
            width: 50%
        }
        @media (max-width: 600px){
            img {
                width: 80%;
            }
        }
    </style>
    You are not Authenticated
    <div
      style="
        display: flex;
        height: 95vh;
        justify-content: center;
        align-items: center;
      "
    >
    
      <img src="https://drive.google.com/uc?export=view&id=1kIzxkYaX5j-1AzdIIb28B2bnQnMb8Uu8" />
    </div>
        </body>
      </html>
    `;
            if (!Authenticate) {
                res.send(errorPage);
            }
            var iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
            const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
            const tokenDecrypted = crypto_js_1.default.AES.decrypt(Authenticate, secret, {
                iv: iv,
                mode: crypto_js_1.default.mode.CBC,
                padding: crypto_js_1.default.pad.Pkcs7,
            }).toString(crypto_js_1.default.enc.Utf8);
            if (tokenDecrypted === process.env.HASH_SECRET) {
                next();
            }
            else {
                res.send(errorPage);
            }
        });
        this.app.use("/", UserRouter_1.default);
        this.app.use("/", ProductsRouter_1.default);
        this.app.use("/", CartRouter_1.default);
        this.app.use("/", OrderRouter_1.default);
        this.app.use("/", CategoryRouter_1.default);
        this.app.use("/", ForgotPasswordRouter_1.default);
    }
}
exports.default = new StartUp();
