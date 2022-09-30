"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ForgotPasswordService_1 = require("../services/ForgotPasswordService");
class ForgotPasswordController {
    _service;
    constructor() {
        this._service = new ForgotPasswordService_1.ForgotPasswordService();
    }
    async forgotPassword(request, response) {
        try {
            const email = request.params.email;
            const result = await this._service.forgotPassword(email);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async confirmHash(request, response) {
        try {
            const hash = request.params.hash;
            const result = await this._service.confirmHash(hash);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async updatePassword(request, response) {
        try {
            const hash = request.params.hash;
            const password = request.params.password;
            const result = await this._service.updatePassword(hash, password);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
}
exports.default = new ForgotPasswordController();
