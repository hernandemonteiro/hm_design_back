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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const UsersRepository_1 = require("../repository/UsersRepository");
const crypto_js_1 = __importDefault(require("crypto-js"));
class UsersService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UsersRepository_1.UsersRepository.findById(_id);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UsersRepository_1.UsersRepository.find({});
            return result;
        });
    }
    userRegister(name, email, password, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
            const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
            const userIsRegistered = yield UsersRepository_1.UsersRepository.find({ email: encryptedEmail }).count({});
            if (userIsRegistered === 0) {
                let result = new UsersRepository_1.UsersRepository({
                    name: name,
                    email: encryptedEmail,
                    password: encryptedPassword,
                    type: type,
                });
                result.save();
                return result;
            }
            else {
                let message = "user registered";
                return message;
            }
        });
    }
    updateUser(id, name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = crypto_js_1.default.SHA256(password);
            const encryptedEmail = crypto_js_1.default.SHA256(email);
            try {
                yield UsersRepository_1.UsersRepository.findOneAndUpdate({ _id: id }, {
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
        });
    }
    deleteUser(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUser = yield UsersRepository_1.UsersRepository.findByIdAndDelete(_id);
            return deleteUser;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
            const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
            const user = yield UsersRepository_1.UsersRepository.findOne({
                email: encryptedEmail,
                password: encryptedPassword,
            });
            return user;
        });
    }
}
exports.UsersService = UsersService;
