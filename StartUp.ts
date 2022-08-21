import express, { Application, Request, Response } from "express";
import Database from "./infra/db";
import ProductsController from "./controllers/ProductsController";
import UsersController from "./controllers/UsersController";
const cors = require('cors');

class StartUp {
    
    public app: Application;
    private _db: Database = new Database();

    constructor(){

        this.app = express();
        this._db.createConnection();
        this.routes();

    }

    routes() {
        let corsOptions = {
            origin: "*",
        }
        this.app.use(cors(corsOptions));

        this.app.route('/products/:page/:qtd').get((req, res) => {
            return ProductsController.get(req, res);
        });

        this.app.route('/products/:id').get((req, res) => {
            return ProductsController.getById(req, res);
        });

        this.app.route('/products').get((req, res) => {
            return ProductsController.get(req, res);
        });

        this.app.route('/users/:page/:qtd').get((req, res) => {
            return UsersController.get(req, res);
        });

        
        this.app.route('/users/:id').get((req, res) => {
            return UsersController.getById(req, res);
        });

        this.app.route('/users').get((req, res) => {
            return UsersController.get(req, res);
        });

        this.app.route('/users').put((req, res) => {
            return UsersController.userRegister(req, res);
        });
    }
}

export default new StartUp();