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
    console.log(data);
    await this.http.post(data);
  }
  async listup(params) {
    const list = await this.http.get(params);
    return list;
  }
}
