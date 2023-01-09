const baseUrl = 'http://localhost:3000';

export class http {
  url;
  basePath;
  constructor(basePath) {
    this.url = `${baseUrl}${basePath}`;
  }
  async get(path, params) {
    const queryString = Object.keys(params)
      .map(
        (key, index) => `
      ${!index ? '?' : '&'}${key}=${params[key]}
    `
      )
      .join('')
      .trim();
    const res = await Promise.race([
      fetch(`${this.url}${path}${queryString}`),
      new Promise((resolve) => setTimeout(() => resolve(false), 5000)),
    ]);
    return res.json();
  }

  async post(params) {
    await fetch(`${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  }

  async put(path, params) {
    const res = await fetch(`${this.url}/${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    if (!res.json()) {
      return false;
    }
    return true;
  }

  async patch(path, params) {
    const res = await Promise.race([
      fetch(`${this.url}${path}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }),
    ]);
    if (!res.json()) {
      return false;
    }
    return true;
  }

  async delete(path) {
    const res = await Promise.race([
      fetch(`${this.url}/${path}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    ]);
    if (!res.json()) {
      return false;
    }
    return true;
  }
}
