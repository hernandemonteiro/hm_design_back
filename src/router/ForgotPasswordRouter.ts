import express from "express";
import ForgotPasswordController from "../controllers/ForgotPasswordController";

const forgotPasswordRouter = express();
/*
 * @description forgot password method to send an email with hash;
 * @param [email] used to find user;
 * @return a string with the response;
 */
forgotPasswordRouter
  .route("/forgotPassword/:email")
  .post((req, res) => ForgotPasswordController.forgotPassword(req, res));

/*
 * @description this route find a hash in forgotPassword Collection;
 * @param [hash] used to find hash;
 * @return [1] == Sucess or [0] == notfound;
 */
forgotPasswordRouter
  .route("/confirmHash/:hash")
  .get((req, res) => ForgotPasswordController.confirmHash(req, res));

/*
 * @description this route find a hash in forgotPassword Collection;
 * @param [hash] used to find hash;
 * @return Sucess or Failure in string;
 */
forgotPasswordRouter
  .route("/updatePassword/:hash/:password")
  .put((req, res) => ForgotPasswordController.updatePassword(req, res));

export default forgotPasswordRouter;
