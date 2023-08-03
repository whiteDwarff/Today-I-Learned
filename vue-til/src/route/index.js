import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // url에 있는 # 제거
  mode: 'history',
  routes: [
    {
      // 처음 노출되는 화면은 login으로 설정
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // page를 이동할때 필요한 자원을 import, Dynamic import
      // 초기에 application의 loading 속도가 빨라짐
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      // 존재하지 않는 url로 접속 시 404페이지 안내
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
