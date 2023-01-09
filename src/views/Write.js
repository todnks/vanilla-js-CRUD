import { component } from '@/core/component';
import { repository } from '@/core/repository';
import router from '@/router';
import { boardService } from '@/service/boardService';

export class write extends component {
  userData;
  setup() {
    this.boardService = new boardService();
    this.repository = repository;
    this.userData = this.repository.get('user');
    if (!this.userData) {
      alert('로그인하고와');
      router.push('/');
      return;
    }
  }
  onMounted() {
    this.eventAdd('click', '.write', () => {
      this.write();
    });
  }
  async write() {
    const userData = this.repository.get('user');
    const name = this.selector('[name="name"]').value;
    const content = this.selector('[name="content"]').value;
    if (!userData) {
      alert('로그인후에 이용가능합니다');
      router.push('/');
      return;
    }
    this.boardService.write({ name, content }, userData);
    alert('글작성완료');
    router.push('/');
    return;
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
