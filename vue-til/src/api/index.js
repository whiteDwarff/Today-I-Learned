import axios from 'axios';

// create : 공통설정을 담을 수 있음.
const instance = axios.create({
  // http://localhost:3000/은 endPoint
  // .env 파일의 url을 가져옴.
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
