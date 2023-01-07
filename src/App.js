import { Component } from '@/core/Component';
import router from '@/router';

export class App extends Component {
  setup() {}
  onMounted() {
    router.start();
  }
  template() {
    return `
        <div class="content">
        </div>
      `;
  }
}
