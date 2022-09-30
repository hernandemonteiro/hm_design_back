"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const Result_1 = require("../infra/Result");
const ProductsRepository_1 = require("../repository/ProductsRepository");
class ProductsService {
    async get(_id) {
        const result = await ProductsRepository_1.ProductsRepository.findById(_id);
        return result;
    }
    async getAllWithLimit(page, qtd) {
        const result = new Result_1.Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await ProductsRepository_1.ProductsRepository.count({});
        result.Data = await ProductsRepository_1.ProductsRepository.find({})
            .skip(page * qtd - qtd)
            .limit(qtd);
        return result;
    }
    async getAll() {
        const result = await ProductsRepository_1.ProductsRepository.find({});
        return result;
    }
    async getPerCategory(category) {
        const result = await ProductsRepository_1.ProductsRepository.find({ category: category });
        return result;
    }
    async getPerSearch(search) {
        const result = await ProductsRepository_1.ProductsRepository.find({
            $or: [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ],
        });
        return result;
    }
    async deleteProduct(id) {
        const result = await ProductsRepository_1.ProductsRepository.findByIdAndDelete(id);
        return result;
    }
    async registerProduct(name, price, images, description, category, options) {
        const result = await new ProductsRepository_1.ProductsRepository({
            name: name,
            price: price,
            images: images,
            description: description,
            category: category,
            options: options,
        });
        result.save();
        return result;
    }
    async updateProduct(id, name, price, images, description, status, options) {
        try {
            await ProductsRepository_1.ProductsRepository.findOneAndUpdate({ _id: id }, {
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
    }
}
exports.ProductsService = ProductsService;
