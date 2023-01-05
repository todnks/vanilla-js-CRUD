import { Component } from '@/core/Component';
import router from '@/router';
export class App extends Component {
  onMounted() {
    router.start();
  }
  template() {
    return `
    <div class="main">
    <div data-href="/">home</div>
    <div data-href="/test">test</div>
    </div>
      <div class="content">
      </div>
    `;
  }
}
