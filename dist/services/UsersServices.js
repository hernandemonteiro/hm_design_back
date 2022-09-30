"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const UsersRepository_1 = require("../repository/UsersRepository");
const crypto_js_1 = __importDefault(require("crypto-js"));
class UsersService {
    async get(_id) {
        const result = await UsersRepository_1.UsersRepository.findById(_id);
        return result;
    }
    async getAll() {
        const result = await UsersRepository_1.UsersRepository.find({});
        return result;
    }
    async userRegister(name, email, password, type) {
        const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
        const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
        const userIsRegistered = await UsersRepository_1.UsersRepository.find({
            email: encryptedEmail,
        }).count({});
        if (userIsRegistered === 0) {
            const result = new UsersRepository_1.UsersRepository({
                name: name,
                email: encryptedEmail,
                password: encryptedPassword,
                type: type,
            });
            result.save();
            return result;
        }
        else {
            const message = "user registered";
            return message;
        }
    }
    async updateUser(id, name, email, password) {
        const encryptedPassword = crypto_js_1.default.SHA256(password);
        const encryptedEmail = crypto_js_1.default.SHA256(email);
        try {
            await UsersRepository_1.UsersRepository.findOneAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    email: encryptedEmail,
                    password: encryptedPassword,
                },
            });
            return { status: "success" };
        }
        catch (error) {
            return { status: "Error: " + error.toString() };
        }
    }
    async deleteUser(_id) {
        const deleteUser = await UsersRepository_1.UsersRepository.findByIdAndDelete(_id);
        return deleteUser;
    }
    async login(email, password) {
        const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
        const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
        const user = await UsersRepository_1.UsersRepository.findOne({
            email: encryptedEmail,
            password: encryptedPassword,
        });
        return user;
    }
}
exports.UsersService = UsersService;
