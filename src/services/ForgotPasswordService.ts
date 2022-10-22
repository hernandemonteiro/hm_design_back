import { iForgotPasswordService } from "../contracts/iForgotPasswordService";
import { UsersRepository } from "../repository/UsersRepository";
import nodemailer from "nodemailer";
import CryptoJS from "crypto-js";
import { ForgotPasswordRepository } from "../repository/ForgotPasswordRepository";

export class ForgotPasswordService implements iForgotPasswordService {
  async forgotPassword(email: string) {
    const encryptedEmail = CryptoJS.SHA256(email).toString();
    const iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
    const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
    const hash = CryptoJS.AES.encrypt(encryptedEmail, secret, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    const hashFormated = hash.split("/").join("___");

    // verify if user is registered
    const userIsRegistered = await UsersRepository.count({
      email: encryptedEmail,
    });

    // // configs to reposite the hashs
    const hashExists = await ForgotPasswordRepository.count({
      hash: hashFormated,
    });

    // configs to email sender
    const transporter = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: process.env.EMAIL_HM,
        pass: process.env.EMAIL_PASSWORD,
      },
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
      // save the records of hash in the repository;
      if (hashExists === 0) {
        ForgotPasswordRepository.create({
          hash: hashFormated,
        });
      }
      // send the email
      transporter.sendMail(mailOptions, (error) =>
        error ? error : "Email enviado!"
      );
    } else {
      return "Usuário não existe!";
    }
  }

  async confirmHash(hash: string) {
    return await ForgotPasswordRepository.count({ hash: hash });
  }

  async updatePassword(hash: string, password: string) {
    const hashFormated = hash.split("___").join("/");
    const encryptedPassword = CryptoJS.SHA256(password).toString();

    const iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
    const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
    const hashDecrypted = CryptoJS.AES.decrypt(hashFormated, secret, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);

    const deletehash = await ForgotPasswordRepository.findOneAndDelete({
      hash: hash,
    });

    const updatePassword = await UsersRepository.findOneAndUpdate(
      { email: hashDecrypted },
      { $set: { password: encryptedPassword } }
    );

    if (updatePassword && deletehash) {
      return "Success";
    } else {
      return "Failure";
    }
  }
}
export default new ForgotPasswordService();
