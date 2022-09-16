import { iUsersService } from "../contracts/iUsersServices";
import { UsersRepository } from "../repository/UsersRepository";
const nodemailer = require("nodemailer");
import CryptoJS from "crypto-js";

export class UsersService implements iUsersService {
  async get(_id: string) {
    let result = await UsersRepository.findById(_id);
    return result;
  }

  async getAll() {
    let result = await UsersRepository.find({});
    return result;
  }

  async userRegister(
    name: string,
    email: string,
    password: string,
    type: string
  ) {
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    const encryptedEmail = CryptoJS.SHA256(email).toString();
    const userIsRegistered = await UsersRepository.find({
      email: encryptedEmail,
    }).count({});

    if (userIsRegistered === 0) {
      let result = new UsersRepository({
        name: name,
        email: encryptedEmail,
        password: encryptedPassword,
        type: type,
      });

      result.save();
      return result;
    } else {
      let message = "user registered";
      return message;
    }
  }
  async updateUser(id: string, name: string, email: string, password: string) {
    const encryptedPassword = CryptoJS.SHA256(password);
    const encryptedEmail = CryptoJS.SHA256(email);
    try {
      await UsersRepository.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: name,
            email: encryptedEmail,
            password: encryptedPassword,
          },
        }
      );
      return { status: "success" };
    } catch (error) {
      return { status: "Error: " + error.toString() };
    }
  }

  async deleteUser(_id: string) {
    const deleteUser = await UsersRepository.findByIdAndDelete(_id);
    return deleteUser;
  }

  async login(email: string, password: string) {
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    const encryptedEmail = CryptoJS.SHA256(email).toString();

    const user = await UsersRepository.findOne({
      email: encryptedEmail,
      password: encryptedPassword,
    });
    return user;
  }

  async forgotPassword(email: string) {
    const encryptedEmail = CryptoJS.SHA256(email).toString();
    const userIsRegistered = await UsersRepository.find({
      email: encryptedEmail,
    }).count({});
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
            <a width='100%' href='https://hm-design.vercel.app/forgotpassword/${encryptedEmail}'>
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
      return "Email enviado!";
    } else {
      return "Usuário não existe!";
    }
  }
}
