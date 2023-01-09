import { component } from '@/core/component';
import router from '@/router';

export class App extends component {
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
