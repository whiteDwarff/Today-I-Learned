import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// login
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// posts
function createInstanceWithAuth(url) {
  // create : 공통설정을 담을 수 있음.
  const instance = axios.create({
    // http://localhost:3000/은 endPoint
    // .env 파일의 url을 가져옴.
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
