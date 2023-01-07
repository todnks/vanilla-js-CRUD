import { Component } from '@/core/Component';
import router from '@/router';
import { Repository } from '@/core/Repository';
import { Userservice } from '@/service/Userservice';

export class Home extends Component {
  userdata;
  setup() {
    this.Repository = Repository;
    this.userdata = this.Repository.get('user');
    this.userservice = new Userservice();
  }
  logout() {
    if (this.userservice.logout()) {
      alert('로그아웃');
      this.template();
    }
  }
  onMounted() {
    router.start();
    this.Eventadd('click', '.logout', () => {
      this.logout();
      location.reload();
    });
  }
  template() {
    if (this.userdata) {
      return `
        <div>이메일:${this.userdata.email}</div>
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
