import { component } from '@/core/component';
import { repository } from '@/core/repository';
import { validator } from '@/core/validator';
import router from '@/router';
import { boardService } from '@/service/boardService';

export class boardEdit extends component {
  data;
  hash;
  user;

  setup() {
    this.validator = validator;
    this.repository = repository;
    this.boardService = new boardService();
    this.hash = this.validator.getNumber(location.hash);
  }

  async onMounted() {
    this.data = await this.boardService.listup(this.hash, '');
    this.user = this.repository.get('user');

    if (this.user && this.data) {
      const { email, password, id } = this.data.userdata;

      if (
        this.user.email != email &&
        this.user.id != id &&
        this.user.password != password
      ) {
        alert('본인만 가능함');
        router.push('/');
        return;
      }
    }

    this.render();
    this.eventAdd('click', '.edit', () => {
      this.boardEdit();
    });
  }
  boardEdit() {
    this.hash = this.validator.getNumber(location.hash);
    const name = this.selector(`[name="name"]`).value;
    const content = this.selector(`[name="content"]`).value;
    const res = this.boardService.boardEdit(
      `${this.hash}`,
      { name, content },
      this.user
    );
    if (res) {
      alert('글수정완료');
      router.push('/');
      return;
    }
  }

  template() {
    if (this.data) {
      return `
      <div data-href="/">홈</div>
      <input type="text" name="name" value="${this.data.name}">
      <input type="text" name="content" value="${this.data.content}" >
      <button type="button" class="edit">글수정</button>
      `;
    }
    if (!this.data) {
      return `
      <div>없는글입니다<div>
      `;
    }
    return '';
  }
}
