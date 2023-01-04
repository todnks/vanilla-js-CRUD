export class Component {
  #element;

  constructor({ element }) {
    this.#element = element;
    this.setup();
    this.render();
    this.Eventadd();
    this.onMounted();
  }
  setup() {}
  Eventadd(eventType, selector, callback, option = {}) {
    const selectList = [...document.querySelectorAll(selector)];
    console.log(selectList);
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
    console.log(this.#element);
    this.#element.innerHTML = this.template();
  }

  selector(selector) {
    return document.querySelector(selector);
  }
}