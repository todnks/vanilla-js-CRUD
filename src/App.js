import { Component } from '@/core/Component';
import router from '@/router';
export class App extends Component {
  onMounted() {
    router.start();
  }
  template() {
    return `
    <div class="main">
    <div data-href="/">home</div>
    <div data-href="/signup">회원가입</div>
    <div data-href="/signin">로그인</div>
    </div>
      <div class="content">
      </div>
    `;
  }
}
