"use strict";
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
    async forgotPassword(email) {
        const encryptedEmail = crypto_js_1.default.SHA256(email).toString();
        var iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
        const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
        const hash = crypto_js_1.default.AES.encrypt(encryptedEmail, secret, {
            iv: iv,
            mode: crypto_js_1.default.mode.CBC,
            padding: crypto_js_1.default.pad.Pkcs7,
        }).toString();
        const hashFormated = hash.split("/").join("___");
        const userIsRegistered = await UsersRepository_1.UsersRepository.find({
            email: encryptedEmail,
        }).count({});
        const hashExists = await ForgotPasswordRepository_1.ForgotPasswordRepository.find({
            hash: hashFormated,
        }).count({});
        const recoveryRepository = new ForgotPasswordRepository_1.ForgotPasswordRepository({
            hash: hashFormated,
        });
        const transporter = nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user: process.env.EMAIL_HM,
                pass: process.env.EMAIL_PASSWORD,
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_HM,
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
            <a width='100%' href='https://hm-design.vercel.app/recoverypassword/${hashFormated}'>
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
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return error;
                }
                else {
                    return "Email enviado!";
                }
            });
            if (hashExists === 0) {
                recoveryRepository.save();
            }
        }
        else {
            return "Usuário não existe!";
        }
    }
    async confirmHash(hash) {
        const hashExists = await ForgotPasswordRepository_1.ForgotPasswordRepository.find({
            hash: hash,
        }).count({});
        return hashExists;
    }
    async updatePassword(hash, password) {
        const hashFormated = hash.split("___").join("/");
        const encryptedPassword = crypto_js_1.default.SHA256(password).toString();
        const iv = crypto_js_1.default.enc.Base64.parse(process.env.HASH_SECRET);
        const secret = crypto_js_1.default.SHA256(process.env.HASH_SECRET);
        const hashDecrypted = crypto_js_1.default.AES.decrypt(hashFormated, secret, {
            iv: iv,
            mode: crypto_js_1.default.mode.CBC,
            padding: crypto_js_1.default.pad.Pkcs7,
        }).toString(crypto_js_1.default.enc.Utf8);
        const deletehash = await ForgotPasswordRepository_1.ForgotPasswordRepository.findOneAndDelete({
            hash: hash,
        });
        const updatePassword = await UsersRepository_1.UsersRepository.findOneAndUpdate({ email: hashDecrypted }, { $set: { password: encryptedPassword } });
        if (updatePassword && deletehash) {
            return "Success";
        }
        return "Failure";
    }
}
exports.ForgotPasswordService = ForgotPasswordService;
