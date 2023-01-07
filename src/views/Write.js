import { Component } from '@/core/Component';
import { Repository } from '@/core/Repository';
import router from '@/router';
import { Boardservice } from '@/service/Boardservice';

export class Write extends Component {
  userdata;
  setup() {
    this.Boardservice = new Boardservice();
    this.repository = Repository;
    this.userdata = this.repository.get('user');
    if (this.userdata === null) {
      alert('로그인하고와');
      router.push('/');
      return;
    }
  }
  onMounted() {
    this.Eventadd('click', '.write', () => {
      this.write();
    });
  }
  async write() {
    const userdata = this.repository.get('user');
    const name = this.selector('[name="name"]').value;
    const content = this.selector('[name="content"]').value;
    this.Boardservice.write({ name, content }, userdata);
  }
  template() {
    return `
    <div data-href="/">홈</div>
    <input type="text" name="name">
    <input type="text" name="content">
    <button type="button" class="write">글쓰기</button>
    `;
  }
}
