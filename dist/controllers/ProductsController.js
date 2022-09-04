"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService_1 = require("../services/ProductsService");
class ProductsController {
    constructor() {
        this._service = new ProductsService_1.ProductsService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = request.params.page ? parseInt(request.params.page) : 1;
                const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
                let result = yield this._service.getAllWithLimit(page, qtd);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._service.getAll();
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = request.params.id;
                let result = yield this._service.get(_id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    deleteProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params.id;
                let result = yield this._service.deleteProduct(id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json("Error: " + error);
            }
        });
    }
    registerProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = request.params.name;
                const price = request.params.price;
                const description = request.params.description;
                const images = request.params.images;
                const status = request.params.name;
                const options = request.params.name;
                let result = yield this._service.registerProduct(name, price, description, images, status, options);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json("Error: " + error);
            }
        });
    }
    updateProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params.id;
                const name = request.params.name;
                const price = request.params.price;
                const description = request.params.description;
                const images = request.params.images;
                const status = request.params.status;
                const options = request.params.options;
                let result = yield this._service.updateProduct(id, name, price, description, images, status, options);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json("Error: " + error);
            }
        });
    }
}
exports.default = new ProductsController();
