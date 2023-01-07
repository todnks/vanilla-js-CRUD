const http = new Http();
import { Http } from '@/core/Http';
import { Repository } from '@/core/Repository';
import { Validator } from '@/core/Validator';

export class Userservice {
  constructor() {
    this.http = new Http('/user/');
    this.validator = Validator;
    this.repository = Repository;
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
    if (!getuserdata && password != getuserdata.password) {
      alert('아이디혹은 비밀번호 틀림');
      return;
    }
    this.repository.set('user', getuserdata);
    await this.http.put(getuserdata.id, {
      email,
      password,
      loginDate: new Date(),
    });
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

  logout() {
    if (this.repository.get('user') === undefined) {
      return false;
    }
    this.repository.remove('user');
    return true;
  }
}
