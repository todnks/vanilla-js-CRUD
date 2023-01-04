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
    window.addEventListener('popstate', (event) => {
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

    new selectComponet({ element: this.element });
  }
  findroutes(path) {
    return Object.keys(this.#routes).findIndex((key) => key === path);
  }
}
