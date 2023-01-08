import { Component } from '@/core/Component';
import { Boardservice } from '@/service/Boardservice';

export class Board extends Component {
  list;
  setup() {
    this.Boardservice = new Boardservice();
  }
  async onMounted() {
    this.list = await this.Boardservice.listup('', '');
    this.render();
  }
  template() {
    if (this.list) {
      return `
      <div data-href="/">홈<div>
      ${this.list
        .map((data) => {
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
