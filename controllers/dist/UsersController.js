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
var UsersServices_1 = require("../services/UsersServices");
var crypto_js_1 = require("crypto-js");
var UsersController = /** @class */ (function () {
    function UsersController() {
        this._service = new UsersServices_1.UsersService();
    }
    UsersController.prototype.getAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
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
                        error_1 = _a.sent();
                        response.status(500).json({ error: error_1.message || error_1.toString() });
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.getById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result, error_2;
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
                        error_2 = _a.sent();
                        response.status(500).json({ error: error_2.message || error_2.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.userRegister = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, email, password, type, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name = request.params.name;
                        email = request.params.email;
                        password = request.params.password;
                        type = request.params.type;
                        return [4 /*yield*/, this._service.userRegister(name, email, password, type)];
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
    UsersController.prototype.updateUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, name, email, password, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        name = request.params.name;
                        email = request.params.email;
                        password = request.params.password;
                        return [4 /*yield*/, this._service.updateUser(id, name, email, password)];
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
    UsersController.prototype.deleteUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = request.params.id;
                        return [4 /*yield*/, this._service.deleteUser(_id)];
                    case 1:
                        result = _a.sent();
                        response.status(200).json({ result: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        response.status(500).json({ error: error_5.message || error_5.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.login = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, result, convertResult, iv, secret, jwt, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        email = request.params.email;
                        password = request.params.password;
                        return [4 /*yield*/, this._service.login(email, password)];
                    case 1:
                        result = _a.sent();
                        convertResult = JSON.stringify({
                            id: result._id,
                            type: result.type
                        });
                        iv = crypto_js_1["default"].enc.Base64.parse(process.env.HASH_SECRET);
                        secret = crypto_js_1["default"].SHA256(process.env.HASH_SECRET);
                        jwt = crypto_js_1["default"].AES.encrypt(convertResult, secret, {
                            iv: iv,
                            mode: crypto_js_1["default"].mode.CBC,
                            padding: crypto_js_1["default"].pad.Pkcs7
                        }).toString();
                        return [2 /*return*/, response.status(200).json({ jwt: jwt })];
                    case 2:
                        error_6 = _a.sent();
                        response.status(500).json({ error: error_6.message || error_6.toString() });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UsersController;
}());
exports["default"] = new UsersController();
