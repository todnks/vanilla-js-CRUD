export class validator {
  static isEmail(value, errormsg) {
    const isEmailRegExp = new RegExp(
      /([a-zA-Z0-9_-]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9])/
    );
    return isEmailRegExp.test(value) || errormsg;
  }
  static isPassword(value, errormsg) {
    const isPasswordExp = new RegExp(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}/
    );
    return isPasswordExp.test(value) || errormsg;
  }
  static getNumber(value) {
    const isNumber = new RegExp(/[^0-9]/g);
    const result = value.replace(isNumber, '');
    return result;
  }
}
