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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CategoryService = void 0;
var Result_1 = require("../infra/Result");
var CategoryRepository_1 = require("../repository/CategoryRepository");
var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    CategoryService.prototype.get = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CategoryRepository_1.CategoryRepository.findById(_id)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CategoryService.prototype.getAllWithLimit = function (page, qtd) {
        return __awaiter(this, void 0, Promise, function () {
            var result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = new Result_1.Result();
                        result.Page = page;
                        result.Qtd = qtd;
                        _a = result;
                        return [4 /*yield*/, CategoryRepository_1.CategoryRepository.count({})];
                    case 1:
                        _a.Total = _c.sent();
                        _b = result;
                        return [4 /*yield*/, CategoryRepository_1.CategoryRepository.find({})
                                .skip(page * qtd - qtd)
                                .limit(qtd)];
                    case 2:
                        _b.Data = _c.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CategoryService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CategoryRepository_1.CategoryRepository.find({})];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CategoryService.prototype.registerCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new CategoryRepository_1.CategoryRepository({
                            category: category
                        })];
                    case 1:
                        result = _a.sent();
                        result.save();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CategoryRepository_1.CategoryRepository.findByIdAndDelete(id)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CategoryService.prototype.updateCategory = function (id, category) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedCategory, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, CategoryRepository_1.CategoryRepository.findOneAndUpdate({ _id: id }, {
                                $set: {
                                    category: category
                                }
                            })];
                    case 1:
                        updatedCategory = _a.sent();
                        return [2 /*return*/, { status: "success" }];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, { status: "Error: " + error_1.toString() }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CategoryService;
}());
exports.CategoryService = CategoryService;
