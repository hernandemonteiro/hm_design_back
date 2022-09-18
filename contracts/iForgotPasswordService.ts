export interface iForgotPasswordService {
  forgotPassword(email: string);

  confirmHash(hash: string);

  updatePassword(hash: string, password: string);
}
