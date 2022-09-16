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
var CategoryService_1 = require("../services/CategoryService");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
        this._service = new CategoryService_1.CategoryService();
    }
    CategoryController.prototype.get = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var page, qtd, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        page = request.params.page ? parseInt(request.params.page) : 1;
                        qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
                        return [4 /*yield*/, this._service.getAllWithLimit(page, qtd)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        response.status(500).json({ error: error_1.message || error_1.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryController.prototype.getAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._service.getAll()];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        response.status(500).json({ error: error_2.message || error_2.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryController.prototype.getById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = request.params.id;
                        return [4 /*yield*/, this._service.get(_id)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        response.status(500).json({ error: error_3.message || error_3.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryController.prototype.registerCategory = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var category, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        category = request.params.category;
                        return [4 /*yield*/, this._service.registerCategory(category)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        response.status(500).json({ error: error_4.message || error_4.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryController.prototype.deleteCategory = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        return [4 /*yield*/, this._service.deleteCategory(id)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        response.status(500).json("Error: " + error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryController.prototype.updateCategory = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, category, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        category = request.params.category;
                        return [4 /*yield*/, this._service.updateCategory(id, category)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        response.status(500).json("Error: " + error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CategoryController;
}());
exports["default"] = new CategoryController();
