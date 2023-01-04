const http = new Http();
import { Http } from '@core/Http';

export class Userservice {
  constructor() {
    this.http = new Http('/user');
  }
  signin() {}
  async signup({ email, password }) {
    const aa = await this.http.get();
    return aa.json();
  }
}
