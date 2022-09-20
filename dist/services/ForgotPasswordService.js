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
exports.ForgotPasswordService = void 0;
const UsersRepository_1 = require("../repository/UsersRepository");
const nodemailer = require("nodemailer");
const crypto_js_1 = __importDefault(require("crypto-js"));
const ForgotPasswordRepository_1 = require("../repository/ForgotPasswordRepository");
class ForgotPasswordService {
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
            var iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
            const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
            const hash = crypto_js_1.default.AES.encrypt(encryptedEmail, secret, {
                iv: iv,
                mode: crypto_js_1.default.mode.CBC,
                padding: crypto_js_1.default.pad.Pkcs7,
            })
                .toString();
            const userIsRegistered = yield UsersRepository_1.UsersRepository.find({
                email: encryptedEmail,
            }).count({});
            const hashExists = yield ForgotPasswordRepository_1.ForgotPasswordRepository.find({
                hash: hash,
            }).count({});
            const recoveryRepository = new ForgotPasswordRepository_1.ForgotPasswordRepository({
                hash: `[${hash}]`,
            });
            const transporter = nodemailer.createTransport({
                service: "Hotmail",
                auth: {
                    user: "hm_design_store@outlook.com",
                    pass: process.env.EMAIL_PASSWORD,
                },
            });
            const mailOptions = {
                from: "hm_design_store@outlook.com",
                to: email,
                subject: "Recuperação de senha!",
                html: `
      <html>
        <body style='display: flex; justify-content: center;
          align-items: center; padding: 4%'>
          <div style='width: 100%; text-align: center'>
            <h1>HM Design</h1>
            <br>
            <p>
            Você está prestes a recuperar sua senha!
            <br><br>
            Clique no botão abaixo para iniciar processo:
            </p>
            <br><br>
            <a width='100%' href='https://hm-design.vercel.app/recoverypassword/[${hash}]'>
              <button style='padding: 4%; color: white; border-radius: 25px; background-color: green'>
                RECUPERAR SENHA!
              </button>
            </a>
          </div>
        <body>
      </html>
      `,
            };
            if (userIsRegistered > 0) {
                transporter.sendMail(mailOptions, function (error) {
                    if (error) {
                        return error;
                    }
                });
                if (hashExists === 0) {
                    recoveryRepository.save();
                }
                return "Email enviado!";
            }
            else {
                return "Usuário não existe!";
            }
        });
    }
    confirmHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashExists = yield ForgotPasswordRepository_1.ForgotPasswordRepository.find({
                hash: hash[0],
            }).count({});
            return hashExists;
        });
    }
    updatePassword(hash, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
            var iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
            const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
            const hashDecrypted = crypto_js_1.default.AES.decrypt(hash, secret, {
                iv: iv,
                mode: crypto_js_1.default.mode.CBC,
                padding: crypto_js_1.default.pad.Pkcs7,
            }).toString(crypto_js_1.default.enc.Utf8);
            const deletehash = yield ForgotPasswordRepository_1.ForgotPasswordRepository.findOneAndDelete({ hash: hash });
            const updatePassword = yield UsersRepository_1.UsersRepository.findOneAndUpdate({ email: hashDecrypted }, { $set: { password: encryptedPassword } });
            if (updatePassword && deletehash) {
                return "Success";
            }
            return "Failure";
        });
    }
}
exports.ForgotPasswordService = ForgotPasswordService;
