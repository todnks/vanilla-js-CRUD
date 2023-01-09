import { http } from '@/core/http';

export class boardService {
  constructor() {
    this.http = new http('/board/');
  }

  async write(params, userData) {
    const { name, content } = params;
    if (name === '' || content === '') {
      alert('내용입력해');
      return;
    }
    const data = {
      userData,
      ...params,
      writeDate: new Date(),
    };
    await this.http.post(data);
  }

  boardEdit(path, params, userData) {
    const res = this.http.put(path, {
      userData,
      ...params,
      writeDate: new Date(),
      editboolean: true,
    });
    return res;
  }

  async listup(path, params) {
    const list = await this.http.get(path, params);
    if (Object.keys(list).length === 0) {
      return false;
    }
    return list;
  }

  async boardDelete(path) {
    await this.http.delete(path);
    return true;
  }
}
