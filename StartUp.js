"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const ProductsController_1 = __importDefault(require("./controllers/ProductsController"));
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const cors = require('cors');
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        let corsOptions = {
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        };
        this.app.use(cors(corsOptions));
        this.app.route('/products/:page/:qtd').get((req, res) => {
            return ProductsController_1.default.get(req, res);
        });
        this.app.route('/products/:id').get((req, res) => {
            return ProductsController_1.default.getById(req, res);
        });
        this.app.route('/products').get((req, res) => {
            return ProductsController_1.default.get(req, res);
        });
        this.app.route('/users/:page/:qtd').get((req, res) => {
            return UsersController_1.default.get(req, res);
        });
        this.app.route('/users/:id').get((req, res) => {
            return UsersController_1.default.getById(req, res);
        });
        this.app.route('/users').get((req, res) => {
            return UsersController_1.default.get(req, res);
        });
        this.app.route('/users').put((req, res) => {
            return UsersController_1.default.userRegister(req, res);
        });
    }
}
exports.default = new StartUp();
