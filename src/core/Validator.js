export class Validator {
  static isemail(value, errormsg) {
    const emailRegExp = new RegExp(
      /([a-zA-Z0-9_-]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9])/
    );
    return emailRegExp.test(value) || errormsg;
  }
  static ispassword(value, errormsg) {
    const ispasswordExp = new RegExp(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}/
    );
    return ispasswordExp.test(value) || errormsg;
  }
}
