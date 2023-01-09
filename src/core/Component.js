export class component {
  #element;

  constructor({ element }) {
    this.#element = element;
    this.setup();
    this.render();
    this.eventAdd();
    this.onMounted();
  }

  setup() {}

  eventAdd(eventType, selector, callback, option = {}) {
    const selectList = [...document.querySelectorAll(selector)];
    if (selectList.length > 1) {
      selectList.forEach((item) => {
        item.addEventListener(eventType, selector, callback);
      });
      return;
    }

    const selectItem = selectList.pop();
    if (!selectItem) return;

    selectItem.addEventListener(eventType, callback, option);
  }

  template() {
    return '';
  }

  onMounted() {}

  render() {
    this.#element.innerHTML = this.template();
  }

  selector(selector) {
    return document.querySelector(selector);
  }
}
