import store from '@/store/index';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    // request 요청 전
    function (config) {
      config.headers.Authorization = store.state.token;
      return config;
    },
    // 요청 후 에러 처리
    function (error) {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    // 받기 전
    function (response) {
      return response;
    },
    // 받은 후 에러처리
    function (error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
