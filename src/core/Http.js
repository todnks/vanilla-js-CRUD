const baseUrl = 'http://localhost:3000';

export class Http {
  baseurl;
  basepath;
  constructor(basepath) {
    this.baseurl = `${baseUrl}${basepath}`;
  }
  async get(idx, params) {
    const res = await fetch(this.baseurl);
    return res;
  }

  async post(idx, params) {}
}
