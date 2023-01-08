import { Component } from '@/core/Component';
import { Boardservice } from '@/service/Boardservice';
import { Repository } from '@/core/Repository';
import router from '@/router';

export class Boardview extends Component {
  hash;
  list;
  user;
  userchk;
  setup() {
    this.Repository = Repository;
    this.hash = location.hash.slice(
      location.hash.length - 1,
      location.hash.length
    );
    this.Boardservice = new Boardservice();
    this.userchk = false;
  }
  async onMounted() {
    this.list = await this.Boardservice.listup(this.hash, '');
    this.user = this.Repository.get('user');
    if (
      this.list.userdata.email === this.user.email &&
      this.list.userdata.password === this.user.password
    ) {
      this.userchk = true;
    }
    this.render();
    this.Eventadd('click', '.delete', () => {
      this.boarddelete();
    });
  }
  boarddelete() {
    this.hash = location.hash.slice(
      location.hash.length - 1,
      location.hash.length
    );
    this.Boardservice.boarddelete(this.hash);
    alert('글삭제완료');
    router.push('/');
    return;
  }
  template() {
    if (this.list && this.userchk) {
      return `
      <div data-href="/">홈</div>
      <div>글제목${this.list.name}</div>
      <div>글내용${this.list.content}</div>
      <div>글쓴이${this.list.userdata.email}</div>
      <div>글쓴시간${this.list.writeDate}</div>
      <div data-href="/edit/${this.list.id}">글수정</div>
      <button class="delete">글삭제</button>
      </div>
      `;
    }
    if (this.list) {
      return `
      <div>
      <div data-href="/">홈</div>
      <div>글제목${this.list.name}</div>
      <div>글내용${this.list.content}</div>
      <div>글쓴이${this.list.userdata.email}</div>
      <div>글쓴시간${this.list.writeDate}</div>
      </div>
      `;
    }
    if (this.list === undefined) {
      return `
      <div>삭제된 글입니다</div>
      `;
    }
  }
}