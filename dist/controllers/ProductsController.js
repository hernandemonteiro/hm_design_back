"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService_1 = require("../services/ProductsService");
class ProductsController {
    _service;
    constructor() {
        this._service = new ProductsService_1.ProductsService();
    }
    async get(request, response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            const result = await this._service.getAllWithLimit(page, qtd);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getAll(request, response) {
        try {
            const result = await this._service.getAll();
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getById(request, response) {
        try {
            const _id = request.params.id;
            const result = await this._service.get(_id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getPerCategory(request, response) {
        try {
            const category = request.params.category;
            const result = await this._service.getPerCategory(category);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async getPerSearch(request, response) {
        try {
            const search = request.params.search;
            const result = await this._service.getPerSearch(search);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
    async deleteProduct(request, response) {
        try {
            const id = request.params.id;
            const result = await this._service.deleteProduct(id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
    async registerProduct(request, response) {
        try {
            const name = request.params.name;
            const price = request.params.price;
            const description = request.params.description;
            const category = request.params.category;
            const images = request.params.images;
            const options = request.params.options;
            const result = await this._service.registerProduct(name, price, images, description, category, options);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
    async updateProduct(request, response) {
        try {
            const id = request.params.id;
            const name = request.params.name;
            const price = request.params.price;
            const description = request.params.description;
            const images = request.params.images;
            const status = request.params.status;
            const options = request.params.options;
            const result = await this._service.updateProduct(id, name, price, description, images, status, options);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json("Error: " + error);
        }
    }
}
exports.default = new ProductsController();
