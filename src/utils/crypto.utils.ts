import CryptoJS from "crypto-js";

export function cryptoDecrypt(value) {
  const iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
  const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
  const tokenDecrypted = CryptoJS.AES.decrypt(value, secret, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  return tokenDecrypted;
}

export function cryptoEncrypt(value) {
  const iv = CryptoJS.enc.Base64.parse(process.env.HASH_SECRET);
  const secret = CryptoJS.SHA256(process.env.HASH_SECRET);
  const tokenEncrypted = CryptoJS.AES.encrypt(value, secret, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return tokenEncrypted;
}
