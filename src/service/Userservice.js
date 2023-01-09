import { http } from '@/core/http';
import { repository } from '@/core/repository';
import { validator } from '@/core/validator';

export class userService {
  constructor() {
    this.http = new http('/user/');
    this.validator = validator;
    this.repository = repository;
  }

  async findUser(email) {
    const userData = await this.http.get('', {
      email,
    });

    if (userData.length >= 1) {
      return userData.pop();
    }

    return false;
  }

  async signIn({ email, password }) {
    const isEmail = this.validator.isEmail(email, '이메일 형식을 지켜주세요.');
    const isPassword = this.validator.isPassword(
      password,
      '비밀번호는 영문, 숫자 포함 8자리 이상이여야합니다.'
    );

    if (isEmail !== true) {
      alert(isEmail);
      return;
    }

    if (isPassword !== true) {
      alert(isPassword);
      return;
    }

    const getUserData = await this.findUser(email);

    if (!getUserData && password != getUserData.password) {
      alert('아이디혹은 비밀번호 틀림');
      return;
    }

    const loginDate = this.http.patch(getUserData.id, {
      loginDate: new Date(),
    });
    this.repository.set('user', getUserData);

    return loginDate;
  }

  async signUp({ email, password }) {
    const isEmail = this.validator.isEmail(email, '이메일 형식을 지켜주세요.');
    const isPassword = this.validator.isPassword(
      password,
      '비밀번호는 영문, 숫자 포함 8자리 이상이여야합니다.'
    );

    if (isEmail !== true) {
      alert(isEmail);
      return;
    }

    if (isPassword !== true) {
      alert(isPassword);
      return;
    }

    const duplicateUser = await this.findUser({ email });

    if (duplicateUser) {
      alert('중복된 이메일');
      return;
    }

    await this.http.post({
      email,
      password,
      registerDate: new Date(),
      loginDate: new Date(),
    });

    return true;
  }

  logout() {
    if (!this.repository.get('user')) return;

    this.repository.remove('user');

    return true;
  }
}
