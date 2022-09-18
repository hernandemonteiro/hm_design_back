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
const ForgotPasswordService_1 = require("../services/ForgotPasswordService");
class ForgotPasswordController {
    constructor() {
        this._service = new ForgotPasswordService_1.ForgotPasswordService();
    }
    forgotPassword(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = request.params.email;
                let result = yield this._service.forgotPassword(email);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    confirmHash(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hash = request.params.hash;
                let result = yield this._service.confirmHash(hash);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    updatePassword(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hash = request.params.hash;
                const password = request.params.password;
                let result = yield this._service.updatePassword(hash, password);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
}
exports.default = new ForgotPasswordController();
