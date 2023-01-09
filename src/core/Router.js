import { home } from '@/views/home';

export class Router {
  element;
  selector;
  #routes;
  constructor({ selector, routes }) {
    this.#routes = routes;
    this.selector = selector || '.content';
  }
  start() {
    this.addEvent();
    const element = document.querySelector(this.selector);
    this.element = element;
  }
  addEvent() {
    window.addEventListener('popstate', () => {
      this.routes();
    });
    window.addEventListener('DOMContentLoaded', () => {
      this.routes();
    });
    document.addEventListener('click', ({ target }) => {
      const href = target.dataset.href;
      if (href) {
        this.push(href);
      }
    });
  }
  push(path) {
    window.location.hash = this.findRoutes(path) === -1 ? '/404' : path;
  }
  routes() {
    const urlname = window.location.hash.replace('#', '');
    let selectComponet = Object.values(this.#routes)[this.findRoutes(urlname)];
    if (!selectComponet) selectComponet = home;
    new selectComponet({ element: this.element });
  }
  findRoutes(path) {
    if (path.indexOf('/view/') != -1 || path.indexOf('/edit/') != -1) {
      const idxPage = path.replace(/[0-9]/g, '');
      return Object.keys(this.#routes).findIndex((key) => key === idxPage);
    }
    return Object.keys(this.#routes).findIndex((key) => key === path);
  }
}
