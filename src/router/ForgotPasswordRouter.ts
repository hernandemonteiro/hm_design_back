import express from "express";
import ForgotPasswordController from "../controllers/ForgotPasswordController";

const forgotPasswordRouter = express();

// @description forgot password method to send an email with hash;
forgotPasswordRouter
  .route("/forgotPassword/:email")
  .post((req, res) => ForgotPasswordController.forgotPassword(req, res));

// @description  find a hash in forgotPassword Collection;
forgotPasswordRouter
  .route("/confirmHash/:hash")
  .get((req, res) => ForgotPasswordController.confirmHash(req, res));

// @description  find a hash in forgotPassword Collection;
forgotPasswordRouter
  .route("/updatePassword/:hash/:password")
  .put((req, res) => ForgotPasswordController.updatePassword(req, res));

export default forgotPasswordRouter;
