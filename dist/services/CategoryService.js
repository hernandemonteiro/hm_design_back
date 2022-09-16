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
exports.CategoryService = void 0;
const Result_1 = require("../infra/Result");
const CategoryRepository_1 = require("../repository/CategoryRepository");
class CategoryService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield CategoryRepository_1.CategoryRepository.findById(_id);
            return result;
        });
    }
    getAllWithLimit(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new Result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield CategoryRepository_1.CategoryRepository.count({});
            result.Data = yield CategoryRepository_1.CategoryRepository.find({})
                .skip(page * qtd - qtd)
                .limit(qtd);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield CategoryRepository_1.CategoryRepository.find({});
            return result;
        });
    }
    registerCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield new CategoryRepository_1.CategoryRepository({
                category: category,
            });
            result.save();
            return result;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield CategoryRepository_1.CategoryRepository.findByIdAndDelete(id);
            return result;
        });
    }
    updateCategory(id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCategory = yield CategoryRepository_1.CategoryRepository.findOneAndUpdate({ _id: id }, {
                    $set: {
                        category: category,
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
exports.CategoryService = CategoryService;
