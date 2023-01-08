import { Home } from '@/views/Home';

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
    window.location.hash = this.findroutes(path) === -1 ? '/404' : path;
  }
  routes() {
    const urlname = window.location.hash.replace('#', '');
    let selectComponet = Object.values(this.#routes)[this.findroutes(urlname)];
    if (!selectComponet) selectComponet = Home;
    new selectComponet({ element: this.element });
  }
  findroutes(path) {
    if (path.indexOf('/view/') != -1) {
      return Object.keys(this.#routes).findIndex((key) => key === '/view/');
    }
    if (path.indexOf('/edit/') != -1) {
      return Object.keys(this.#routes).findIndex((key) => key === '/edit/');
    }
    return Object.keys(this.#routes).findIndex((key) => key === path);
  }
}
