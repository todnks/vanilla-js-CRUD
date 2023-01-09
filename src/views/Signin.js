import { component } from '@/core/component';
import router from '@/router';
import { userService } from '@/service/userService';

export class signIn extends component {
  setup() {
    this.userService = new userService();
  }
  onMounted() {
    this.eventAdd('click', '.signin', () => {
      this.signIn();
    });
  }
  async signIn() {
    const email = this.selector(`[name=email]`).value;
    const password = this.selector(`[name=password]`).value;
    const succces = await this.userService.signIn({ email, password });
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
