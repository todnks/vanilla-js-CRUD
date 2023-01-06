export class Repository {
  static get(key) {
    const logindata = localStorage.getItem(key);
    return logindata;
  }
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
}
