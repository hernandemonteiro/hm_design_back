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
exports.UsersService = void 0;
const UsersRepository_1 = require("../repository/UsersRepository");
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
            const userIsRegistered = yield UsersRepository_1.UsersRepository.find({ email: email }).count({});
            if (userIsRegistered == 0) {
                let result = new UsersRepository_1.UsersRepository({
                    name: name,
                    email: email,
                    password: password,
                    type: type,
                });
                result.save();
                return result;
            }
            else {
                let message = "Usuário já cadastrado";
                return message;
            }
        });
    }
    updateUser(id, name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield UsersRepository_1.UsersRepository.findOneAndUpdate({ _id: id }, { $set: { name: name, email: email, password: password } });
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
}
exports.UsersService = UsersService;
