import { Http } from '@/core/Http';

export class Boardservice {
  constructor() {
    this.http = new Http('/board/');
  }

  async write(params, userdata) {
    const { name, content } = params;
    if (name === '' && content === '') {
      alert('내용입력해');
      return;
    }
    const data = {
      userdata,
      ...params,
      writeDate: new Date(),
    };
    await this.http.post(data);
  }

  async boardedit(path, params, userdata) {
    this.http.put(path, {
      userdata,
      ...params,
      writeDate: new Date(),
      editboolean: true,
    });
  }

  async listup(path, params) {
    const list = await this.http.get(path, params);
    return list;
  }

  async boarddelete(path) {
    await this.http.delete(path);
  }
}
