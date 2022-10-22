import CryptoJS from "crypto-js";

export class CryptoUtils {
  private iv;
  private secret;
  private configObjAES;

  constructor() {
    this.iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET || "");
    this.secret = CryptoJS.SHA256(process.env.HASH_SECRET || "");
    this.configObjAES = {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
  }

  DecryptValue(value) {
    const tokenDecrypted = CryptoJS.AES.decrypt(
      value,
      this.secret,
      this.configObjAES
    ).toString(CryptoJS.enc.Utf8);
    return tokenDecrypted;
  }

  EncryptValue(value) {
    const tokenEncrypted = CryptoJS.AES.encrypt(
      value,
      this.secret,
      this.configObjAES
    ).toString();

    return tokenEncrypted;
  }
}

export default new CryptoUtils();
