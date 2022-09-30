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
const CategoryService_1 = require("../services/CategoryService");
class CategoryController {
    constructor() {
        this._service = new CategoryService_1.CategoryService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = request.params.page ? parseInt(request.params.page) : 1;
                const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
                const result = yield this._service.getAllWithLimit(page, qtd);
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
                const result = yield this._service.getAll();
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
                const result = yield this._service.get(_id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    registerCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = request.params.category;
                const result = yield this._service.registerCategory(category);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    deleteCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params.id;
                const result = yield this._service.deleteCategory(id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json("Error: " + error);
            }
        });
    }
    updateCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params.id;
                const category = request.params.category;
                const result = yield this._service.updateCategory(id, category);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json("Error: " + error);
            }
        });
    }
}
exports.default = new CategoryController();
