const baseUrl = 'http://localhost:3000';

export class Http {
  baseurl;
  basepath;
  constructor(basepath) {
    this.baseurl = `${baseUrl}${basepath}`;
  }
  async get(params) {
    const queryString = Object.keys(params)
      .map(
        (key, index) => `
      ${!index ? '?' : '&'}${key}=${params[key]}
    `
      )
      .join('')
      .trim();
    const res = await Promise.race([
      fetch(`${this.baseurl}${queryString}`),
      new Promise((resolve) => setTimeout(() => resolve(false), 5000)),
    ]);
    return res.json();
  }

  async post(params) {
    const res = await fetch(`${this.baseurl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  }
}
