import { Component } from '@/core/Component';
import { Userservice } from '@/service/Userservice';
import router from '@/router';
export class test extends Component {
  setup() {
    this.userservice = new Userservice();
  }
  onMounted() {
    this.Eventadd('click', '.signup', () => {
      this.signup();
    });
  }
  async signup() {
    const email = this.selector(`[name="email"]`).value;
    const password = this.selector(`[name="password"]`).value;
    const succces = await this.userservice.signup({ email, password });
    if (succces) {
      alert('회원가입완료');
      router.push('/');
    }
  }
  template() {
    return `
        <input type="text" name="email">
        <input type="text" name="password">
        <button type="button" class="signup">회원가입</button>
    `;
  }
}
