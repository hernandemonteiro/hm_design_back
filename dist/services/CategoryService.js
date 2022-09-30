"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const Result_1 = require("../infra/Result");
const CategoryRepository_1 = require("../repository/CategoryRepository");
class CategoryService {
    async get(_id) {
        const result = await CategoryRepository_1.CategoryRepository.findById(_id);
        return result;
    }
    async getAllWithLimit(page, qtd) {
        const result = new Result_1.Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await CategoryRepository_1.CategoryRepository.count({});
        result.Data = await CategoryRepository_1.CategoryRepository.find({})
            .skip(page * qtd - qtd)
            .limit(qtd);
        return result;
    }
    async getAll() {
        const result = await CategoryRepository_1.CategoryRepository.find({});
        return result;
    }
    async registerCategory(category) {
        const result = await new CategoryRepository_1.CategoryRepository({
            category: category,
        });
        result.save();
        return result;
    }
    async deleteCategory(id) {
        const result = await CategoryRepository_1.CategoryRepository.findByIdAndDelete(id);
        return result;
    }
    async updateCategory(id, category) {
        try {
            await CategoryRepository_1.CategoryRepository.findOneAndUpdate({ _id: id }, {
                $set: {
                    category: category,
                },
            });
            return { status: "success" };
        }
        catch (error) {
            return { status: "Error: " + error.toString() };
        }
    }
}
exports.CategoryService = CategoryService;
