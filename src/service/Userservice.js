const http = new Http();
import { Http } from '@/core/Http';

export class Userservice {
  constructor() {
    this.http = new Http('/user/');
  }
  async finduser({ email }) {
    const userData = await this.http.get({ email });
    if (userData.pop() != undefined) {
      return true;
    }
    return false;
  }
  signin() {}
  async signup({ email, password }) {
    const duplicateuser = await this.finduser(email);
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
