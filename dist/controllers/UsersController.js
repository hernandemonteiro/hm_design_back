"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersServices_1 = require("../services/UsersServices");
const crypto_js_1 = __importDefault(require("crypto-js"));
class UsersController {
    _service;
    constructor() {
        this._service = new UsersServices_1.UsersService();
    }
    async getAll(request, response) {
        try {
            const result = await this._service.getAll();
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
            console.log(error);
        }
    }
    async getById(request, response) {
        try {
            const _id = request.params.id;
            const result = await this._service.get(_id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async userRegister(request, response) {
        try {
            const name = request.params.name;
            const email = request.params.email;
            const password = request.params.password;
            const type = request.params.type;
            const result = await this._service.userRegister(name, email, password, type);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async updateUser(request, response) {
        try {
            const id = request.params.id;
            const name = request.params.name;
            const email = request.params.email;
            const password = request.params.password;
            const result = await this._service.updateUser(id, name, email, password);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async deleteUser(request, response) {
        try {
            const _id = request.params.id;
            const result = await this._service.deleteUser(_id);
            response.status(200).json({ result });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
    async login(request, response) {
        try {
            const email = request.params.email;
            const password = request.params.password;
            const result = await this._service.login(email, password);
            const convertResult = JSON.stringify({
                id: result._id,
                type: result.type,
            });
            const iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
            const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
            const jwt = crypto_js_1.default.AES.encrypt(convertResult, secret, {
                iv: iv,
                mode: crypto_js_1.default.mode.CBC,
                padding: crypto_js_1.default.pad.Pkcs7,
            }).toString();
            return response.status(200).json({ jwt });
        }
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
}
exports.default = new UsersController();
