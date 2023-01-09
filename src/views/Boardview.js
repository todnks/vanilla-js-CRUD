import { component } from '@/core/component';
import { boardService } from '@/service/boardService';
import { repository } from '@/core/repository';
import router from '@/router';
import { validator } from '@/core/validator';

export class boardView extends component {
  hash;
  list;
  user;
  setup() {
    this.validator = validator;
    this.repository = repository;
    this.hash = this.validator.getNumber(location.hash);
    this.boardService = new boardService();
    this.userChk = false;
  }
  async onMounted() {
    this.list = await this.boardService.listup(this.hash, '');
    this.user = this.repository.get('user');
    if (this.user && this.list) {
      if (
        this.list.userdata.email === this.user.email &&
        this.list.userdata.password === this.user.password
      ) {
        this.userChk = true;
      }
    }
    this.render();
    this.eventAdd('click', '.delete', () => {
      this.boarddelete();
    });
  }
  boarddelete() {
    this.hash = this.validator.getNumber(location.hash);
    this.boardService.boarddelete(this.hash);
    alert('글삭제완료');
    router.push('/');
    return;
  }
  template() {
    if (this.list && this.userChk) {
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
    if (!this.list) {
      return `
      <div>삭제된 글입니다</div>
      `;
    }
  }
}
