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
exports.ProductsService = void 0;
const Result_1 = require("../infra/Result");
const ProductsRepository_1 = require("../repository/ProductsRepository");
class ProductsService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield ProductsRepository_1.ProductsRepository.findById(_id);
            return result;
        });
    }
    getAllWithLimit(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new Result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield ProductsRepository_1.ProductsRepository.count({});
            result.Data = yield ProductsRepository_1.ProductsRepository.find({})
                .skip(page * qtd - qtd)
                .limit(qtd);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield ProductsRepository_1.ProductsRepository.find({});
            return result;
        });
    }
    getPerCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield ProductsRepository_1.ProductsRepository.find({ category: category });
            return result;
        });
    }
    getPerSearch(search) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield ProductsRepository_1.ProductsRepository.find({ $or: [{ name: { '$regex': search, '$options': 'i' } }, { description: { '$regex': search, '$options': 'i' } }] });
            return result;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield ProductsRepository_1.ProductsRepository.findByIdAndDelete(id);
            return result;
        });
    }
    registerProduct(name, price, images, description, category, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield new ProductsRepository_1.ProductsRepository({
                name: name,
                price: price,
                images: images,
                description: description,
                category: category,
                options: options,
            });
            result.save();
            return result;
        });
    }
    updateProduct(id, name, price, images, description, status, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProduct = yield ProductsRepository_1.ProductsRepository.findOneAndUpdate({ _id: id }, {
                    $set: {
                        name: name,
                        price: price,
                        images: images,
                        description: description,
                        status: status,
                        options: options,
                    },
                });
                return { status: "success" };
            }
            catch (error) {
                return { status: "Error: " + error.toString() };
            }
        });
    }
}
exports.ProductsService = ProductsService;
