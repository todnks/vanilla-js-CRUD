import { Component } from '@/core/Component';
import router from '@/router';
import { Repository } from './core/Repository';
import { Userservice } from './service/Userservice';

export class App extends Component {
  userdata;
  setup() {
    this.Repository = Repository;
    this.userdata = JSON.parse(this.Repository.get('user'));
    this.userservice = new Userservice();
  }
  logout() {
    if (this.userservice.logout()) {
      alert('로그아웃');
      this.template();
    }
  }
  onMounted() {
    router.start();
    this.Eventadd('click', '.logout', () => {
      this.logout();
    });
  }
  template() {
    return `
        <div class="content">
        </div>
      `;
  }
}
