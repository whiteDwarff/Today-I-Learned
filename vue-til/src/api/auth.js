// 로그인, 회원가입, 회원탈퇴 API
import { instance } from '@/api/index';

// 회원가입
function registerUser(userData) {
  return instance.post('signup', userData);
}
// 로그인 함수
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
