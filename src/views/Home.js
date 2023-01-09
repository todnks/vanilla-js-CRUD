import { component } from '@/core/component';
import { repository } from '@/core/repository';
import { userService } from '@/service/userService';

export class home extends component {
  userData;
  setup() {
    this.repository = repository;
    this.userData = this.repository.get('user');
    this.userService = new userService();
  }
  logout() {
    if (this.userService.logout()) {
      alert('로그아웃');
      this.template();
    }
  }
  onMounted() {
    this.eventAdd('click', '.logout', () => {
      this.logout();
      location.reload();
    });
  }
  template() {
    if (this.userData) {
      return `
        <div>이메일:${this.userData.email}</div>
        <button class="logout">로그아웃</button>
        <div data-href="/write">글쓰기</div>
        <div data-href="/board">게시판</div>
      `;
    }
    return `
    <div data-href="/">home</div>
    <div data-href="/signup">회원가입</div>
    <div data-href="/signin">로그인</div>
    <div data-href="/board">게시판</div>
    `;
  }
}
