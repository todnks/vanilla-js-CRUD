const http = new Http();
import { Http } from '@/core/Http';
import { Validator } from '@/core/Validator';

export class Userservice {
  constructor() {
    this.http = new Http('/user/');
    this.validator = Validator;
  }
  async finduser(email) {
    const userData = await this.http.get({
      email,
    });
    if (userData.length >= 1) {
      return userData.pop();
    }
    return false;
  }
  async signin({ email, password }) {
    const isEmail = this.validator.isemail(email, '이메일 형식을 지켜주세요.');
    const isPassword = this.validator.ispassword(
      password,
      '비밀번호는 영문, 숫자 포함 8자리 이상이여야합니다.'
    );
    if (isEmail !== true) {
      alert(isEmail);
      return;
    }
    if (isPassword !== true) {
      alert(isPassword);
      return;
    }
    const getuserdata = await this.finduser(email);
    if (!getuserdata) {
      alert('존재하지않는 유저입니다');
      return;
    }
    if (password != getuserdata.password) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    return true;
  }
  async signup({ email, password }) {
    const isEmail = this.validator.isemail(email, '이메일 형식을 지켜주세요.');
    const isPassword = this.validator.ispassword(
      password,
      '비밀번호는 영문, 숫자 포함 8자리 이상이여야합니다.'
    );
    if (isEmail !== true) {
      alert(isEmail);
      return;
    }
    if (isPassword !== true) {
      alert(isPassword);
      return;
    }
    const duplicateuser = await this.finduser({ email });
    if (duplicateuser) {
      alert('중복된 이메일');
      return;
    }
    await this.http.post({
      email,
      password,
      registerDate: new Date(),
      loginDate: new Date(),
    });
    return true;
  }
}
