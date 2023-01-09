import { component } from '@/core/component';
import { userService } from '@/service/userService';
import router from '@/router';

export class signUp extends component {
  setup() {
    this.userService = new userService();
  }
  onMounted() {
    this.eventAdd('click', '.signup', () => {
      this.signUp();
    });
  }
  async signUp() {
    const email = this.selector(`[name="email"]`).value;
    const password = this.selector(`[name="password"]`).value;
    const succces = await this.userService.signUp({ email, password });
    if (succces) {
      alert('회원가입완료');
      router.push('/');
    }
  }
  template() {
    return `
    <div data-href="/">홈</div>
        <div>회원가입</div>
        <input type="text" name="email">
        <input type="text" name="password">
        <button type="button" class="signup">회원가입</button>
    `;
  }
}
