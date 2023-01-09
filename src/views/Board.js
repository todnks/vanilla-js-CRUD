import { component } from '@/core/component';
import { boardService } from '@/service/boardService';

export class board extends component {
  list;
  setup() {
    this.boardService = new boardService();
  }
  async onMounted() {
    this.list = await this.boardService.listup('', '');
    this.render();
  }
  template() {
    if (this.list) {
      return `
      <div data-href="/">홈<div>
      ${this.list
        .map((data) => {
          console.log(data);
          return `
          <div class="board">
          <div data-href="/view/${data.id}">글제목:${data.name}</div>
          <div>글쓴이:${data.userdata.email}</div>
          <div>글쓴시간:${data.writeDate}</div>
          </div>
        `;
        })
        .join('')}
      `;
    }
  }
}
