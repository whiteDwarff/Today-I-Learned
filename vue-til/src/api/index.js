import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function createInstance() {
  // create : 공통설정을 담을 수 있음.
  const instance = axios.create({
    // http://localhost:3000/은 endPoint
    // .env 파일의 url을 가져옴.
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입
function registerUser(userData) {
  return instance.post('signup', userData);
}
// 로그인 함수
function loginUser(userData) {
  return instance.post('login', userData);
}
// 학습노트 데이터 조회
function fetchPosts() {
  return instance.get('posts');
}
//학습노트 생성
function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
