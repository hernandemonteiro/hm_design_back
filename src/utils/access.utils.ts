import CryptoUtils from "./CryptoUtils";
import { errorPage } from "./error.utils";

export class AccessAPI {
  async userAccessAPI(req) {
    const auth = req.headers["x-user-token"];
    const token = await CryptoUtils.DecryptValue(auth || "empty");
    let access;
    token === process.env.HASH_SECRET_USER
      ? (access = "pass")
      : (access = "fail");
    return access;
  }

  async adminAccessAPI(req) {
    const auth = req.headers["x-admin-token"];
    const token = await CryptoUtils.DecryptValue(auth || "empty");
    let access;
    token === process.env.HASH_SECRET_ADMIN
      ? (access = "pass")
      : (access = "fail");
    return access;
  }
  
  async tokenSecurity(req, res, next) {
    const Authenticate = req.headers["x-access-token"];
    // const auth = req.headers["authorization"];
    // const Authenticate = auth.split(" ")[1];
    const token = await CryptoUtils.DecryptValue(Authenticate || "empty");
    token === process.env.HASH_SECRET
      ? next()
      : res.status(401).send(await errorPage());
  }
}

export default new AccessAPI();
