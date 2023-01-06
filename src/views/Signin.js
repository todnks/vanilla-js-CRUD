import { Component } from '@/core/Component';
import router from '@/router';
import { Userservice } from '@/service/Userservice';

export class Signin extends Component {
  setup() {
    this.userservice = new Userservice();
  }
  onMounted() {
    this.Eventadd('click', '.signin', () => {
      this.signin();
    });
  }
  async signin() {
    const email = this.selector(`[name=email]`).value;
    const password = this.selector(`[name=password]`).value;
    const succces = await this.userservice.signin({ email, password });
    if (succces) {
      alert('로그인완료');
      router.push('/');
    }
  }
  template() {
    return `
    <div data-href="/">홈</div>
    <div>로그인</div>
    <input type="text" name="email">
    <input type="text" name="password">
    <button type="button" class="signin">로그인</button>
    `;
  }
}
