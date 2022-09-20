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
exports.ForgotPasswordService = void 0;
var UsersRepository_1 = require("../repository/UsersRepository");
var nodemailer = require("nodemailer");
var crypto_js_1 = require("crypto-js");
var ForgotPasswordRepository_1 = require("../repository/ForgotPasswordRepository");
var ForgotPasswordService = /** @class */ (function () {
    function ForgotPasswordService() {
    }
    ForgotPasswordService.prototype.forgotPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var encryptedEmail, iv, secret, hash, userIsRegistered, hashExists, recoveryRepository, transporter, mailOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encryptedEmail = crypto_js_1["default"].SHA256(email).toString();
                        iv = crypto_js_1["default"].enc.Base64.parse(process.env.HASH_SECRET);
                        secret = crypto_js_1["default"].SHA256(process.env.HASH_SECRET);
                        hash = crypto_js_1["default"].AES.encrypt(encryptedEmail, secret, {
                            iv: iv,
                            mode: crypto_js_1["default"].mode.CBC,
                            padding: crypto_js_1["default"].pad.Pkcs7
                        })
                            .toString();
                        return [4 /*yield*/, UsersRepository_1.UsersRepository.find({
                                email: encryptedEmail
                            }).count({})];
                    case 1:
                        userIsRegistered = _a.sent();
                        return [4 /*yield*/, ForgotPasswordRepository_1.ForgotPasswordRepository.find({
                                hash: hash
                            }).count({})];
                    case 2:
                        hashExists = _a.sent();
                        recoveryRepository = new ForgotPasswordRepository_1.ForgotPasswordRepository({
                            hash: hash
                        });
                        transporter = nodemailer.createTransport({
                            service: "Hotmail",
                            auth: {
                                user: "hm_design_store@outlook.com",
                                pass: process.env.EMAIL_PASSWORD
                            }
                        });
                        mailOptions = {
                            from: "hm_design_store@outlook.com",
                            to: email,
                            subject: "Recuperação de senha!",
                            html: "\n      <html>\n        <body style='display: flex; justify-content: center;\n          align-items: center; padding: 4%'>\n          <div style='width: 100%; text-align: center'>\n            <h1>HM Design</h1>\n            <br>\n            <p>\n            Voc\u00EA est\u00E1 prestes a recuperar sua senha!\n            <br><br>\n            Clique no bot\u00E3o abaixo para iniciar processo:\n            </p>\n            <br><br>\n            <a width='100%' href='https://hm-design.vercel.app/recoverypassword/[" + hash + "]'>\n              <button style='padding: 4%; color: white; border-radius: 25px; background-color: green'>\n                RECUPERAR SENHA!\n              </button>\n            </a>\n          </div>\n        <body>\n      </html>\n      "
                        };
                        if (userIsRegistered > 0) {
                            // send the email
                            transporter.sendMail(mailOptions, function (error) {
                                if (error) {
                                    return error;
                                }
                            });
                            // save the records of hash in the repository;
                            if (hashExists === 0) {
                                recoveryRepository.save();
                            }
                            return [2 /*return*/, "Email enviado!"];
                        }
                        else {
                            return [2 /*return*/, "Usuário não existe!"];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordService.prototype.confirmHash = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var hashExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ForgotPasswordRepository_1.ForgotPasswordRepository.find({
                            hash: hash
                        }).count({})];
                    case 1:
                        hashExists = _a.sent();
                        return [2 /*return*/, hashExists];
                }
            });
        });
    };
    ForgotPasswordService.prototype.updatePassword = function (hash, password) {
        return __awaiter(this, void 0, void 0, function () {
            var hashInitial, encryptedPassword, iv, secret, hashDecrypted, deletehash, updatePassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hashInitial = hash.replace("___", "/");
                        encryptedPassword = crypto_js_1["default"].SHA256(password).toString();
                        iv = crypto_js_1["default"].enc.Base64.parse(process.env.HASH_SECRET);
                        secret = crypto_js_1["default"].SHA256(process.env.HASH_SECRET);
                        hashDecrypted = crypto_js_1["default"].AES.decrypt(hashInitial, secret, {
                            iv: iv,
                            mode: crypto_js_1["default"].mode.CBC,
                            padding: crypto_js_1["default"].pad.Pkcs7
                        }).toString(crypto_js_1["default"].enc.Utf8);
                        return [4 /*yield*/, ForgotPasswordRepository_1.ForgotPasswordRepository.findOneAndDelete({ hash: hash })];
                    case 1:
                        deletehash = _a.sent();
                        return [4 /*yield*/, UsersRepository_1.UsersRepository.findOneAndUpdate({ email: hashDecrypted }, { $set: { password: encryptedPassword } })];
                    case 2:
                        updatePassword = _a.sent();
                        // implement a method to delete the hash in the forgotPassword collection
                        if (updatePassword && deletehash) {
                            return [2 /*return*/, "Success"];
                        }
                        return [2 /*return*/, "Failure"];
                }
            });
        });
    };
    return ForgotPasswordService;
}());
exports.ForgotPasswordService = ForgotPasswordService;
