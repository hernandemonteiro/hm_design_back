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
const cors = require("cors");
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.use(cors({
            origin: ["http://localhost:3000", "https://hm-design.vercel.app"],
        }));
        this.app.use("/", UserRouter_1.default);
        this.app.use("/", ProductsRouter_1.default);
        this.app.use("/", CartRouter_1.default);
        this.app.use("/", OrderRouter_1.default);
        this.app.use("/", CategoryRouter_1.default);
        this.app.use("/", ForgotPasswordRouter_1.default);
    }
}
exports.default = new StartUp();
