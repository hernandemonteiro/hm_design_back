"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ForgotPasswordController_1 = require("../controllers/ForgotPasswordController");
var forgotPasswordRouter = express_1["default"]();
/*
 * @description forgot password method to send an email with hash;
 * @param [email] used to find user;
 * @return a string with the response;
 */
forgotPasswordRouter.route("/forgotPassword/:email").post(function (req, res) {
    return ForgotPasswordController_1["default"].forgotPassword(req, res);
});
/*
* @description this route find a hash in forgotPassword Collection;
* @param [hash] used to find hash;
* @return [1] == Sucess or [0] == notfound;
*/
forgotPasswordRouter.route("/confirmHash/:hash").get(function (req, res) {
    return ForgotPasswordController_1["default"].confirmHash(req, res);
});
/*
* @description this route find a hash in forgotPassword Collection;
* @param [hash] used to find hash;
* @return Sucess or Failure in string;
*/
forgotPasswordRouter.route("/updatePassword/:hash/:password").put(function (req, res) {
    return ForgotPasswordController_1["default"].updatePassword(req, res);
});
exports["default"] = forgotPasswordRouter;
