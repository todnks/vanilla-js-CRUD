export class repository {
  static get(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
}
