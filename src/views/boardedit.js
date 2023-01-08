import { Component } from '@/core/Component';
import { Repository } from '@/core/Repository';
import router from '@/router';
import { Boardservice } from '@/service/Boardservice';

export class boardedit extends Component {
  data;
  hash;
  user;
  setup() {
    this.Repository = Repository;
    this.Boardservice = new Boardservice();
    this.hash = location.hash.slice(
      location.hash.length - 1,
      location.hash.length
    );
  }
  async onMounted() {
    this.data = await this.Boardservice.listup(this.hash, '');
    this.user = this.Repository.get('user');

    if (
      this.user.email != this.data.userdata.email &&
      this.user.id != this.data.userdata.id &&
      this.user.password != this.data.userdata.password
    ) {
      alert('본인만 가능함');
      router.push('/');
      return;
    }
    const { email, password, id } = this.data.userdata;
    this.render();
    this.Eventadd('click', '.edit', () => {
      this.boardedit();
    });
  }
  boardedit() {
    this.hash = location.hash.slice(
      location.hash.length - 1,
      location.hash.length
    );
    const name = this.selector(`[name="name"]`).value;
    const content = this.selector(`[name="content"]`).value;
    this.Boardservice.boardedit(`${this.hash}`, { name, content }, this.user);
    alert('글수정완료');
    router.push('/');
    return;
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
    return '';
  }
}
